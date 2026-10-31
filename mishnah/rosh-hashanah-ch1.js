"use strict";
/* Rosh Hashanah I: nine text-ordered Mishnah video lessons.
   Source audit 2026-10-31: Mechon Mamre + Hebrew Wikisource + Sefaria,
   9 publisher pages at mishnah.co verified including distinct iframe IDs.
   No actual playback, subtitles, runtime or teaching-style review completed.
   This is TEXTUAL order, never a chronology of historical events. */
(function () {
  const parent = document.getElementById("beitzahChapter5");
  if (!parent || document.getElementById("roshHashanahChapter1")) return;
  const units = [
    [1,"למה לשנה אחת יש ארבע התחלות?","המשנה קובעת נקודות פתיחה שונות למלכים ולרגלים, למעשר בהמה, לשמיטה וליובל, ולשנת האילן. בית שמאי ובית הלל חולקים על ראש השנה לאילן, ורבי אלעזר ורבי שמעון חולקים בעניין מעשר בהמה.","ביצה ה׳, ז׳ חתמה בדיני הבהמות ביום טוב. במסכת החדשה מתחילים במועדי השנה ובהקשר של מעשר בהמה; זו סמיכות בלימוד, לא התרחשות היסטורית עוקבת.","אם יש ארבעה ראשי שנים לצרכים שונים, מתי נידון העולם?","SJXND1aQv-c"],
    [2,"ארבעה פרקים שבהם העולם נידון","המשנה מתארת דין על התבואה בפסח, על פירות האילן בעצרת, על בני האדם בראש השנה ועל המים בחג הסוכות. זו אמירה דתית במשנה ולא תיאור של תהליך מנהלי מתועד.","א׳ הציגה ארבעה מועדים לקביעת שנים ולמצוות שונות; ב׳ מציגה ארבעה מועדי דין. הדמיון במספר אינו אומר שמדובר באותם ארבעה תאריכים.","כיצד ידעו הקהילות המרוחקות מתי חל חודש חדש ומועדיו?","SqZCkdW9tqU"],
    [3,"השליחים שמודיעים על החודש","בחודשים מסוימים נשלחו שלוחים כדי להודיע על קידוש החודש לצורך מועדים וצומות; המשנה מונה שישה חודשים, ומזכירה חודש נוסף בזמן שבית המקדש היה קיים.","ב׳ עסקה במשמעותם של מועדי השנה; ג׳ עוברת מן המשמעות לשאלה מעשית: איך מודיעים על תאריכיהם למי שנמצא רחוק?","האם יש חודשים שבהם חשיבות העדות גוברת אפילו על שמירת שבת?","pyWEm40s5QQ"],
    [4,"עדות החודש אפילו בשבת","לניסן ולתשרי קובעת המשנה היתר למחללי שבת לצורך עדות החודש, משום שהמועדים נקבעים באמצעות קידוש החודש. בזמן המקדש מוזכרת הרחבה לצורכי קרבנות.","ג׳ עסקה בשליחים שמעבירים את ההודעה לאחר קביעת החודש; ד׳ מתמקדת בעדים שמאפשרים לבית הדין לקבוע אותו מלכתחילה.","אם הלבנה נראית היטב, האם עדיין נחוצים עדים שיבואו בשבת?","-nGaqo3JuxY"],
    [5,"ירח גלוי לעין — האם העדות דחופה?","תנא קמא מתיר לצאת להעיד על ראיית החודש בשבת בין שהלבנה נראית בבירור ובין שלא. רבי יוסי חולק במקרה שבו היא נראית בבירור.","ד׳ קבעה עיקרון של עדות חשובה גם בשבת; ה׳ בוחנת מקרה גבולי ומחלוקת בין תנאים על מידת הצורך.","אם מגיעים עדים רבים מאוד, אולי כדאי לעצור חלק מהם?","AKKMDcQkQ6M"],
    [6,"ארבעים זוגות עדים ורבי עקיבא בלוד","המשנה מספרת על יותר מארבעים זוגות עדים שעיכב רבי עקיבא בלוד. רבן גמליאל מזהיר שעיכובם עלול להרתיע אותם מלהגיע בעתיד. זה סיפור המובא במשנה, לא סרט תיעודי של המאורע.","ה׳ שאלה מתי יש צורך בעדים למרות ראייה ברורה; ו׳ מחדדת את ההיבט האנושי: מה יקרה אם נגרום לאנשים להפסיק להגיע להעיד?","האם אב ובנו יכולים להעיד יחד על הלבנה החדשה?","KIgVe1OVOm8"],
    [7,"אב ובנו, וטוביה הרופא","המשנה מתארת אב ובן שראו את החודש, ומחלוקת בדבר עדות קרובים. מובא גם מעשה בטוביה הרופא, בנו ועבדו המשוחרר, עם הכרעות שונות של כוהנים ובית דין לגבי העדים.","ו׳ עסקה בעידוד הבאים להעיד; ז׳ בוחנת מי יכול להצטרף לעדות ומה עושים כשיש קרבה משפחתית. אין להעמיד דמויות ממקרים שונים במפגש אחד.","מי נפסל לעדות גם בלי קשר לקרבה משפחתית?","762BcE1kg2o"],
    [8,"מי פסול לעדות החודש?","המשנה מונה קבוצות של פסולי עדות בדיני תקופתה, ובהן משחק בקובייה ומלווה בריבית, וקובעת כלל ביחס לסוגי עדויות. זהו הצגת נוסח המשנה, לא חוות דעת על זכויות משפטיות בימינו.","ז׳ עסקה בקשרי משפחה ובקבלת עדות; ח׳ עוברת לפסולים אחרים. זו המשכיות של הנושא המשפטי, לא תוצאה סיבתית של סיפור טוביה.","מה עושים כשעד ראייה מתאים אינו מסוגל ללכת עד לבית הדין?","kSrriUfZ49k"],
    [9,"לעזור לעד להגיע — גם בדרך קשה","עד שראה את החודש אך אינו יכול להלך רשאי להיעזר בחמור או אפילו במיטה; המשנה עוסקת גם בהצטיידות בדרך ובסכנה. המטרה היא לאפשר עדות החודש בזמנה.","ח׳ הגדירה מי כשיר להעיד; ט׳ מבררת כיצד מסייעים לעד כשר להגיע. מכאן נעבור לפרק ב׳, הבודק את אמינות העדים והודעת קידוש החודש.","איך בית הדין מוודא שהעדים מהימנים, וכיצד היו מודיעים שהחודש נקבע?","eDUjvHvTnew"]
  ];
  const letters=["","א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ז׳","ח׳","ט׳"];
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  if(new Set(units.map(u=>u[5])).size!==9 || units.some(u=>!/^[a-zA-Z0-9_-]{11}$/.test(u[5]))) return;
  const section=document.createElement("section");
  section.id="roshHashanahChapter1";
  section.setAttribute("aria-label","ראש השנה פרק א · תשע משניות ותשעה סרטונים לפי סדר המשנה");
  let html='<div class="study-divider">ראש השנה א׳ · תשע משניות ותשעה סרטוני לימוד<small>לוח השנה, עדי החודש, רבי עקיבא ורבן גמליאל · לפי סדר הטקסט, לא סדר היסטורי</small></div>'+
    '<p class="smallprint">נוסח ומספור: מכון ממרא, ויקיטקסט וספריא מונים תשע משניות בפרק זה. הסברי האתר הם עיבוד לימודי בן־זמננו ואינם ציטוט מדויק או פסק הלכה. סיפור תנאי, מחלוקת והקשר היסטורי מובחנים.</p>'+
    '<p class="smallprint">כל תשעת הסרטונים אותרו בנגני YouTube המשובצים באתר הרשמי של The Mishnah Project, וכל אחד ממוספר למשנה נפרדת. השפה אנגלית. נבדקו קישור, זיהוי והטמעה אצל המפרסם בלבד; צפייה ממשית, אורך, איכות וכתוביות לא אומתו. הנגן באתר נטען רק בלחיצה.</p>'+
    '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Rosh_Hashanah.1?lang=he" target="_blank" rel="noopener noreferrer">ספריא ↗</a> <a href="https://mechon-mamre.org/b/h/h28.htm" target="_blank" rel="noopener noreferrer">מכון ממרא ↗</a> <a href="https://he.wikisource.org/wiki/משנה_ראש_השנה_א" target="_blank" rel="noopener noreferrer">ויקיטקסט ↗</a></div>'+
    '<div class="actions" style="margin:12px 0"><button id="rh1Continue" type="button" class="btn gold">▶ המשך ללמוד</button> <span class="progressnote" id="rh1Progress" aria-live="polite"></span></div><div class="eruvin-cards">';
  for(const [n,title,explanation,bridge,question,youtubeId] of units){
    const publisher="https://mishnah.co/moed/rosh-hashanah/chapter-1/mishnah-"+n;
    const previous=n===1?"#beitzah-5-7":"#rosh-hashanah-1-"+(n-1);
    const next=n===9?"https://www.sefaria.org/Mishnah_Rosh_Hashanah.2.1?lang=he":"#rosh-hashanah-1-"+(n+1);
    html+='<article class="eruvin-card" id="rosh-hashanah-1-'+n+'"><span class="eyebrow">ראש השנה א׳, '+letters[n]+'</span><h4>'+esc(title)+'</h4><p>'+esc(explanation)+'</p>'+
      '<p class="eruvin-bridge"><strong>מה ראינו קודם — מדוע זה מוביל לזה?</strong> '+esc(bridge)+' <strong>השאלה הבאה:</strong> '+esc(question)+'</p>'+
      '<p class="eruvin-credit">וידאו לימוד באנגלית · The Mishnah Project · עמוד ומזהה נגן אומתו, צפייה וכתוביות לא אומתו</p>'+
      '<div class="eruvin-actions"><button type="button" class="btn gold" data-rh1-play="'+youtubeId+'" data-rh1-n="'+n+'">▶ צפה כאן בסרטון</button> <a class="btn ghost" href="'+publisher+'" target="_blank" rel="noopener noreferrer">סרטון המקור ↗</a> <button type="button" class="btn ghost" data-rh1-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
      '<div class="eruvin-video" data-rh1-host="'+n+'" hidden></div>'+
      '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Rosh_Hashanah.1.'+n+'?lang=he" target="_blank" rel="noopener noreferrer">המשנה בספריא ↗</a> <a href="https://he.wikisource.org/wiki/משנה_ראש_השנה_א" target="_blank" rel="noopener noreferrer">ויקיטקסט ↗</a> <a href="'+previous+'">הקודם</a> <a href="'+next+'"'+(n===9?' target="_blank" rel="noopener noreferrer"':'')+'>הבא</a></div></article>';
  }
  section.innerHTML=html+'</div><p class="smallprint">סוף פרק א׳. ממשיכים לראש השנה ב׳, א׳ — בדיקת העדים — במסלול הטקסטואלי; מסלול ההיסטוריה נשאר עצמאי.</p>';
  parent.after(section);
  const key="mishnah_cinema_rosh_hashanah_ch1_v1";let progress={};
  try{const saved=JSON.parse(localStorage.getItem(key)||"{}");if(saved&&typeof saved==="object"&&!Array.isArray(saved)) progress=saved;}catch(_){}
  const markButtons=Array.from(section.querySelectorAll("[data-rh1-mark]"));
  const counter=section.querySelector("#rh1Progress"),resume=section.querySelector("#rh1Continue");
  function redraw(){let done=0;for(const b of markButtons){const yes=!!progress[b.dataset.rh1Mark];if(yes)done++;b.setAttribute("aria-pressed",String(yes));b.textContent=yes?"✓ למדתי — בטל":"סמן שלמדתי";}counter.textContent=done+" / 9";resume.disabled=done===9;}
  section.addEventListener("click",event=>{
    const b=event.target.closest("button");if(!b||!section.contains(b))return;
    if(b.dataset.rh1Mark){const n=b.dataset.rh1Mark;progress[n]=!progress[n];try{localStorage.setItem(key,JSON.stringify(progress));}catch(_){}redraw();return;}
    const id=b.dataset.rh1Play,n=Number(b.dataset.rh1N);if(!id||units[n-1]?.[5]!==id)return;
    const host=section.querySelector('[data-rh1-host="'+n+'"]');if(!host)return;
    for(const h of section.querySelectorAll("[data-rh1-host]")){h.replaceChildren();h.hidden=true;}
    const frame=document.createElement("iframe");frame.src="https://www.youtube-nocookie.com/embed/"+id+"?rel=0&playsinline=1";
    frame.loading="lazy";frame.referrerPolicy="strict-origin-when-cross-origin";
    frame.title="ראש השנה א׳, "+letters[n]+" · The Mishnah Project";
    frame.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen=true;host.appendChild(frame);host.hidden=false;b.textContent="↻ טען מחדש";
  });
  resume.addEventListener("click",()=>{const next=units.find(x=>!progress[x[0]]);if(next)document.getElementById("rosh-hashanah-1-"+next[0])?.scrollIntoView({behavior:"smooth",block:"center"});});
  redraw();let hash="";try{hash=decodeURIComponent(location.hash.slice(1));}catch(_){}
  if(hash==="roshHashanahChapter1"||/^rosh-hashanah-1-[1-9]$/.test(hash)){
    const dest=hash==="roshHashanahChapter1"?section:document.getElementById(hash);
    if(dest)requestAnimationFrame(()=>dest.scrollIntoView({behavior:"auto",block:"start"}));
  }
})();
