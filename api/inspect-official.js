export default async function handler(req,res){
  const targets={
    glat:'https://glat.tube/category/13218',
    kol:'https://www.kolhalashon.com/he/regularSite/playShiur/31472614/-1/0/false'
  };
  const out={};
  for(const [k,u] of Object.entries(targets)){
    try{
      const r=await fetch(u,{headers:{
        'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/141 Safari/537.36',
        'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'accept-language':'he-IL,he;q=0.9,en;q=0.7'
      },redirect:'follow'});
      const t=await r.text();
      const anchors=[...t.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)]
        .map(m=>({href:m[1],text:m[2].replace(/<[^>]+>/g,' ').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,'&').replace(/\s+/g,' ').trim()}))
        .filter(x=>/הנ.?ך|שופטים|רפאל נוסבוים|video|playlist/i.test(x.text+' '+x.href))
        .slice(0,120);
      out[k]={
        status:r.status,url:r.url,
        frame:r.headers.get('x-frame-options'),
        csp:r.headers.get('content-security-policy'),
        type:r.headers.get('content-type'),
        title:(t.match(/<title[^>]*>([\s\S]*?)<\/title>/i)||[])[1]||null,
        length:t.length,
        blocked:/just a moment|performing security verification|cf-chl/i.test(t),
        anchors,
        snippets:[...t.matchAll(/.{0,160}(?:הנ.?ך|שופטים|רפאל נוסבוים).{0,300}/gi)].slice(0,40).map(m=>m[0].replace(/\s+/g,' '))
      };
    }catch(e){out[k]={error:String(e)}}
  }
  res.setHeader('cache-control','no-store');
  res.status(200).json(out);
}