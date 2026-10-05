export const config = { runtime: 'edge' };

const KH = 'https://www.kolhalashon.com';

function siteKey(){
  let n='';
  while(n.length<7)n+=Math.random().toString(36).slice(2);
  return 'Bearer '+n.slice(0,7);
}

function khHeaders(accept='application/json, text/plain, */*'){
  return {
    'accept': accept,
    'authorization-site-key': siteKey(),
    'origin': KH,
    'referer': KH+'/'
  };
}

function json(body,status=200){
  return new Response(JSON.stringify(body),{
    status,
    headers:{
      'content-type':'application/json; charset=utf-8',
      'cache-control':'no-store',
      'x-content-type-options':'nosniff'
    }
  });
}

export default async function handler(request){
  const url=new URL(request.url);
  const id=(url.searchParams.get('id')||'').trim();
  const type=(url.searchParams.get('type')||'2').trim();
  const probe=url.searchParams.get('probe')==='1';

  if(!/^\d+$/.test(id)) return json({ok:false,error:'invalid-id'},400);
  if(!/^[123]$/.test(type)) return json({ok:false,error:'invalid-media-type'},400);

  try{
    const tokenResp=await fetch(
      KH+'/api/files/GetPlayToken/'+encodeURIComponent(id)+'/'+type,
      {headers:khHeaders(),redirect:'follow'}
    );
    const tokenRaw=(await tokenResp.text()).trim();
    if(!tokenResp.ok) return json({ok:false,stage:'token',status:tokenResp.status},502);

    let token='';
    try{
      const parsed=JSON.parse(tokenRaw);
      token=parsed && (parsed.token||parsed.Token)||'';
    }catch(_){
      token=tokenRaw.replace(/^"|"$/g,'');
    }
    if(!token) return json({ok:false,stage:'token',error:'empty-token'},502);

    const mediaUrl=KH+'/api/files/GetFileToPlay/'+encodeURIComponent(id)+'/'+type+'/'+encodeURIComponent(token);
    const h=khHeaders('*/*');
    const range=request.headers.get('range');
    if(range)h.range=range;
    else if(probe)h.range='bytes=0-0';

    const media=await fetch(mediaUrl,{headers:h,redirect:'follow'});
    if(!(media.ok||media.status===206)){
      try{media.body && media.body.cancel()}catch(_){}
      return json({ok:false,stage:'media',status:media.status},502);
    }

    const contentType=media.headers.get('content-type')||'application/octet-stream';
    if(probe){
      try{media.body && media.body.cancel()}catch(_){}
      return json({
        ok:true,
        id,
        type:Number(type),
        status:media.status,
        contentType,
        contentRange:media.headers.get('content-range')||null,
        acceptRanges:media.headers.get('accept-ranges')||null
      });
    }

    const out=new Headers();
    out.set('content-type',contentType);
    out.set('accept-ranges',media.headers.get('accept-ranges')||'bytes');
    out.set('cache-control','private, no-store');
    out.set('x-content-type-options','nosniff');
    const cl=media.headers.get('content-length'); if(cl)out.set('content-length',cl);
    const cr=media.headers.get('content-range'); if(cr)out.set('content-range',cr);

    return new Response(media.body,{status:media.status,headers:out});
  }catch(err){
    return json({ok:false,error:'upstream-failed',detail:String(err).slice(0,180)},502);
  }
}
