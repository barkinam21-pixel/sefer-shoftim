export default async function handler(req,res){
  const base='https://srv.kolhalashon.com/api/';
  const headers={
    'accept':'application/json, text/plain, */*',
    'accept-language':'he-IL,he;q=0.9,en;q=0.7',
    'authorization-site-key':'Bearer 8ea2pe8',
    'content-type':'application/json',
    'origin':'https://www2.kolhalashon.com',
    'referer':'https://www2.kolhalashon.com/',
    'user-agent':'Mozilla/5.0'
  };
  async function getJson(url,opts={}){
    const r=await fetch(url,{...opts,headers:{...headers,...(opts.headers||{})}});
    const txt=await r.text();
    let body; try{body=JSON.parse(txt)}catch{body={_text:txt.slice(0,2000)}}
    return {status:r.status,body};
  }
  const queries=['רפאל נוסבוים','הנך הבהיר','שופטים פרק א','שופטים'];
  const searches={};
  for(const q of queries){
    searches[q]=await getJson(base+'Search/WebSite_GetSearchItems/'+encodeURIComponent(q)+'/-1/1/4');
  }
  const all=Object.values(searches).flatMap(x=>Array.isArray(x.body)?x.body:[]);
  const rav=all.find(x=>x.SearchItemType===2 && /רפאל.*נוסבוים|נוסבוים.*רפאל/.test(x.SearchItemTextHebrew||''));
  let ravShiurim=null;
  if(rav){
    const body={
      QueryType:-1,LangID:-1,MasechetID:-1,DafNo:-1,MasechetIDY:-1,DafNoY:-1,
      MoedID:-1,ParashaID:-1,EnglishDisplay:false,MasechetIDYOz:-1,DafNoYOz:-1,
      FromRow:0,NumOfRows:500,PrefferedLanguage:-1,SearchOrder:7,FiltersArray:[],
      GeneralID:Number(rav.SearchItemId),FilterSwitch:'1'.repeat(111)
    };
    ravShiurim=await getJson(base+'Search/WebSite_GetRavShiurim/',{method:'POST',body:JSON.stringify(body)});
  }
  const hits=Array.isArray(ravShiurim?.body)?ravShiurim.body.filter(x=>/שופטים|יהושע/.test((x.TitleHebrew||'')+' '+(x.MainTopicHebrew||'')+' '+(x.CatDesc1||'')+' '+(x.CatDesc2||''))):[];
  res.setHeader('cache-control','no-store');
  res.status(200).json({rav,searches,ravCount:Array.isArray(ravShiurim?.body)?ravShiurim.body.length:null,ravStatus:ravShiurim?.status,hits});
}