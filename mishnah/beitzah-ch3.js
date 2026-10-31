"use strict";
/*
 * Mishnah Cinema Journey · Beitzah chapter 3, 2026-10-31.
 * Eight units follow the Mishnah (NOT the historical chronology).
 * No full playback or subtitle verification. Two YouTube IDs verified
 * only via publisher metadata / embedded video links; six further
 * lesson videos are listed in the creator's chapter-by-chapter catalog.
 * Do not confuse the Mishnah with the later Gemara.
 */
(function(){
  const parent=document.getElementById("beitzahChapter2");
  if(!parent||document.getElementById("beitzahChapter3"))return;
  const units=[
    [1,"מתי בעל חיים נחשב כבר ניצוד?","המשנה מבחינה בין דגים לבין חיה ועוף בביברין ומביאה את הכלל של רבן שמעון בן גמליאל: המחוסר צידה אסור. אין מדובר בהיתר לצוד כל חיה מן הגדר.","ביצה ב׳, י׳ סיימה בדיני עגלה; כאן מתחיל נושא חדש בסדר המסכת: בעלי חיים שהוכנו לצורכי יום טוב, ולא תקופה היסטורית חדשה.","אם הונחו מלכודות עוד לפני החג, האם ברור שהשלל כבר היה בתוכן?"],
    [2,"מלכודות והדגים שהובאו לרבן גמליאל","מה שנלכד במצודה שהונחה בערב יום טוב אינו מותר לנטילה בלי ידיעה שניצוד מראש. המעשה ברבן גמליאל והדגים הוא חלק מן המשנה; מניעיו מעבר לנאמר אינם ידועים.","א׳ ביררה אם החיה עדיין דורשת פעולת צידה; ב׳ שואלת מתי נתפסה בפועל במלכודת. זהו קשר הלכתי, לא אירוע המשך.","מה עושים עם בהמה מסוכנת שיש מעט זמן לאכול ממנה בחג?"],
    [3,"בהמה מסוכנת: זמן לאכילת כזית","התנא הראשון דורש אפשרות לאכול כזית צלי; רבי עקיבא מדבר גם על כזית חי מבית טביחתה. המשנה מגבילה גם את דרך הבאת הבשר מן השדה.","ב׳ ביררה מתי בעל החיים נתפס; ג׳ עוברת למצב חריג של בהמה מסוכנת, ולשאלה אם יש עוד שימוש במאכל ביום טוב.","מה דינו של בכור שנפל לבור וצריך לבדוק מום?"],
    [4,"בכור שנפל לבור: רבי יהודה ורבי שמעון","רבי יהודה מציע בדיקת מומחה בשאלת מום הבכור; רבי שמעון מדגיש את מועד היכר המום ואת שאלת המוכן. אין להציג אותם נפגשים בסצנה משותפת ללא מקור.","ג׳ דנה בבהמה מסוכנת; ד׳ עוברת לבכור עם שאלות מוכנות ומום. אלה שני מקרים שונים של בעלי חיים ביום טוב.","ומה עושים עם בהמה שמתה, או עם חלה שנטמאה?"],
    [5,"רבי טרפון, בהמה שמתה וחלה שנטמאה","המשנה אוסרת להזיז בהמה שמתה ומתארת שאלה שהופנתה לרבי טרפון על הבהמה והחלה שנטמאה. תיאור כניסתו לבית המדרש הוא מן המקור, אך אין לבדות דיאלוג.","ד׳ בדקה בכור חי שנפל לבור; ה׳ בוחנת חפצים שאינם ראויים לשימוש: בהמה שמתה וחלה שנטמאה.","כיצד מחלקים בשר בין אנשים בלי להפוך את החג ליום מסחר?"],
    [6,"חלוקת בשר ומשקולת על המאזניים","המשנה מבדילה בין הסכמה מוקדמת לחלוקת הבהמה לבין מנייה חדשה בחג. רבי יהודה מציע שקילה כנגד כלי או קופיץ, וחכמים אוסרים שימוש בכף מאזניים.","ה׳ עסקה במה שאין מזיזים; ו׳ עוברת לחלוקת בשר הראוי למאכל. זהו מעבר נושאי, לא סיבה ותוצאה.","ומה הדין בהשחזת סכין ובקביעת מחיר אצל הטבח?"],
    [7,"סכין הטבח ומכירת בשר ביום טוב","המשנה אוסרת השחזת סכין כדרכה ומזכירה העברה על גבי סכין אחרת. אין להזמין בשר בנוסח מחיר מסחרי רגיל; מובאת דרך של שחיטה וחלוקה.","ו׳ עסקה בשקילת הבשר וחלוקתו; ז׳ נשארת במרחב הטבח ועוברת לכלים ולנוסח העסקה.","האם מותר לבקש מן החנווני כלי מלא, ביצים או אגוזים?"],
    [8,"בחנות של אבא שאול בן בטנית: מידה ומניין","המשנה מתירה בקשה למלא כלי שלא בדרך מידת מסחר, ומספרת על הכנת המידות של אבא שאול בן בטנית. ביצים ואגוזים במניין מוזכרים כדוגמה לבקשה ביתית; אין להסיק מכך היתר גורף לעסקאות.","ז׳ הגבילה שימוש בלשון מחיר אצל טבח; ח׳ עוברת לשפת הבקשה מן החנווני ולדיוק במידה, ומסיימת את הפרק.","הבא: ביצה ד׳, א׳ — איך מעבירים כדי יין ותבן ביום טוב?"]
  ];
  const directVideos={3:"G977gY80Qzw",5:"ZEvzeLk-3No"};
  const creator="https://www.torahsecrets.co.uk/playlist/masechet-beitzah/";
  const textSource="https://he.wikisource.org/wiki/משנה_ביצה_ג";
  const mamre="https://mechon-mamre.org/b/h/h27.htm";
  const chapterVideo="https://mishna.org.il/מועד/ביצה/3";
  const letters=["","א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ז׳","ח׳"];
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const section=document.createElement("section");
  section.id="beitzahChapter3";section.setAttribute("aria-label","ביצה פרק ג · לימוד המשנה לפי סדרה");
  let html='<div class="study-divider">ביצה ג׳ · שמונה משניות<small>צידה, הכנת בשר ומסחר ביום טוב · מסלול המשנה, לא ציר הזמן ההיסטורי</small></div>'+
    '<p class="smallprint">מקורות: מכון ממרא וויקיטקסט, שמונה משניות בשתי המהדורות. הבדלים מילוליים קיימים, במיוחד ג׳, ג׳ וג׳, ח׳ — ראו תיק בדיקה. ההסברים והחיבורים נכתבו כיום ואינם ציטוט של המשנה או שחזור מצולם.</p>'+
    '<p class="smallprint">סדרת The Mishnah Project כוללת שמונה סרטונים נפרדים באנגלית לפרק זה (כ־2:56–6:30 לסרטון לפי קטלוג היוצר). זוהו שני מזהי נגן של משניות ג׳ וה׳; לשאר שש היחידות יש קישור לסרטון בעמוד היוצר, ללא הטעיה של נגן שלא אומת. טרם בוצעו צפייה ממשית, בדיקת איכות חזותית או בדיקת כתוביות.</p>'+
    '<div class="peah-links"><a target="_blank" rel="noopener noreferrer" href="https://www.sefaria.org/Mishnah_Beitzah.3?lang=he">ספריא · טקסט ↗</a> '+
    '<a target="_blank" rel="noopener noreferrer" href="'+textSource+'">ויקיטקסט · טקסט ↗</a> '+
    '<a target="_blank" rel="noopener noreferrer" href="'+mamre+'">מכון ממרא ↗</a> '+
    '<a target="_blank" rel="noopener noreferrer" href="'+creator+'">כל שמונת הסרטונים ↗</a> '+
    '<a target="_blank" rel="noopener noreferrer" href="'+chapterVideo+'">שיעור עברי לכל הפרק ↗</a></div>'+
    '<div class="actions" style="margin:12px 0"><button type="button" id="beitzah3Continue" class="btn gold">▶ המשך ללמוד</button> <span id="beitzah3Progress" class="progressnote" aria-live="polite"></span></div><div class="eruvin-cards">';
  for(const [n,title,explanation,bridge,question] of units){
    const direct=directVideos[n];
    const previous=n===1?"#beitzah-2-10":"#beitzah-3-"+(n-1);
    const next=n===8?"https://www.sefaria.org/Mishnah_Beitzah.4.1?lang=he":"#beitzah-3-"+(n+1);
    const external="https://mishnah.co/moed/beitza/chapter-3/mishnah-"+n;
    const video=direct?
      '<button type="button" class="btn gold" data-beitzah3-play="'+direct+'" data-n="'+n+'">▶ נגן כאן</button> <a class="btn ghost" href="https://www.youtube.com/watch?v='+direct+'" target="_blank" rel="noopener noreferrer">פתח אצל היוצר ↗</a>':
      '<a class="btn gold" href="'+external+'" target="_blank" rel="noopener noreferrer">▶ סרטון המשנה אצל היוצר ↗</a>';
    html+='<article class="eruvin-card" id="beitzah-3-'+n+'"><span class="eyebrow">ביצה ג׳, '+letters[n]+'</span><h4>'+esc(title)+'</h4>'+
      '<p>'+esc(explanation)+'</p>'+
      '<p class="eruvin-bridge"><strong>מה ראינו קודם — כיצד זה מוביל לשיעור הנוכחי?</strong> '+esc(bridge)+' <strong>השאלה הבאה:</strong> '+esc(question)+'</p>'+
      '<p class="eruvin-credit">הסבר עכשווי · The Mishnah Project, סרטון '+(direct?'עם מזהה מאומת במטא־נתונים':'בעמוד היוצר ובקטלוג')+'; לא אומתה צפייה או איכות בפועל</p>'+
      '<div class="eruvin-actions">'+video+' <button type="button" class="btn ghost" data-beitzah3-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
      (direct?'<div class="eruvin-video" data-beitzah3-host="'+n+'" hidden></div>':'')+
      '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Beitzah.3.'+n+'?lang=he" target="_blank" rel="noopener noreferrer">הנוסח בספריא ↗</a> <a href="'+textSource+'" target="_blank" rel="noopener noreferrer">ויקיטקסט ↗</a> <a href="'+previous+'">הקודם</a> <a href="'+next+'"'+(n===8?' target="_blank" rel="noopener noreferrer"':'')+'>הבא</a></div></article>';
  }
  section.innerHTML=html+'</div><p class="smallprint">המשך לפי סדר המשנה: ביצה ד׳, א׳. החוליות בסדרת הסרטונים הן לפי נושאי המשניות, לא אירועים היסטוריים זה אחר זה. הסרטונים מוטמעים ממקורם, ללא העתקת קובצי וידאו.</p>';
  parent.after(section);
  const store="mishnah_cinema_beitzah_ch3_v1";
  let state={};
  try{const val=JSON.parse(localStorage.getItem(store)||"{}");if(val&&typeof val==="object"&&!Array.isArray(val))state=val;}catch(_){}
  const marks=Array.from(section.querySelectorAll("[data-beitzah3-mark]"));
  const continueBtn=section.querySelector("#beitzah3Continue");
  function redraw(){
    let done=0;
    for(const button of marks){
      const yes=!!state[button.dataset.beitzah3Mark];if(yes)done++;
      button.setAttribute("aria-pressed",String(yes));button.textContent=yes?"✓ למדתי — בטל":"סמן שלמדתי";
    }
    section.querySelector("#beitzah3Progress").textContent=done+" / 8";continueBtn.disabled=done===8;
  }
  section.addEventListener("click",e=>{
    const button=e.target.closest("button");if(!button||!section.contains(button))return;
    if(button.dataset.beitzah3Mark){
      const n=button.dataset.beitzah3Mark;state[n]=!state[n];try{localStorage.setItem(store,JSON.stringify(state));}catch(_){}
      redraw();return;
    }
    const id=button.dataset.beitzah3Play,n=button.dataset.n;
    if(!id||directVideos[n]!==id||!/^[A-Za-z0-9_-]{11}$/.test(id))return;
    const host=section.querySelector('[data-beitzah3-host="'+n+'"]');if(!host)return;
    section.querySelectorAll("[data-beitzah3-host]").forEach(h=>{h.replaceChildren();h.hidden=true;});
    const f=document.createElement("iframe");
    f.src="https://www.youtube-nocookie.com/embed/"+id+"?rel=0";f.loading="lazy";
    f.referrerPolicy="strict-origin-when-cross-origin";f.title="ביצה ג׳ משנה "+n+" — The Mishnah Project";
    f.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    f.allowFullscreen=true;host.appendChild(f);host.hidden=false;button.textContent="↻ טען שוב";
  });
  continueBtn.addEventListener("click",()=>{
    const u=units.find(x=>!state[x[0]]);if(u)document.getElementById("beitzah-3-"+u[0])?.scrollIntoView({behavior:"smooth",block:"center"});
  });
  redraw();
  let hash="";try{hash=decodeURIComponent(location.hash.slice(1));}catch(_){}
  if(/^beitzah(?:Chapter3|-3-[1-8])$/.test(hash)){
    const node=hash==="beitzahChapter3"?section:document.getElementById(hash);
    if(node)requestAnimationFrame(()=>node.scrollIntoView({behavior:"auto",block:"start"}));
  }
})();