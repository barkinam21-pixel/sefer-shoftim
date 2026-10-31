"use strict";
/* Beitzah 5: seven textual Mishnah units (Wikisource numbering).
   Links and a single direct YouTube ID: publisher metadata only; no playback
   or subtitles verified. Historical chronology is independent. */
(function(){
  const parent=document.getElementById("beitzahChapter4");
  if(!parent||document.getElementById("beitzahChapter5"))return;
  const units=[
    [1,"כשהגשם מאיים על הפירות","פירות שהונחו לייבוש על גג עומדים להירטב. המשנה מתירה ביום טוב להשילם דרך ארובה, ולא בשבת; מותר גם לכסות פירות וכדי יין ושמן מפני דלף. פירוש ברטנורא מדגיש את מניעת ההפסד.","ביצה ד׳, ז׳ סיימה בהכנת פירות לשימוש; הסרטון הנוכחי פותח מקרה אחר לגמרי: איך מצילים פירות מגשם ביום טוב.","האם כל פעולה לצורך טוב מותרת בחג?","04:45"],
    [2,"שבות, רשות ומצווה: הגבולות ביום טוב","שלוש קבוצות של פעולות המנויות במשנה אינן נעשות ביום טוב, ובהן עלייה באילן, רכיבה, דיון וקידושין, וכן הקדשות והפרשת תרומות ומעשרות. בסוף המשנה מופיע הכלל על הבדל אוכל נפש בין יום טוב לשבת; אין להציגו כסיכום כל פרטי ההלכה המאוחרת.","א׳ התירה פעולה מוגבלת להצלת ממון; ב׳ מבררת מה נותר אסור גם כשיש לאדם מטרה ראויה. זהו דיון הלכתי מתפתח, לא אירועים שקרו בזה אחר זה.","אם אסור להעביר דברים בלי גבול, מה קובע עד היכן מותר לשאת את הבהמה והכלים?","07:07"],
    [3,"בהמה וכלים כרגלי הבעלים","המשנה קושרת את תחום ההולכה של בהמה וכלים לתחום בעליהם, ובוחנת בהמה שנמסרה לבן או לרועה וכלים המיוחדים לאחד מן האחים או משותפים לכולם. אפשר לדמיין מפה של תחומי הליכה, אך זו המחשה עכשווית ולא ממצא ארכאולוגי.","ב׳ עסקה באיסורים החלים גם ביום טוב; ג׳ עוברת לבדיקת המרחב המותר לחפצים ולבעלי חיים. השינוי הוא נושאי, לא סיבתי-היסטורי.","מה קורה כששאלתי כלי מחבר עוד לפני החג, או רק במהלכו?","06:44"],
    [4,"שאילת כלי ותבלינים לעיסה","כלי שנשאל מערב יום טוב נידון לפי תחום השואל, ואילו כלי שנשאל ביום טוב לפי המשאיל. כאשר אישה שואלת תבלין, מים ומלח לעיסתה, עולה שאלה של תחום משותף; רבי יהודה חולק לגבי המים בנימוק שאין בהם ממש.","ג׳ קבעה כיצד תחום הבעלים מלווה את החפץ; ד׳ מקשה עלינו במצב מוכר: החפץ או המרכיב עובר בין שכנים בזמן שונה.","והאם אותה שייכות מרחבית חלה אפילו על גחלת, שלהבת ומים בבור?","03:57"],
    [5,"גחלת ושלהבת, מים ובורות","המשנה מבדילה בין גחלת לבין שלהבת לענייני תחומין ומעילה, ובין בור של יחיד, של אנשי העיר ושל עולי בבל. בחלק מן העדים מופיע גם דין הוצאת גחלת לרשות הרבים; מכון ממרא משמיט קטע זה והבדל הנוסח עדיין לא הוכרע.","ד׳ בחנה חפצים ורכיבי מזון שאולים; ה׳ בודקת מקרים פחות מוחשיים — אש ומי בור — וממחישה מדוע שיוך אינו תמיד פשוט.","אם הפירות שלי בעיר אחרת, מי רשאי להביאם אליי בחג?","06:52"],
    [6,"הפירות בעיר אחרת ועירוב התחומין","המשנה בוחנת פירות של אדם הנמצאים בעיר אחרת. העובדה שבני העיר האחרת עירבו אינה מספיקה כדי להביאם אליו; אם הבעלים עצמו עירב, הפירות נידונים כמותו. זה המשך רעיוני לדיני תחום הבעלים, לא היסטוריה של מסע מסוים.","ה׳ עסקה בבורות ובחפצים לפי שיוכם; ו׳ חוזרת לפירות ומראה שגם בעלות עליהם משפיעה על גבול הולכתם.","האם מותר לאורח לחזור הביתה עם מנה שקיבל מן המארח?","02:20"],
    [7,"מנות לאורחים ובהמות של הבית והשדה","המשנה מבררת באילו תנאים רשאים אורחים לקחת עמם מנות, ומבדילה בין בהמות ביתיות הלנות בעיר לבין בהמות מדבריות הלנות מחוץ לעיר, לעניין הכנתן לשחיטה ביום טוב. פרטי אופן הזיכוי משתנים בנוסחים ויש לעיין בהם במקור.","ו׳ דנה בפירות שבבעלות אדם אך נמצאים במקום אחר; ז׳ מעבירה את רעיון ההקניה וההכנה אל סעודת אורחים ואל בעלי חיים. זו חתימת המסכת, לא חוליה בעלילה היסטורית.","המסכת הבאה בסדר מועד: ראש השנה א׳, א׳ — ארבעה ראשי שנים; מה משמעות כל אחד?","03:01"]
  ];
  const ids={3:"KcNDL1Zp4lg"};
  const letters=["","א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ז׳"];
  const e=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const text="https://he.wikisource.org/wiki/משנה_ביצה_ה";
  const mamre="https://mechon-mamre.org/b/h/h27.htm";
  const hebrew="https://mishna.org.il/מועד/ביצה/5";
  const section=document.createElement("section");
  section.id="beitzahChapter5";
  section.setAttribute("aria-label","ביצה פרק ה · לימוד שבע המשניות לפי הסדר");
  let html='<div class="study-divider">ביצה ה׳ · שבע משניות<small>הצלת פירות, תחומי שבת, בעלות ושאילה · לימוד המשנה ולא סדר זמנים היסטורי</small></div>'+
    '<p class="smallprint">בדיקת נוסח: ויקיטקסט וספריא משתמשים בשבע משניות; מכון ממרא מאחד את משניות ה׳–ו׳ ולכן מספר שש יחידות. במשנה ה׳ קיים הבדל בנוסח דין הגחלת. ההסברים להלן הם ניסוח לימודי בן זמננו ולא ציטוט המשנה; כשיש ספק פותחים את המקורות.</p>'+
    '<p class="smallprint">שבעה סרטונים פרטניים באנגלית מופיעים בקטלוג The Mishnah Project לפי פרק ומשנה. נגן פנימי זוהה רק למשנה ג׳; לשאר שש קישור לעמוד הסרטון אצל המפרסם. לא אומתו צפייה, איכות ההמחשה, כתוביות או ניגון בדפדפן.</p>'+
    '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Beitzah.5?lang=he" target="_blank" rel="noopener noreferrer">ספריא ↗</a> <a href="'+text+'" target="_blank" rel="noopener noreferrer">ויקיטקסט ↗</a> <a href="'+mamre+'" target="_blank" rel="noopener noreferrer">מכון ממרא ↗</a> <a href="'+hebrew+'" target="_blank" rel="noopener noreferrer">שיעור עברי לפרק השלם ↗</a> <a href="https://www.torahsecrets.co.uk/playlist/masechet-beitzah/" target="_blank" rel="noopener noreferrer">קטלוג שבעת הסרטונים ↗</a></div>'+
    '<div class="actions" style="margin:12px 0"><button id="beitzah5Continue" type="button" class="btn gold">▶ המשך ללמוד</button> <span class="progressnote" id="beitzah5Progress" aria-live="polite"></span></div><div class="eruvin-cards">';
  for(const [n,title,explanation,bridge,question,duration] of units){
    const id=ids[n];
    const publisher="https://www.torahsecrets.co.uk/beitzah-chapter-5-mishnah-"+n+"/";
    const video=id?
      '<button type="button" class="btn gold" data-beitzah5-play="'+id+'" data-n="'+n+'">▶ נגן כאן · '+duration+'</button> <a class="btn ghost" href="https://www.youtube.com/watch?v='+id+'" target="_blank" rel="noopener noreferrer">הסרטון המקורי ↗</a>':
      '<a class="btn gold" href="'+publisher+'" target="_blank" rel="noopener noreferrer">▶ סרטון למשנה '+letters[n]+' · '+duration+' ↗</a>';
    const previous=n===1?"#beitzah-4-7":"#beitzah-5-"+(n-1);
    const next=n===7?"https://www.sefaria.org/Mishnah_Rosh_Hashanah.1.1?lang=he":"#beitzah-5-"+(n+1);
    html+='<article class="eruvin-card" id="beitzah-5-'+n+'"><span class="eyebrow">ביצה ה׳, '+letters[n]+'</span><h4>'+e(title)+'</h4><p>'+e(explanation)+'</p>'+
      '<p class="eruvin-bridge"><strong>מה ראינו קודם — כיצד זה מוביל לסרטון הבא?</strong> '+e(bridge)+' <strong>השאלה הבאה:</strong> '+e(question)+'</p>'+
      '<p class="eruvin-credit">הסבר עכשווי · סרטון The Mishnah Project לפי קטלוג המפרסם · לא נבדק בצפייה</p>'+
      '<div class="eruvin-actions">'+video+' <button type="button" class="btn ghost" data-beitzah5-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
      (id?'<div class="eruvin-video" data-beitzah5-host="'+n+'" hidden></div>':'')+
      '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Beitzah.5.'+n+'?lang=he" target="_blank" rel="noopener noreferrer">משנה בספריא ↗</a> <a href="'+text+'" target="_blank" rel="noopener noreferrer">ויקיטקסט ↗</a> <a href="'+previous+'">הקודם</a> <a href="'+next+'"'+(n===7?' target="_blank" rel="noopener noreferrer"':'')+'>הבא</a></div></article>';
  }
  section.innerHTML=html+'</div><p class="smallprint">סיום מסכת ביצה. ההמשך הטקסטואלי בסדר מועד הוא ראש השנה א׳, א׳; הוא אינו המשך כרונולוגי של הדמויות בסרטונים.</p>';
  parent.after(section);
  const key="mishnah_cinema_beitzah_ch5_v1";let state={};
  try{const v=JSON.parse(localStorage.getItem(key)||"{}");if(v&&typeof v==="object"&&!Array.isArray(v))state=v;}catch(_){}
  const marks=Array.from(section.querySelectorAll("[data-beitzah5-mark]"));
  const resume=section.querySelector("#beitzah5Continue");
  const counter=section.querySelector("#beitzah5Progress");
  function redraw(){
    let done=0;
    for(const b of marks){const yes=!!state[b.dataset.beitzah5Mark];if(yes)done++;b.setAttribute("aria-pressed",String(yes));b.textContent=yes?"✓ למדתי — בטל":"סמן שלמדתי";}
    counter.textContent=done+" / 7";resume.disabled=done===7;
  }
  section.addEventListener("click",event=>{
    const b=event.target.closest("button");
    if(!b||!section.contains(b))return;
    if(b.dataset.beitzah5Mark){
      const n=b.dataset.beitzah5Mark;state[n]=!state[n];
      try{localStorage.setItem(key,JSON.stringify(state));}catch(_){}redraw();return;
    }
    const id=b.dataset.beitzah5Play,n=b.dataset.n;
    if(!id||ids[n]!==id||!/^[A-Za-z0-9_-]{11}$/.test(id))return;
    const host=section.querySelector('[data-beitzah5-host="'+n+'"]');if(!host)return;
    for(const h of section.querySelectorAll("[data-beitzah5-host]")){h.replaceChildren();h.hidden=true;}
    const frame=document.createElement("iframe");
    frame.src="https://www.youtube-nocookie.com/embed/"+id+"?rel=0";
    frame.loading="lazy";frame.referrerPolicy="strict-origin-when-cross-origin";
    frame.title="ביצה פרק ה משנה ג · The Mishnah Project";
    frame.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen=true;host.appendChild(frame);host.hidden=false;b.textContent="↻ טען שוב";
  });
  resume.addEventListener("click",()=>{const first=units.find(x=>!state[x[0]]);if(first)document.getElementById("beitzah-5-"+first[0])?.scrollIntoView({behavior:"smooth",block:"center"});});
  redraw();
  let hash="";try{hash=decodeURIComponent(location.hash.slice(1));}catch(_){}
  if(/^beitzah(?:Chapter5|-5-[1-7])$/.test(hash)){
    const dest=hash==="beitzahChapter5"?section:document.getElementById(hash);
    if(dest)requestAnimationFrame(()=>dest.scrollIntoView({behavior:"auto",block:"start"}));
  }
})();

/* Load the following textual tractate after Beitzah 5 has mounted;
   preserve existing navigation and historical chronology. */
(function(){
  if(!document.getElementById("beitzahChapter5") ||
     document.getElementById("roshHashanahChapter1") ||
     document.querySelector('script[data-rh1-loader]'))return;
  const script=document.createElement("script");
  const current=document.currentScript && document.currentScript.src;
  script.src=current?new URL("rosh-hashanah-ch1.js",current).href:"/rosh-hashanah-ch1.js";
  script.dataset.rh1Loader="1";
  script.async=true;
  document.head.appendChild(script);
})();
