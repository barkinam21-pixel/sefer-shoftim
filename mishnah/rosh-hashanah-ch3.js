"use strict";
/* ראש השנה ג׳ – סדר טקסטואלי, לא ציר היסטורי.
  מקורות שנבדקו 31.10.2026:
  https://he.wikisource.org/wiki/משנה_ראש_השנה_ג (8 משניות)
  https://mechon-mamre.org/b/h/h28.htm (6 יחידות; ג+ד, ו+ז מאוחדות)
  https://www.sefaria.org/Mishnah_Rosh_Hashanah.3?lang=he
  https://mishna.org.il/en/מועד/ראש%20השנה/3
  ניסוח ההסברים מקורי; לא העתקת טקסט. סרטונים ללא אימות איכות לא הוטמעו.
*/
(function(){
  const parent=document.getElementById("roshHashanahChapter2");
  if(!parent||document.getElementById("roshHashanahChapter3"))return;
  const units=[
    [1,"כולם ראו את הלבנה. אז למה החודש לא התקדש?",
     "אפילו אם בית הדין וכל ישראל ראו את הירח החדש, אם החשיך לפני הכרזת 'מקודש' – החודש הקודם נעשה בן שלושים יום. המשנה מתארת גם מצב שבו הדיינים עצמם ראו את הלבנה: נדרשת עדות והרכב בית דין מתאים; דיין יחיד אינו יכול לקדש את החודש לבדו.",
     "ב׳, ט׳ חתם במחלוקת על סמכותו של בית הדין לקבוע מועד. כעת ג׳, א׳ בוחנת מבחן מעשי: האם ראיית הירח לבדה מספיקה?",
     "אחרי סיום דיני קידוש החודש נפתח נושא חדש: באיזה שופר יוצאים ידי חובה?",
     "המחלוקת על ההכרזה היא דין במשנה; תיאור בית דין מצולם יהיה שחזור אמנותי בלבד."],
    [2,"האם קרן של פרה היא שופר?",
     "תנא קמא פוסל קרן של פרה מפני שהיא נקראת 'קרן'. רבי יוסי משיב שגם שופרות אחרים מכונים במקרא 'קרן', ומסתמך על ספר יהושע. זו מחלוקת על גבולות המונח ההלכתי ועל ראייתו מן המקרא.",
     "המעבר מא׳ לב׳ הוא שינוי נושא בתוך אותו פרק – מקידוש החודש אל מצוות השופר. אין כאן שרשרת אירועים היסטורית.",
     "אם לא כל קרן מתאימה, איך נראו כלי התקיעה המתוארים בהקשר המקדש?",
     "העיון בפסוק יהושע ו׳, ה׳ הוא טיעון המובא במשנה, לא מסקנה לשונית מודרנית."],
    [3,"זהב, יעל ושתי חצוצרות — מי משמיע את הקול המרכזי?",
     "המשנה מתארת שופר פשוט של יעל, פיו מצופה זהב ושתי חצוצרות מצדדיו. השופר מאריך בקולו והחצוצרות מקצרות, כדי להבליט שביום זה עיקר המצווה בשופר. לפי פירוש ברטנורא והרמב״ם, תיאור החצוצרות שייך לעבודת המקדש; אין להציג זאת כמנהג תקיעה רגיל בכל בית כנסת.",
     "ב׳ שאלה איזה כלי נחשב שופר. ג׳ עוברת מהמיון ההלכתי אל תיאור סידור התקיעה.",
     "האם אותו סידור נשמר גם ביום צום?",
     "הכלים והחלוקה מתוארים במשנה; צילום של טקס מקדשי מודרני הוא המחשה, לא תיעוד."],
    [4,"כשהחצוצרות מאריכות והשופר מתקצר",
     "בתעניות המשנה מתארת שופרות כפופים של זכרים, ציפוי כסף וחצוצרות במרכז. כאן החצוצרות הן המאריכות בקולן, והשופר מקצר: ההיפוך מדגיש את תפקידו השונה של כל כלי ביום הזה.",
     "ג׳ תיארה את סדר התקיעות בראש השנה. ד׳ מציבה מולה תמונת ראי – תקיעות בתעניות – וכך מחדדת במה שונה מצוות היום.",
     "מה הקשר בין ראש השנה לשנת היובל, והאם יש מחלוקת על צורת השופר?",
     "סדר המקדש המתואר הוא עדות טקסטואלית במשנה; אין בכך רשות להמציא טקס מצולם מדויק."],
    [5,"ראש השנה ויובל — אותו דין ואותה קרן?",
     "המשנה משווה בין היובל לראש השנה בתקיעות ובברכות. רבי יהודה מבחין בין סוגי השופרות: בראש השנה שופר של זכרים, וביובל של יעלים. שימו לב: דבריו הם דעת תנא בתוך מחלוקת, ולא סתם המשך של תיאור המשנה הקודמת.",
     "ד׳ העמידה זו מול זו את תקיעות ראש השנה והתעניות; ה׳ מרחיבה את ההשוואה גם לשנת היובל ומציגה מחלוקת נוספת.",
     "מה קורה כאשר הכלי שנסמך עליו כל הטקס נסדק או תוקן?",
     "ההשוואה והדעה הן מן המשנה; הכרעה הלכתית למעשה דורשת מקור נפרד."],
    [6,"השופר נסדק — האם אפשר לתקן אותו?",
     "שופר שנשבר והודבק או הורכב משברי שופרות – פסול לפי המשנה. בנקב שנסתם, הדין תלוי בשאלה אם הסתימה מעכבת את התקיעה. דוגמה יומיומית: לא די שהחפץ נראה שלם, צריך לשאול מה קרה לקול ולאופן פעולתו.",
     "ה׳ עסקה בבחירת סוג השופר; ו׳ שואלת אם השופר המסוים שנותר בידינו עדיין כשר.",
     "נניח שהשופר תקין, אבל לאוזן מגיע רק הד – האם המצווה מתקיימת?",
     "דוגמת החפץ המתוקן היא המחשה בת־זמננו, לא ניסוח מקורי של המשנה."],
    [7,"מה שמעת באמת — שופר, הד או קול בדרך?",
     "התוקע אל בור, דות או פיטס: השומע יוצא רק אם שמע את קול השופר ולא קול הברה. גם מי שעובר מאחורי בית כנסת ושומע קול שופר או מגילה צריך לכוון את לבו למצווה. המשנה מבחינה בין עצם השמיעה לבין אופי הקול וכוונת האדם.",
     "ו׳ בדקה את תקינות הכלי; ז׳ עוברת מן הכלי אל הצליל כפי שנקלט באוזן ואל כוונת השומע.",
     "כיצד ממשיכה המשנה מכוונת השומע אל השאלה מה באמת מכוון את לב האדם?",
     "דוגמאות אקוסטיות הן עזר להבנה ולא מדידה פיזיקלית של מקרה עתיק."],
    [8,"האם ידי משה ניצחו? המבט, הלב ומי שמוציא אחרים ידי חובה",
     "המשנה דורשת את סיפור ידיו של משה במלחמת עמלק ואת נחש הנחושת: הכוח אינו ביד או בחפץ כשלעצמם, אלא בהפניית הלב כלפי שמים. בסיום היא קובעת שמי שאינו מחויב במצווה אינו מוציא אחרים ידי חובתם; זהו כלל הלכתי בתוך הקשר היסטורי מסוים, ולא שיפוט ערכי של אנשים.",
     "ז׳ קבעה שלא כל שמיעה מספיקה אלא נדרשת גם כוונה; ח׳ מעמיקה בשאלת הלב דרך פסוקים ומסיימת בהגדרת מי יכול לפעול עבור אחרים.",
     "בפרק ד׳ נתחיל בתקיעת שופר בראש השנה שחל בשבת ובתקנות רבן יוחנן בן זכאי שלאחר החורבן.",
     "דרשת הפסוקים היא פירוש תנאי במשנה, ולא טענה שמדובר בתיעוד מצולם של מלחמת עמלק."]
  ];
  const letters=["","א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ז׳","ח׳"];
  const mapping=["","ג,א","ג,ב","ג,ג (חלק ראשון)","ג,ג (חלק שני)","ג,ד","ג,ה (חלק ראשון)","ג,ה (חלק שני)","ג,ו"];
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const section=document.createElement("section");
  section.id="roshHashanahChapter3";
  section.setAttribute("aria-label","ראש השנה פרק ג׳ – שמונה משניות לפי סדר הלימוד");
  let html='<div class="study-divider">ראש השנה ג׳ · שמונה משניות<small>מהכרזת החודש לשופר, קול, כוונה וחובת הציבור · סדר טקסטואלי נפרד מציר ההיסטוריה</small></div>'+
    '<p class="smallprint">המספור באתר זה: ספריא וויקיטקסט – שמונה משניות. מכון ממרא מונה שש יחידות: הוא מאחד את ג׳–ד׳ ואת ו׳–ז׳. לכן לכל משנה מוצגת גם התאמת המספור. את נוסח המשנה המלא קוראים בקישור למקור; הכרטיסים הם הסבר לימודי חדש, לא ציטוט ולא פסק הלכה.</p>'+
    '<p class="smallprint">נבדקו מועמדי וידאו בעברית ובאנגלית, אך לא התקבל אימות לצפייה, לסגנון החזותי ולכתוביות. לא הוטמע סרטון בלתי מאומת. מקורות הלימוד והניווט זמינים גם בלעדיו. המחשה או שחזור אינם ראיה למראה טקס עתיק.</p>'+
    '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Rosh_Hashanah.3?lang=he" target="_blank" rel="noopener noreferrer">ספריא ↗</a> <a href="https://he.wikisource.org/wiki/משנה_ראש_השנה_ג" target="_blank" rel="noopener noreferrer">ויקיטקסט ↗</a> <a href="https://mechon-mamre.org/b/h/h28.htm" target="_blank" rel="noopener noreferrer">מכון ממרא ↗</a></div>'+
    '<div class="actions" style="margin:12px 0"><button type="button" class="btn gold" id="rh3Continue">▶ המשך ללמוד</button> <span class="progressnote" id="rh3Progress" aria-live="polite"></span></div><div class="eruvin-cards">';
  for(const [n,title,explanation,bridge,nextQuestion,sourceNote] of units){
    const prev=n===1?"#rosh-hashanah-2-9":"#rosh-hashanah-3-"+(n-1);
    const next=n===8?"https://www.sefaria.org/Mishnah_Rosh_Hashanah.4.1?lang=he":"#rosh-hashanah-3-"+(n+1);
    html+='<article class="eruvin-card" id="rosh-hashanah-3-'+n+'"><span class="eyebrow">ראש השנה ג׳, '+letters[n]+' · מכון ממרא '+esc(mapping[n])+'</span><h4>'+esc(title)+'</h4>'+
    '<p>'+esc(explanation)+'</p><p class="eruvin-bridge"><strong>מה ראינו קודם — למה זה מוביל לכאן?</strong> '+esc(bridge)+' <strong>השאלה הבאה:</strong> '+esc(nextQuestion)+'</p>'+
    '<p class="smallprint">'+esc(sourceNote)+'</p><div class="eruvin-actions"><button type="button" class="btn ghost" data-rh3-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
    '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Rosh_Hashanah.3.'+n+'?lang=he" target="_blank" rel="noopener noreferrer">קרא את המשנה עצמה ↗</a> <a href="'+prev+'">הקודם</a> <a href="'+next+'"'+(n===8?' target="_blank" rel="noopener noreferrer"':'')+'>הבא</a></div></article>';
  }
  section.innerHTML=html+'</div><p class="smallprint">המשך לימוד המשנה לפי סדר המסכת: ראש השנה ד׳, א׳. החורבן הוא גם נושא בפרק הבא, אך המעבר בין הפרקים אינו ציר זמן היסטורי.</p>';
  parent.after(section);
  const key="mishnah_cinema_rosh_hashanah_ch3_v1";let progress={};
  try{const saved=JSON.parse(localStorage.getItem(key)||"{}");if(saved&&typeof saved==="object"&&!Array.isArray(saved))progress=saved;}catch(_){}
  const marks=[...section.querySelectorAll("[data-rh3-mark]")];
  const counter=section.querySelector("#rh3Progress"),resume=section.querySelector("#rh3Continue");
  function draw(){let count=0;for(const b of marks){const yes=!!progress[b.dataset.rh3Mark];if(yes)count++;b.setAttribute("aria-pressed",String(yes));b.textContent=yes?"✓ למדתי — בטל":"סמן שלמדתי";}counter.textContent=count+" / 8";resume.disabled=count===8;}
  section.addEventListener("click",event=>{const b=event.target.closest("button[data-rh3-mark]");if(!b||!section.contains(b))return;const n=b.dataset.rh3Mark;progress[n]=!progress[n];try{localStorage.setItem(key,JSON.stringify(progress));}catch(_){}draw();});
  resume.addEventListener("click",()=>{const next=units.find(u=>!progress[u[0]]);if(next)document.getElementById("rosh-hashanah-3-"+next[0])?.scrollIntoView({behavior:"smooth",block:"center"});});
  draw();
  let hash="";try{hash=decodeURIComponent(location.hash.slice(1));}catch(_){}
  if(hash==="roshHashanahChapter3"||/^rosh-hashanah-3-[1-8]$/.test(hash)){const dest=hash==="roshHashanahChapter3"?section:document.getElementById(hash);if(dest)requestAnimationFrame(()=>dest.scrollIntoView({behavior:"auto",block:"start"}));}
})();