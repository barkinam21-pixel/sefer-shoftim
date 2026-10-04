export default async function handler(req,res){
  const base='https://www.kolhalashon.com/api/';
  function siteKey(){
    let n='';
    while(n.length<7)n+=Math.random().toString(36).slice(2);
    return 'Bearer '+n.slice(0,7);
  }
  function headers(extra={}){
    return {
      'accept':'application/json, text/plain, */*',
      'content-type':'application/json',
      'accept-language':'he-IL,he;q=0.9,en-AU;q=0.8,en;q=0.7,en-US;q=0.6',
      'authorization-site-key':siteKey(),
      'origin':'https://www.kolhalashon.com',
      'referer':'https://www.kolhalashon.com/',
      'sec-ch-ua':'"Chromium";v="120", "Google Chrome";v="120", "Not=A?Brand";v="8"',
      'sec-ch-ua-mobile':'?0',
      'sec-ch-ua-platform':'"macOS"',
      'sec-fetch-dest':'empty',
      'sec-fetch-mode':'cors',
      'sec-fetch-site':'same-origin',
      'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      ...extra
    };
  }
  async function call(path,opts={}){
    const r=await fetch(base+path,{...opts,headers:headers(opts.headers||{}),redirect:'manual'});
    const txt=await r.text();
    let body;try{body=JSON.parse(txt)}catch{body={_text:txt.slice(0,1500)}}
    return {status:r.status,type:r.headers.get('content-type'),location:r.headers.get('location'),body};
  }
  const searches={};
  for(const q of ['רפאל נוסבוים','הנך הבהיר','שופטים']){
    searches[q]=await call('Search/WebSite_GetSearchItems/'+encodeURIComponent(q)+'/-1/1/5000');
  }
  const all=Object.values(searches).flatMap(x=>Array.isArray(x.body)?x.body:[]);
  const rav=all.find(x=>x.SearchItemType===2 && /רפאל.*נוסבוים|נוסבוים.*רפאל/.test((x.SearchItemTextHebrew||'')+' '+(x.SearchItemTextEnglish||'')));
  let ravShiurim=null,hits=[];
  if(rav){
    const body={
      QueryType:-1,LangID:-1,MasechetID:-1,DafNo:-1,MasechetIDY:-1,DafNoY:-1,
      MoedID:-1,ParashaID:-1,EnglishDisplay:true,MasechetIDYOz:-1,DafNoYOz:-1,
      FromRow:0,NumOfRows:1000,PrefferedLanguage:-1,SearchOrder:7,FiltersArray:[],
      GeneralID:Number(rav.SearchItemId),FilterSwitch:'1'.repeat(111),activefilterType:'all'
    };
    ravShiurim=await call('Search/WebSite_GetRavShiurim/',{method:'POST',body:JSON.stringify(body)});
    if(Array.isArray(ravShiurim.body)) hits=ravShiurim.body.filter(x=>/שופטים/.test((x.TitleHebrew||'')+' '+(x.MainTopicHebrew||'')+' '+(x.CatDesc1||'')+' '+(x.CatDesc2||'')));
  }
  const known=await call('TblShiurimLists/WebSite_GetShiurDetails/31644578');
  res.setHeader('cache-control','no-store');
  res.status(200).json({base,rav,searches,ravStatus:ravShiurim?.status,ravCount:Array.isArray(ravShiurim?.body)?ravShiurim.body.length:null,hits,known});
}