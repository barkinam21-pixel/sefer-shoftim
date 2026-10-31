"use strict";
/* ראש השנה ב׳: סדר המשניות, לא כרונולוגיה היסטורית. מקור ומספור: ספריא/ויקיטקסט (9).
   מכון ממרא מפצל את משנה ה׳ ולכן מונה 10 סעיפים. וידאו — מטא-נתונים בלבד. */
(function(){
  const parent=document.getElementById("roshHashanahChapter1");
  if(!parent||document.getElementById("roshHashanahChapter2"))return;
  const units=[[1,"מי ערב למהימנותו של עד החודש?","כאשר הדיינים אינם מכירים את העד, נשלח עמו מי שמעיד על מהימנותו. המשנה מתארת מעבר מקבלת כל עד לתקנה מחמירה בעקבות ניסיונות הטעיה. אין להסיק מכך על קבוצות בימינו.","בפרק א׳, ט׳ סייעו לעד להגיע לבית הדין גם בדרך קשה. כאן מתברר שהגעה אינה מספיקה: צריך להכיר את העד.","לאחר קידוש החודש, כיצד מודיעים את התאריך לקהילות הרחוקות?"],[2,"להבות או שליחים — איך מודיעים על החודש?","בתחילה נהגו להודיע על קידוש החודש באמצעות משואות אש; בעקבות הטעיה המתוארת במשנה הוחלפה השיטה בשליחים. המשנה עוסקת במהימנות המידע, לא במפה של מסע היסטורי אחד.","א׳ עסקה באימות הנכנסים להעיד בבית הדין; ב׳ עוברת לאמינות המידע היוצא מבית הדין.","איך נראו המשואות ואיך העבירו אותן מהר להר?"],[3,"איך מפעילים שרשרת משואות על הרים?","המשנה מתארת כלונסאות ארז, קנים, עצי שמן ונעורת פשתן שנקשרו יחד. המשיא מניף את האש מצד לצד ולמעלה ולמטה, עד שהוא מזהה אות חוזר מן ההר הבא.","ב׳ דנה בהחלטה להשתמש באותות אש; ג׳ מגלה את ההליך המדויק והסימן המוסכם בין התחנות.","על אילו הרים עבר האור מירושלים לגולה?"],[4,"מהר המשחה לבית בלתין — מסלול האיתות","המשנה מונה את הר המשחה, סרטבא, גרופינא, חוורן ובית בלתין, ומסיימת בתיאור הגולה הנראית כמדורת אש. מיקומן המדויק של כל התחנות אינו מוסכם, ואין להציג שחזור כמפה ודאית.","ג׳ הראתה איך תחנה אחת משיבה לחברתה; ד׳ מתמקדת בשאלה איפה פעלו התחנות זו ביחס לזו.","כיצד נהגו בעדים שהתכנסו בירושלים?"],[5,"בית יעזק — מכבדים את עדי החודש","המשנה מתארת חצר בירושלים שבה בדקו את העדים וסעודות שנערכו כדי לעודד אותם להגיע. היא כוללת את תקנת רבן גמליאל הזקן בדבר אלפיים אמה, ואת הדין לגבי באים להציל ולסייע. מכון ממרא מפצל את משנה ה׳ לשני סעיפים.","ד׳ הראתה איך החדשות מגיעות ליישובים; ה׳ חוזרת אל האנשים שאפשרו את ההודעה ואל היחס כלפיהם.","מה שואלים את העדים כדי לבדוק שהתיאור שלהם מדויק?"],[6,"איך בודקים עדות על הירח החדש?","בית הדין שואל בנפרד את העדים על מיקום הלבנה ביחס לשמש, גובהה, נטייתה ורוחבה, ומשווה תשובות. גם זוגות שכבר אינם נחוצים נשאלים בקצרה כדי שלא ייצאו בפחי נפש.","ה׳ עוסקת בדאגה לאנשים שהגיעו להעיד; ו׳ מראה כיצד בודקים את דבריהם בלי לבזות אותם.","מה הופך עדות שנמצאה מכוונת לחודש מקודש?"],[7,"'מקודש, מקודש' — רגע הכרזת החודש","ראש בית הדין מכריז 'מקודש' והעם משיב 'מקודש, מקודש'. רבי אלעזר ברבי צדוק חולק במקרה שבו הלבנה לא נראתה בזמנה.","ו׳ עסקה בבדיקת העדות; ז׳ מציגה את ההכרזה הציבורית הבאה אחריה ואת המחלוקת על מקרה חריג.","מה קורה כשחכמים חלוקים על עצם קבלת העדים?"],[8,"דגמי הלבנה והמחלוקת ביבנה","לפי המשנה, לרבן גמליאל היו דגמי לבנה שבעזרתם שאל עדים מה ראו. אחר כך מסופר על עדים שקיבל ועל התנגדות חכמים, ובהם רבי יוחנן בן נורי, רבי דוסא בן הרכינס ורבי יהושע. אין לשחזר את כולם באותו מפגש ללא מקור.","ז׳ תיארה את סמכות בית הדין לקדש חודש; ח׳ מעלה את הקושי: מה אם חכם אחר פוסל עדות שהנשיא קיבל?","מה יעשה רבי יהושע כשיום הכיפורים לפי חשבונו שונה מן היום שקבע רבן גמליאל?"],[9,"רבן גמליאל, רבי יהושע ויום הכיפורים שבמחלוקת","רבן גמליאל מצווה על רבי יהושע לבוא אליו במקל ובמעות ביום שחל יום הכיפורים לפי חשבונו של רבי יהושע. רבי עקיבא ורבי דוסא מסבירים את סמכות בית הדין, ורבי יהושע בא ליבנה. בוויקיטקסט הסיפור מסתיים בפיוס ובנשיקה; נוסח מכון ממרא המוצג באתר אינו מביא את השורות הללו.","ח׳ תיארה את העדות שהתקבלה למרות מחלוקת; ט׳ מראה את המחיר האישי של ההכרעה ואת הצורך בלוח שנה משותף. זו מסורת במשנה, לא צילום של האירוע.","בראש השנה ג׳, א׳ נשאל מה דינו של חודש כשהעדים באו אך ההכרזה התעכבה עד החשיכה."]];
  const letters=["","א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ז׳","ח׳","ט׳"];
  // Validated by public channel title/video metadata, NOT by watching.
  const videos={2:"_fA3Kih3ZWs",8:"_MatpzMYBA8"};
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const section=document.createElement("section");section.id="roshHashanahChapter2";
  section.setAttribute("aria-label","ראש השנה פרק ב׳: תשע משניות לפי סדר המקור");
  let html='<div class="study-divider">ראש השנה ב׳ · תשע משניות<small>עדי החודש, משואות, סמכות בית הדין והמחלוקת ביבנה — לימוד טקסטואלי נפרד מציר ההיסטוריה</small></div>'+
  '<p class="smallprint">המספור כאן לפי ספריא וויקיטקסט: תשע משניות. מכון ממרא מפצל את משנה ה׳ לשתי יחידות, ולכן מונה עשרה סעיפים. סיום משנה ט׳ בפיוס רבן גמליאל ורבי יהושע נמצא בוויקיטקסט ובמהדורות נוספות, ואינו מופיע בנוסח מכון ממרא המקוון. אין להעלים הבדלי נוסח.</p>'+
  '<p class="smallprint">הסברים ומעברים הם ניסוח לימודי עכשווי; אינם טקסט המשנה. שני סרטונים באנגלית זוהו לפי כותרת ומזהה בערוץ The Mishnah Project, עם נגן נטען בלחיצה. צפייה בפועל, כתוביות, משך ואיכות סגנון ההוראה לא אומתו. שבע יחידות נוספות כוללות את הטקסט וההסבר ללא סרטון שלא אומת.</p>'+
  '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Rosh_Hashanah.2?lang=he" target="_blank" rel="noopener noreferrer">ספריא ↗</a> <a href="https://he.wikisource.org/wiki/משנה_ראש_השנה_ב" target="_blank" rel="noopener noreferrer">ויקיטקסט ↗</a> <a href="https://mechon-mamre.org/b/h/h28.htm" target="_blank" rel="noopener noreferrer">מכון ממרא ↗</a></div>'+
  '<div class="actions" style="margin:12px 0"><button id="rh2Continue" type="button" class="btn gold">▶ המשך ללמוד</button> <span class="progressnote" id="rh2Progress" aria-live="polite"></span></div><div class="eruvin-cards">';
  for(const [n,title,explanation,bridge,question] of units){
    const id=videos[n];
    const prev=n===1?"#rosh-hashanah-1-9":"#rosh-hashanah-2-"+(n-1);
    const next=n===9?"https://www.sefaria.org/Mishnah_Rosh_Hashanah.3.1?lang=he":"#rosh-hashanah-2-"+(n+1);
    const video=id?'<button type="button" class="btn gold" data-rh2-play="'+id+'" data-rh2-n="'+n+'">▶ סרטון בתוך האתר</button> <a class="btn ghost" href="https://www.youtube.com/watch?v='+id+'" target="_blank" rel="noopener noreferrer">מקור הווידאו ↗</a>':'<span class="smallprint">סרטון פרטני לא אומת עדיין; לימוד המשנה והמקור זמינים כאן.</span>';
    html+='<article class="eruvin-card" id="rosh-hashanah-2-'+n+'"><span class="eyebrow">ראש השנה ב׳, '+letters[n]+'</span><h4>'+esc(title)+'</h4><p>'+esc(explanation)+'</p>'+
      '<p class="eruvin-bridge"><strong>מה ראינו קודם — ולמה זה מוביל לכאן?</strong> '+esc(bridge)+' <strong>השאלה הבאה:</strong> '+esc(question)+'</p>'+
      '<div class="eruvin-actions">'+video+' <button type="button" class="btn ghost" data-rh2-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
      (id?'<div class="eruvin-video" data-rh2-host="'+n+'" hidden></div>':'')+
      '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Rosh_Hashanah.2.'+n+'?lang=he" target="_blank" rel="noopener noreferrer">המשנה בספריא ↗</a> <a href="'+prev+'">הקודם</a> <a href="'+next+'"'+(n===9?' target="_blank" rel="noopener noreferrer"':'')+'>הבא</a></div></article>';
  }
  section.innerHTML=html+'</div><p class="smallprint">סיום פרק ב׳. ההמשך לפי סדר המשנה: ראש השנה ג׳, א׳, לא מעבר כרונולוגי במסלול תולדות התנאים.</p>';
  parent.after(section);
  const key="mishnah_cinema_rosh_hashanah_ch2_v1";let progress={};
  try{const v=JSON.parse(localStorage.getItem(key)||"{}");if(v&&typeof v==="object"&&!Array.isArray(v))progress=v;}catch(_){}
  const marks=[...section.querySelectorAll("[data-rh2-mark]")],counter=section.querySelector("#rh2Progress"),resume=section.querySelector("#rh2Continue");
  function redraw(){let count=0;for(const b of marks){const yes=!!progress[b.dataset.rh2Mark];if(yes)count++;b.setAttribute("aria-pressed",String(yes));b.textContent=yes?"✓ למדתי — בטל":"סמן שלמדתי";}counter.textContent=count+" / 9";resume.disabled=count===9;}
  section.addEventListener("click",event=>{
    const b=event.target.closest("button");if(!b||!section.contains(b))return;
    if(b.dataset.rh2Mark){const n=b.dataset.rh2Mark;progress[n]=!progress[n];try{localStorage.setItem(key,JSON.stringify(progress));}catch(_){}redraw();return;}
    const n=Number(b.dataset.rh2N),id=b.dataset.rh2Play;
    if(!id||videos[n]!==id||!/^[A-Za-z0-9_-]{11}$/.test(id))return;
    const host=section.querySelector('[data-rh2-host="'+n+'"]');if(!host)return;
    for(const h of section.querySelectorAll("[data-rh2-host]")){h.replaceChildren();h.hidden=true;}
    const frame=document.createElement("iframe");frame.src="https://www.youtube-nocookie.com/embed/"+id+"?rel=0&playsinline=1";
    frame.loading="lazy";frame.referrerPolicy="strict-origin-when-cross-origin";frame.title="ראש השנה ב׳, "+letters[n]+" — The Mishnah Project";
    frame.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen=true;host.appendChild(frame);host.hidden=false;b.textContent="↻ טען מחדש";
  });
  resume.addEventListener("click",()=>{const next=units.find(u=>!progress[u[0]]);if(next)document.getElementById("rosh-hashanah-2-"+next[0])?.scrollIntoView({behavior:"smooth",block:"center"});});
  redraw();let hash="";try{hash=decodeURIComponent(location.hash.slice(1));}catch(_){}
  if(hash==="roshHashanahChapter2"||/^rosh-hashanah-2-[1-9]$/.test(hash)){
    const dest=hash==="roshHashanahChapter2"?section:document.getElementById(hash);
    if(dest)requestAnimationFrame(()=>dest.scrollIntoView({behavior:"auto",block:"start"}));
  }
})();