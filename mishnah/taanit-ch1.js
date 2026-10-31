"use strict";
/* Taanit 1 — seven Mishnah units. Modern explanations are not the ancient text.
   Sources checked 2026-10-31: Sefaria, Hebrew Wikisource, Mechon Mamre.
   Variants recorded in research/2026-10-31-taanit-1-source-video-audit.md.
   Separate textual learning order from cinematic historical chronology. */
(function(){
  const parent=document.getElementById("roshHashanahChapter4");
  if(!parent||document.getElementById("taanitChapter1"))return;
  const units=[[1,"להזכיר גשם או לבקש שירד?","רבי אליעזר ורבי יהושע נחלקים מתי מתחילים להזכיר את כוח הגשם בתפילה: ביום הראשון של סוכות או בסיומו. רבי יהושע מקשה: גשם בזמן הישיבה בסוכה מפריע למצווה; רבי אליעזר משיב שהזכרת גשם אינה בקשה שיירד דווקא עכשיו. לכן המשנה כבר בתחילתה מפרידה בין אמירת שבח לבין בקשה מעשית.","סיימנו את ראש השנה בדיני קול השופר ותפילת הציבור. תענית פותחת בנושא אחר בתפילה — הגשם; זהו רצף לימודי בסדר המסכתות, לא מעבר בזמן ההיסטורי.","אם מזכירים את הגשם בלי לבקש אותו, כיצד נקבע הזמן שבו מתחילים ומפסיקים את האזכור?","הנוסח בספריא ובוויקיטקסט כולל 'סימן קללה' בחג; מכון ממרא מקצר ל'אין הגשמים סימן ברכה'. יש לתעד את ההבדל, לא להעמידו כשתי פסיקות."],[2,"מי אומר 'משיב הרוח' בתפילות החג?","המשנה קובעת שבקשת הגשמים מתחילה רק סמוך לעונת הגשמים. רבי יהודה מתאר את חילופי ההזכרה בין שליח הציבור הראשון לאחרון בשמיני עצרת וביום טוב הראשון של פסח. המשך הסעיף בוחן עד מתי ממשיכים לבקש גשם, ובאיזה פסוק מעגנים את המחלוקת.","משנה א׳ הבדילה בין אזכור לבקשה; משנה ב׳ מציגה את לוח הזמנים של האזכור, ומבררת גם את גבולות הבקשה.","מהו התאריך שבו מתחילים לבקש גשם, ומדוע יש שדוחים את הבקשה?","לפי חלוקת ספריא וויקיטקסט, מחלוקת הסיום כלולה כאן. מכון ממרא מציג אותה בראש א׳, ג׳; גם שמות החולקים שונים: רבי מאיר במקורות הראשונים, רבי יוסי במכון ממרא."],[3,"למה ממתינים עד שהעולה לרגל יחזור הביתה?","לפי תנא קמא מתחילים לשאול גשמים בשלושה במרחשוון. רבן גמליאל דוחה לשבעה בחודש, חמישה עשר ימים לאחר סוכות, כדי לאפשר לאחרון עולי הרגל להגיע לנהר פרת. כאן מפגש מרתק בין צורך החקלאים בגשם לבין דאגה למי שעדיין בדרך.","משנה ב׳ סידרה את מועד ההזכרה; משנה ג׳ מוסיפה את שאלת התאריך של הבקשה עצמה ומתחשבת בעולי הרגל.","ומה עושים כאשר חולף הזמן והגשמים עדיין אינם מגיעים?","מכון ממרא מסמן בתוך א׳, ג׳ את תחילת היחידה כ'[ג]'; ספריא וויקיטקסט מונים אותה כמשנה ג׳ נפרדת. תיאור מסלול הרגל הוא מהמקור, לא מפה ארכאולוגית של הדרך."],[4,"י״ז במרחשוון — מי מתחיל לצום?","כאשר מגיע שבעה עשר במרחשוון ללא גשם, המשנה מתארת שלוש תעניות של 'יחידים'. אלו אינן עדיין גזרת תענית על הציבור כולו. המשנה מונה הקלות בנוגע לאכילה מהלילה ולמלאכה, רחיצה, סיכה ונעילת סנדל; אין לבלבל את השלב הזה עם השלבים המחמירים בהמשך.","משנה ג׳ נתנה זמן לבקש גשם; ד׳ שואלת מה עושים כאשר הבקשה לא נענתה והמחסור מתחיל להדאיג.","מתי הופכת תגובת היחידים לאחריות של הציבור ובית הדין?","'יחידים' הוא מונח הלכתי במקור; פירוט מעמדם ויישום הדין כיום דורשים פרשנות ופסיקה נפרדות."],[5,"ראש חודש כסלו — הציבור מצטרף","אם מגיע ראש חודש כסלו והגשם לא ירד, בית הדין גוזר שלוש תעניות על הציבור. המשנה עדיין משמרת בשלב הראשון את ההקלות שניתנו לתעניות היחידים. העיקר כאן אינו רק תאריך חדש, אלא מעבר מפעולה אישית להחלטה ציבורית.","ד׳ דיברה על תגובת היחידים; ה׳ מעבירה את האחריות לבית הדין ולכלל הציבור, בלי להעלות מיד את חומרת האיסורים.","מה משתנה אם גם התעניות הציבוריות אינן מביאות גשם?","אלו דינים במשנה ולא המלצה לצום כיום ללא בירור הלכתי ורפואי."],[6,"שלוש, עוד שלוש, ואז שבע — כשהבצורת נמשכת","כאשר אין מענה, המשנה מחריפה את סדר התעניות: עוד שלוש תעניות שבהן מתחילים לצום כבר לפני הערב ויש איסורים נוספים, ולאחריהן שבע נוספות — עד שלוש עשרה תעניות ציבור בסך הכול. בסדרה האחרונה מתווספות התרעה והגבלות על חנויות, עם התחשבות ביום חמישי לכבוד שבת.","משנה ה׳ דנה בתעניות ציבור מקלות; ו׳ מתארת הסלמה מדורגת, ולא גזרה אחת אחידה.","איך מתנהגת קהילה כשהבצורת נמשכת למרות כל שלבי התעניות?","יש להבחין בין שלוש התעניות הראשונות, שלוש המחמירות והשבע הנוספות. סדר זה מתואר במשנה ולא משמש הוראה אישית רפואית."],[7,"לא רק צום: איך הבצורת משנה את החיים?","לאחר שהשלבים הקודמים לא הועילו, המשנה מתארת צמצום במסחר, בנייה, נטיעה, אירוסין, נישואין ואפילו שאילת שלום. היחידים ממשיכים בתעניות עד ניסן. סיום הפרק מעורר קושי בנוסח: מה פירוש גשם שמגיע אחרי זמן הקציר, ומתי הוא נחשב סימן שלילי?","משנה ו׳ הציגה תעניות מחמירות; ז׳ מתארת את השפעת המחסור על שגרת החיים ואת גבול עונת הבקשה.","בפרק ב׳ נראה כיצד נערך מעמד תענית ציבור עם תפילה, פסוקים ודברי התעוררות.","הטקסט בספריא ובמכון ממרא מציג 'יצא ניסן — הגשמים סימן קללה'; בוויקיטקסט יש נוסח 'יצא ניסן ולא ירדו גשמים' והערת חילופי נוסח. אין להכריע כאן בין הגרסאות."]];
  const letters=["","א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ז׳"];
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const section=document.createElement("section");
  section.id="taanitChapter1";
  section.setAttribute("aria-label","תענית פרק א׳ — שבע משניות לפי סדר המסכת");
  let html='<div class="study-divider">תענית א׳ · שבע משניות<small>גשמים, תפילה, דאגה לעולי הרגל ותעניות בעת בצורת · לימוד המשנה עצמה</small></div>'+
    '<p class="smallprint">המספור: שבע משניות לפי ספריא וויקיטקסט. מכון ממרא מונה גם שבע יחידות, אבל גבול משניות ב׳–ג׳ שונה; בולט גם שינוי שם תנא במחלוקת עד מתי שואלים גשמים. קראו את המקור המדויק בכל כרטיס. אלו הסברים לימודיים, לא פסק הלכה.</p>'+
    '<p class="smallprint">כל שבע היחידות זמינות בלי הטמעת וידאו לא מאומת. קיימים שיעורים מועמדים מסודרים לפי משנה, אך ניגון, כתוביות ואיכות סגנונם טרם נבדקו בצפייה ממשית.</p>'+
    '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Ta%27anit.1.1?lang=he" target="_blank" rel="noopener noreferrer">ספריא ↗</a> <a href="https://he.wikisource.org/wiki/משנה_תענית_א" target="_blank" rel="noopener noreferrer">ויקיטקסט ↗</a> <a href="https://mechon-mamre.org/b/h/h29.htm" target="_blank" rel="noopener noreferrer">מכון ממרא ↗</a></div>'+
    '<div class="actions" style="margin:12px 0"><button type="button" class="btn gold" id="ta1Continue">▶ המשך ללמוד</button> <span class="progressnote" id="ta1Progress" aria-live="polite"></span></div><div class="eruvin-cards">';
  for(const [n,title,explanation,bridge,question,note] of units){
    const prev=n===1?"#rosh-hashanah-4-9":"#taanit-1-"+(n-1);
    const next=n===7?"#taanit-2-1":"#taanit-1-"+(n+1);
    html+='<article class="eruvin-card" id="taanit-1-'+n+'"><span class="eyebrow">תענית א׳, '+letters[n]+'</span><h4>'+esc(title)+'</h4><p>'+esc(explanation)+'</p>'+
      '<p class="eruvin-bridge"><strong>מה ראינו קודם — מדוע זה מוביל לכאן?</strong> '+esc(bridge)+' <strong>השאלה הבאה:</strong> '+esc(question)+'</p>'+
      '<p class="smallprint">'+esc(note)+'</p><div class="eruvin-actions"><button type="button" class="btn ghost" data-ta1-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
      '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Ta%27anit.1.'+n+'?lang=he" target="_blank" rel="noopener noreferrer">קרא את המשנה עצמה ↗</a> <a href="'+prev+'">הקודם</a> <a href="'+next+'">הבא</a></div></article>';
  }
  section.innerHTML=html+'</div><p class="smallprint">המשך לפי סדר המשניות: מסכת תענית, פרק ב׳ משנה א׳. אין להסיק מכך סדר זמנים היסטורי.</p>';
  parent.after(section);
  const key="mishnah_cinema_taanit_ch1_v1";
  let progress={};
  try{const x=JSON.parse(localStorage.getItem(key)||"{}");if(x&&typeof x==="object"&&!Array.isArray(x))progress=x;}catch(_){}
  const marks=[...section.querySelectorAll("[data-ta1-mark]")],counter=section.querySelector("#ta1Progress"),resume=section.querySelector("#ta1Continue");
  function draw(){let done=0;for(const b of marks){const yes=!!progress[b.dataset.ta1Mark];if(yes)done++;b.setAttribute("aria-pressed",String(yes));b.textContent=yes?"✓ למדתי — בטל":"סמן שלמדתי";}counter.textContent=done+" / 7";resume.disabled=done===7;}
  section.addEventListener("click",event=>{const b=event.target.closest("button[data-ta1-mark]");if(!b||!section.contains(b))return;const n=b.dataset.ta1Mark;progress[n]=!progress[n];try{localStorage.setItem(key,JSON.stringify(progress));}catch(_){}draw();});
  resume.addEventListener("click",()=>{const next=units.find(u=>!progress[u[0]]);if(next)document.getElementById("taanit-1-"+next[0])?.scrollIntoView({behavior:"smooth",block:"center"});});
  draw();
  let hash="";try{hash=decodeURIComponent(location.hash.slice(1));}catch(_){}
  if(hash==="taanitChapter1"||/^taanit-1-[1-7]$/.test(hash)){const dest=hash==="taanitChapter1"?section:document.getElementById(hash);if(dest)requestAnimationFrame(()=>dest.scrollIntoView({behavior:"auto",block:"start"}));}
})();
/* Continue textual Mishnah learning without disturbing historical film order. */
(function(){
  if(!document.getElementById("taanitChapter1")||
     document.getElementById("taanitChapter2")||
     document.querySelector("script[data-ta2-loader]"))return;
  const script=document.createElement("script");
  const base=document.currentScript&&document.currentScript.src;
  script.src=base?new URL("taanit-ch2.js",base).href:"./taanit-ch2.js";
  script.async=true;script.dataset.ta2Loader="1";
  document.head.appendChild(script);
})();
