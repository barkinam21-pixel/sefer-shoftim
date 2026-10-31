"use strict";
/* Mishnah Ta'anit chapter 3: nine study units in Sefaria/Wikisource segmentation.
   Mechon Mamre groups them under five sections: g,a=[1-4]; g,b=[5-6];
   g,c=[7]; g,d=[8]; g,e=[9]. See research/2026-10-31-taanit-3-audit.md.
   Source-linked original explanations, not transcriptions or video reviews.
   Separate Mishnah learning order from the cinematic historical timeline. */
(function(){
  const parent=document.getElementById("taanitChapter2");
  if(!parent||document.getElementById("taanitChapter3"))return;
  const units=[
    [1,"מתי לא מחכים עוד?", "הסדר המדורג של תעניות שבפרקים הקודמים מתאים להתעכבות הגשמים הראשונים. אבל כאשר הצמחים כבר נפגעו, או כשעברו ארבעים יום בין גשם לגשם, המשנה קובעת שמתריעים מיד. הבצורת אינה נמדדת רק בשאלה אם ירד גשם, אלא גם בנזק החקלאי שנוצר.", "בפרק ב׳ למדנו איך מתכנסים ומתפללים בתענית. כאן נפתחת שאלה אחרת: באילו מצבים אין להמתין לשלבי התענית הרגילים?", "האם גשם שמגיע מספיק לכל הצרכים — שדות, עצים ומאגרי מים?", "לשון המשנה: 'צמחים ששינו' ו'מכת בצורת'. סיבת השינוי החקלאי המדויקת אינה מאובחנת בטקסט; אין לשחזר מזג אוויר מסוים כעובדה."],
    [2,"גשם אחד, שלושה צרכים", "המשנה מפרידה בין גשם המועיל לצמחים, גשם הנדרש לאילנות, ומים למילוי בורות, שיחין ומערות. גם אם חלק מהצרכים נענו, המחסור האחר מצדיק התרעה מיידית. דיון במשק מים קדום הוא הקשר לימודי אפשרי, לא תיעוד של מקרה יחיד.", "א׳ לימדה שהנזק עצמו עלול לחייב תגובה מיד; ב׳ מראה שהמילה 'גשם' אינה אומרת שכל צרכי האדם והקרקע נענו.", "מה קורה כשעיר אחת נותרת יבשה בעוד סביבתה דווקא זוכה לגשם?", "מכון ממרא כולל את היחידה בתוך ג,א ומסמן אותה [ב]; ספריא וויקיטקסט מונים אותה כמשנה ב׳."],
    [3,"עיר אחת יבשה — מי משתתף בצרתה?", "כאשר לעיר מסוימת לא ירדו גשמים ולסביבותיה כן, המשנה מבחינה בין תגובת העיר לבין תגובת הסביבה. העיר מתענה ומתריעה; סביבתה מתענה ולא מתריעה, ולדעת רבי עקיבא הסביבה מתריעה ולא מתענה. הפסוק מעמוס ד׳, ז׳ משמש מקור מקראי במסגרת המשנה.", "ב׳ התבוננה בהבדלי הצורך בתוך אותה ארץ; ג׳ מבדילה בין קהילה שנפגעה בפועל לבין שכנותיה הנקראות להגיב.", "האם אותה הבחנה חלה גם כשמכה קשה פוגעת בעיר, ולא רק כשהגשם חסר?", "מכון ממרא מסמן יחידה זו [ג] תחת ג,א. אין להעמיד את רבי עקיבא בדיון חי עם דמות אחרת ללא מקור למפגש."],
    [4,"דבר או מפולת — אחריות המקומית וסולידריות אזורית", "המשנה מחילה את מודל העיר והסביבה גם על דבר או מפולת. היא מגדירה סף מסוים למכת דבר באמצעות מספר מתים לאורך ימים בעיר שיש בה מספר נתון של אנשי רגלי. זה מדד מקורי של המשנה, ואינו קריטריון רפואי או אפידמיולוגי תקף להיום.", "ג׳ הבחינה בין העיר הנפגעת לסביבה כשחסר בה גשם; ד׳ בוחנת את אותה אחריות כשמתרחשת סכנת חיים אחרת.", "מתי פורענות מקומית נתפסת כאיום שעליו מתריעים בכל מקום?", "יש שינויי נוסח בפרטי ההגדרה וסיומה בין המקורות. המספור במכון ממרא [ד] בתוך ג,א; אין להמחיש נפגעים או לחשב שיעורי תחלואה מודרניים מתוך הדין."],
    [5,"מכה מהלכת — הסכנה אינה עוצרת בגבול העיר", "שידפון, ירקון, ארבה, חסיל, חיה רעה וחרב נמנים במשנה עם מקרים שמתריעים עליהם בכל מקום, מפני שמדובר ב'מכה מהלכת'. הרעיון המרכזי הוא סכנה שאינה בהכרח מוגבלת למקום הראשון שבו הופיעה.", "ד׳ התייחסה לצרה באזור מסוים; ה׳ מרחיבה את התגובה כאשר הסכנה עלולה להתפשט אל מקומות נוספים.", "האם די בסימן קטן של נזק כדי לעורר תענית נרחבת?", "מכון ממרא מונה זאת כג,ב [ה]. הרשימה היא לשון המשנה, לא ניתוח מדעי של התפשטות מחלות ומזיקים."],
    [6,"שידפון באשקלון ועדות על זאבים", "המשנה מספרת על זקנים שירדו מירושלים לעריהם וגזרו תענית בעקבות שידפון שנראה באשקלון. בהמשך מופיע מעשה בזאבים בעבר הירדן; רבי יוסי חולק על פרט העילה: לא האכילה אלא עצם ההיראות. שני הסיפורים מופיעים במסורת המשנה, אך אין לראות בהמחזה של פרטיהם תיעוד היסטורי עצמאי.", "ה׳ אמרה שסכנה מתפשטת מחייבת התייחסות רחבה; ו׳ מציגה מעשים ומחלוקת על מה שדי בו כדי להתריע.", "מה עושים כאשר סכנה מיידית מתרחשת דווקא בשבת?", "גרסאות המקורות נבדלות בפרטי הסיפור על הזאבים. אין להראות פגיעה בילדים, לייחס דיווח לבעלי שם או להמציא תאריך לאירועים."],
    [7,"כשספינה מיטרפת בשבת", "המשנה מציינת סכנת עיר שהקיפוה אויבים או נהר וספינה המיטרפת בים, ומבחינה בין התרעה להצלת חיים לבין תפילת זעקה. רבי יוסי אומר 'לעזרה ולא לצעקה'; שמעון התימני מציע להוסיף דבר, וחכמים אינם מודים לו. יש להסביר את המונחים לפי פרשנות מזוהה לפני הפיכתם להוראות מעשיות.", "ו׳ דנה בתגובה ציבורית לסכנה מתפשטת; ז׳ שואלת כיצד מגיבים כשאי אפשר להמתין אפילו עד צאת השבת.", "ומה עושים כשהצרה אינה חוסר בגשם, אלא דווקא גשם רב מדי?", "זהו נוסח משנאי הדורש עיון הלכתי; במצב סכנת חיים אמיתי פונים לעזרה מיידית. מכון ממרא ג,ג [ז]."],
    [8,"חוני המעגל — הגשם כבקשה מורכבת", "המשנה פותחת בכלל על צרות הציבור ומחריגה רוב גשמים, ולאחר מכן מספרת על חוני המעגל: בקשה לגשם, גשם מועט, גשם סוער ולבסוף גשמי ברכה. שמעון בן שטח שולח לו תגובה חריפה ומורכבת. הסיפור מלמד גם על גבולות הבקשה ועל היחס שבין דמות יוצאת דופן לסמכות החכמים. זוהי מסורת ספרותית במשנה; אין לטעון שכל פרט בה מאומת היסטורית.", "ז׳ עסקה בהתרעה בעת סכנה דחופה; ח׳ מציגה סיפור שבו מענה לבקשה יכול בעצמו להפוך לקושי חדש.", "אם כבר החל צום ואז בא הגשם — באיזו שעה מפסיקים?", "מכון ממרא ג,ד [ח]. טקסט המשנה אינו מקור לתלבושות, מראה פני חוני או צורת הרחוב. כל ציור עתידי יסומן כהמחזה."],
    [9,"הגשם הגיע באמצע הצום — מתי משתנה היום?", "המשנה קובעת הבדל בין גשם שבא לפני הנץ החמה לאחריו; רבי אליעזר מציב את הגבול בחצות. היא מסיימת במעשה בלוד: רבי טרפון אמר לאכול ולשתות ולעשות יום טוב, ובהמשך קראו הלל הגדול. המחלוקת והמעשה צריכים להישאר מובחנים, ואין להפוך סיפור יחיד לכלל רפואי להיום.", "ח׳ הציגה גשם שהגיע בעוצמות משתנות; ט׳ מתמודדת עם השאלה המעשית: מה משתנה כשתפילת הציבור נענתה כבר במהלך יום התענית?", "המשך בפרק ד׳: מהם המעמדות, וכיצד שותפים ישראל בעבודת המקדש?", "מכון ממרא ג,ה [ט]. דין התענית אינו הנחיה לצום או להפסיק צום בימינו; לבעלי מגבלה רפואית נדרשת הדרכה אישית."]
  ];
  const letters=["","א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ז׳","ח׳","ט׳"];
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const section=document.createElement("section");
  section.id="taanitChapter3";
  section.setAttribute("aria-label","מסכת תענית פרק ג׳ — תשע משניות");
  let html='<div class="study-divider">תענית ג׳ · תשע משניות<small>מצבי חירום, ערבות קהילתית וחוני המעגל · לימוד טקסטואלי ברצף</small></div>'+
    '<p class="smallprint"><strong>חשוב על המספור:</strong> כאן תשע משניות לפי ספריא וויקיטקסט. מכון ממרא מאגד אותן לחמישה סעיפים: א–ד תחת ג,א; ה–ו תחת ג,ב; ז ג,ג; ח ג,ד; ט ג,ה. אין לשייך סרטון או ציטוט לפי מספר סעיף בלי לבדוק את ההבדל.</p>'+
    '<p class="smallprint">הדברים הם ביאור לימודי מקורי לצד מקור המשנה, ולא פסיקת הלכה, ייעוץ רפואי או טענה לצפייה בסרטונים. המסלול ההיסטורי מסודר בנפרד.</p>'+
    '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Ta%27anit.3?lang=he" target="_blank" rel="noopener noreferrer">ספריא ↗</a> <a href="https://he.wikisource.org/wiki/משנה_תענית_ג" target="_blank" rel="noopener noreferrer">ויקיטקסט ↗</a> <a href="https://mechon-mamre.org/b/h/h29.htm" target="_blank" rel="noopener noreferrer">מכון ממרא ↗</a></div>'+
    '<div class="actions" style="margin:12px 0"><button type="button" class="btn gold" id="ta3Continue">▶ המשך ללמוד</button> <span class="progressnote" id="ta3Progress" aria-live="polite"></span></div><div class="eruvin-cards">';
  for(const [n,title,explanation,bridge,question,note] of units){
    const prev=n===1?"#taanit-2-10":"#taanit-3-"+(n-1);
    const next=n===9?"https://www.sefaria.org/Mishnah_Ta%27anit.4.1?lang=he":"#taanit-3-"+(n+1);
    const nextAttr=n===9?' target="_blank" rel="noopener noreferrer"':"";
    html+='<article class="eruvin-card" id="taanit-3-'+n+'"><span class="eyebrow">תענית ג׳, '+letters[n]+'</span><h4>'+esc(title)+'</h4><p>'+esc(explanation)+'</p>'+
      '<p class="eruvin-bridge"><strong>מה ראינו — ואיך זה מוביל לכאן?</strong> '+esc(bridge)+' <strong>השאלה הבאה:</strong> '+esc(question)+'</p>'+
      '<p class="smallprint">'+esc(note)+'</p><div class="eruvin-actions"><button type="button" class="btn ghost" data-ta3-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
      '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Ta%27anit.3.'+n+'?lang=he" target="_blank" rel="noopener noreferrer">קרא את המשנה עצמה ↗</a> <a href="'+prev+'">הקודם</a> <a href="'+next+'"'+nextAttr+'>הבא</a></div></article>';
  }
  section.innerHTML=html+'</div><p class="smallprint">המשך הלימוד: מסכת תענית, פרק ד׳ משנה א׳. אין להסיק מכך תאריך או סדר כרונולוגי היסטורי.</p>';
  parent.after(section);
  const key="mishnah_cinema_taanit_ch3_v1";
  let progress={};
  try{const x=JSON.parse(localStorage.getItem(key)||"{}");if(x&&typeof x==="object"&&!Array.isArray(x))progress=x;}catch(_){}
  const marks=[...section.querySelectorAll("[data-ta3-mark]")],counter=section.querySelector("#ta3Progress"),resume=section.querySelector("#ta3Continue");
  function draw(){let done=0;for(const b of marks){const yes=!!progress[b.dataset.ta3Mark];if(yes)done++;b.setAttribute("aria-pressed",String(yes));b.textContent=yes?"✓ למדתי — בטל":"סמן שלמדתי";}counter.textContent=done+" / 9";resume.disabled=done===9;}
  section.addEventListener("click",event=>{const b=event.target.closest("button[data-ta3-mark]");if(!b||!section.contains(b))return;const n=b.dataset.ta3Mark;progress[n]=!progress[n];try{localStorage.setItem(key,JSON.stringify(progress));}catch(_){}draw();});
  resume.addEventListener("click",()=>{const next=units.find(u=>!progress[u[0]]);if(next)document.getElementById("taanit-3-"+next[0])?.scrollIntoView({behavior:"smooth",block:"center"});});
  draw();
  let hash="";try{hash=decodeURIComponent(location.hash.slice(1));}catch(_){}
  if(hash==="taanitChapter3"||/^taanit-3-[1-9]$/.test(hash)){const dest=hash==="taanitChapter3"?section:document.getElementById(hash);if(dest)requestAnimationFrame(()=>dest.scrollIntoView({behavior:"auto",block:"start"}));}
})();
