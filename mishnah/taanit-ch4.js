"use strict";
/* Ta'anit 4: eight source-linked study cards; not historical chronology.
 * Textual differences and rights: research/2026-11-01-taanit-4-audit.md.
 * No external embeds until viewing, rights and caption checks. */
(function () {
  const parent=document.getElementById("taanitChapter3");
  if(!parent || document.getElementById("taanitChapter4")) return;
  const units=[[1,"ארבע פעמים ביום — למה דווקא כאן?","הפרק נפתח במניין זמנים שבהם הכוהנים נושאים את כפיהם ארבע פעמים: שחרית, מוסף, מנחה ונעילה. הרשימה מונה תעניות, מעמדות ויום הכיפורים. היא פותחת דלת להבנת עבודת הציבור במקדש ובתפילה, אך אינה מתארת יום מסוים שאפשר לתארך.","בפרק ג׳ שאלנו כיצד הציבור מגיב כשגשם בא באמצע התענית. פרק ד׳ פותח את המבט מן התענית עצמה לסדר התפילות והשתתפות הציבור בעבודה.","מהם ה'מעמדות' — ומדוע נדרשו גם ישראלים שאינם כוהנים?","שחרית, מוסף, מנחה ונעילה הם מונחי המשנה. אין להסיק מכאן שכך נוהגים בכל בית כנסת בזמננו."],[2,"לא רק כוהנים — מי עומד לצד הקרבן?","המשנה שואלת כיצד קרבן של אדם קרב בלא שהוא עומד על גביו, ומתארת חלוקה לעשרים וארבע משמרות ומעמדות של כוהנים, לוויים וישראלים. חלק מן המשתתפים עולים לירושלים והישראלים האחרים מתכנסים במקומותיהם וקוראים במעשה בראשית. זו מסגרת המתוארת במשנה; פרטיה החזותיים דורשים מחקר נפרד.","א׳ הזכירה את המעמדות לצד התעניות ויום הכיפורים; ב׳ מסבירה מי משתתף בהם ולמה.","כיצד מתחלקת קריאת מעשה בראשית לאורך ימי השבוע?","הנימוק 'וכי היאך קרבנו של אדם קרב' והחלוקה למשמרות מובאים בגוף המשנה. אין להציג שחזור של מעמד כהקלטה היסטורית."],[3,"ששת ימי בראשית נעשים לוח קריאה","לכל יום מן השבוע המשנה מתאימה קטעים ממעשה בראשית, מן 'בראשית' ו'יהי רקיע' ועד 'תוצא הארץ' ו'ויכולו השמים'. היא קובעת גם סדר קריאה בפרשה גדולה ובקטנה, ומציינת שבערב שבת במנחה לא היו נכנסים מפני כבוד השבת. כך נוצר חיבור טקסטואלי בין סדר הבריאה לסדר הציבור.","ב׳ הראתה שאנשי המעמד מתכנסים לקרוא במעשה בראשית; ג׳ מפרטת מה קוראים בכל יום.","האם בכל מועד נשמר אותו סדר קריאה, או שקורבנות וחגים משנים אותו?","חשוב: בוויקיטקסט מופיעה בראש משנה ג׳ הערת עורך על משפט שנכנס בחלק מהדפוסים מן הפירוש; מכון ממרא מציג משנה ג׳ בלי המשפט. אין להקריא הערת עורך כחלק מוסכם מן המשנה."],[4,"הלל, מוסף ועצים — כשהלו״ז משתנה","המשנה קובעת מתי אין מעמד בשחרית, במנחה או בנעילה, לפי הלל, קרבן מוסף וקרבן עצים. רבי עקיבא מציג סדר אחד; בן עזאי מזכיר נוסח ששנה רבי יהושע, ולבסוף רבי עקיבא חוזר לשנות כמותו. השינוי עצמו נמסר במקור, אך אין לנו בסיס להמציא במה, קהל או פרטי המפגש.","ג׳ לימדה את שגרת הקריאה; ד׳ בוחנת כיצד יום מיוחד מחייב לוח זמנים אחר ואף תיקון של המסורת הנלמדת.","מדוע בכלל נקבעו ימים מיוחדים להבאת עצים למקדש?","המשנה מייחסת דעות לשמות מפורשים. אין להוסיף דיאלוג מדומיין או מראה חיצוני לתנאים כאילו תועד."],[5,"תשע מועדות של עצים — ולמה משפחות נזכרות בשמן?","המשנה מונה תשעה מועדים שבהם משפחות וקבוצות שונות הביאו עצים למקדש. ברשימה מופיעים שמות משפחות, תאריכים ויום שבו מצטרפים גם מי שאינם יודעים את שבטם. היא מסיימת בשילוב של הלל, קרבן מוסף וקרבן עצים באחד בטבת. הרעיון הוא תפקיד ציבורי הנזכר בשמות ובזמנים; אין זה יומן רציף של אירועי בית שני.","ד׳ התייחסה ליום שיש בו 'קרבן עצים' כאחת הסיבות לשינוי סדר המעמד; ה׳ מגלה את רשימת המועדים והמשפחות.","מה קורה כשהמשנה עוברת מלוח העבודה והקרבנות ללוח הזיכרון של אסונות?","חילוף נוסח בשם אחת המשפחות: 'בני זתוא' בוויקיטקסט מול 'בני זתואל' במכון ממרא. אין להכריע בהגייה או לשחזר אילן יוחסין בלי בדיקת מהדורה."],[6,"שבעה עשר בתמוז ותשעה באב — חמישה וחמישה","המשנה מונה חמישה מאורעות שנקשרו לשבעה עשר בתמוז וחמישה לתשעה באב, ובהם פגיעה בעבודת המקדש, חורבן הבתים ונפילת ביתר. היא מסיימת בצמצום השמחה משנכנס אב. זהו מניין זיכרון מן המשנה: האירועים שייכים לתקופות שונות ואינם כולם רצף אחד שהתרחש באותו דור.","ה׳ עסקה בלוח המועדים של העבודה והתרומות. המעבר לו׳ הוא מעבר נושאי ללוח הזיכרון, לא טענה שמועד העצים גרם לחורבן.","כיצד זיכרון החורבן משנה את ההתנהגות בימים הסמוכים לתשעה באב?","חילוף נוסח: 'ביתר' בוויקיטקסט לעומת 'בית תור' במכון ממרא; וכן 'אפוסטמוס' / 'אפסטמוס'. זיהוי האירועים ותיארוכם ההיסטורי דורשים מקורות מחוץ למשנה."],[7,"מה עושים בשבוע שחל בו תשעה באב?","המשנה מתארת הגבלות תספורת וכביסה בשבוע שבו חל תשעה באב, וכן דיני סעודה בערב הצום. רבן שמעון בן גמליאל מציע שינוי מסוים; רבי יהודה דורש כפיית המיטה וחכמים אינם מקבלים את דבריו. יש להבחין בין לשון המשנה לבין פסיקה מאוחרת ומנהגי קהילות כיום.","ו׳ קבעה אילו ימים נעשו מוקדי זיכרון; ז׳ עוברת לשאלה האנושית והמעשית: כיצד הזיכרון נוכח בבית ובשגרת החיים.","האם המסכת תסתיים רק באבל, או תעבור דווקא לימים של שמחה ושייכות?","זהו תיאור הנוסח המשנאי ולא הוראת צום או תזונה כיום. ההלכה והמנהגים המעשיים דורשים בירור בפני עצמם."],[8,"מחורבן לשמחה — בגדי לבן שאולים וכרמים","רבן שמעון בן גמליאל מתאר את ט״ו באב ויום הכיפורים כימים שמחים, ואת היציאה בכלי לבן שאולים 'שלא לבייש את מי שאין לו'. המשנה מוסיפה תיאור של ריקוד בכרמים, דברי בחירה המעדיפים ערך ומשפחה על מראה, ולבסוף פסוק משיר השירים ופירושו על מתן תורה ובניין המקדש. זו חתימה ספרותית המביאה תקווה אחרי פרק הזיכרון, ולא הוכחה לצורה מדויקת של חגיגה שניתן לצלם כאירוע מתועד.","ז׳ דנה במנהגי האבל על החורבן; ח׳ יוצרת ניגוד מכוון של שמחה, כבוד הזולת ותקווה לבניין. החיבור ספרותי בתוך המשנה, לא רצף תאריכים.","המשך סדר המסכתות הוא מגילה א׳, א׳: כיצד קוראים את המגילה בזמנים שונים?","חילוף נוסח משמעותי: מכון ממרא כותב 'בני ירושלים יוצאין', בעוד ויקיטקסט 'בנות ירושלים יוצאות'; המשך שני הנוסחים מדבר על בנות ירושלים. אין לקבוע פרטי מחולות, לבוש או פרצופים ללא מקור."]];
  const labels=["","א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ז׳","ח׳"];
  const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const section=document.createElement("section");
  section.id="taanitChapter4";
  section.setAttribute("aria-label","מסכת תענית פרק ד׳ — שמונה משניות");
  let html='<div class="study-divider">תענית ד׳ · שמונה משניות<small>המעמדות, עבודת המקדש, ימי זיכרון וימים של שמחה</small></div>'+
   '<p class="smallprint"><strong>סדר הלימוד:</strong> שמונה יחידות לפי ספריא וויקיטקסט; במכון ממרא שבעה סעיפים: ו׳–ז׳ מסודרות בתוך ד,ו והמשנה השמינית היא ד,ז. זהו מסלול המשנה, ולא לוח ההיסטוריה של בית שני וחכמיו.</p>'+
   '<p class="smallprint">ביאור לימודי מקורי ליד הטקסט העתיק. לא הוכנסה כאן קריינות, המחזה, הקלטה או סרטון שלא נבדקו בצפייה ובזכויות. נדרשת גם ביקורת תורנית לפני שימוש בהפקה.</p>'+
   '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Ta%27anit.4?lang=he" target="_blank" rel="noopener noreferrer">ספריא ↗</a> <a href="https://he.wikisource.org/wiki/משנה_תענית_ד" target="_blank" rel="noopener noreferrer">ויקיטקסט ↗</a> <a href="https://mechon-mamre.org/b/h/h29.htm" target="_blank" rel="noopener noreferrer">מכון ממרא ↗</a></div>'+
   '<div class="actions" style="margin:12px 0"><button type="button" class="btn gold" id="ta4Continue">▶ המשך ללמוד</button> <span id="ta4Progress" class="progressnote" aria-live="polite"></span></div><div class="eruvin-cards">';
  for(const [n,title,explanation,bridge,question,note] of units) {
    const prev=n===1?"#taanit-3-9":"#taanit-4-"+(n-1);
    const next=n===8?"https://www.sefaria.org/Mishnah_Megillah.1.1?lang=he":"#taanit-4-"+(n+1);
    const external=n===8?' target="_blank" rel="noopener noreferrer"':"";
    html+='<article class="eruvin-card" id="taanit-4-'+n+'"><span class="eyebrow">תענית ד׳, '+labels[n]+'</span><h4>'+escapeHtml(title)+'</h4><p>'+escapeHtml(explanation)+'</p>'+
      '<p class="eruvin-bridge"><strong>מה ראינו — ומדוע זה מוביל לכאן?</strong> '+escapeHtml(bridge)+' <strong>שאלה להמשך:</strong> '+escapeHtml(question)+'</p>'+
      '<p class="smallprint">'+escapeHtml(note)+'</p>'+
      '<div class="eruvin-actions"><button type="button" class="btn ghost" data-ta4-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
      '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Ta%27anit.4.'+n+'?lang=he" target="_blank" rel="noopener noreferrer">קרא את המשנה עצמה ↗</a> <a href="'+prev+'">הקודם</a> <a href="'+next+'"'+external+'>הבא</a></div></article>';
  }
  section.innerHTML=html+'</div><p class="smallprint">לאחר תענית ד׳ מתחילה מסכת מגילה; אין לראות ברצף המסכתות רצף כרונולוגי של מאורעות.</p>';
  parent.after(section);
  const key="mishnah_cinema_taanit_ch4_v1";
  let progress={};
  try { const saved=JSON.parse(localStorage.getItem(key)||"{}"); if(saved && typeof saved==="object" && !Array.isArray(saved)) progress=saved; } catch (_) {}
  const marks=[...section.querySelectorAll("[data-ta4-mark]")];
  const counter=section.querySelector("#ta4Progress");
  const resume=section.querySelector("#ta4Continue");
  function render() {
    let done=0;
    for(const btn of marks) {
      const yes=!!progress[btn.dataset.ta4Mark];
      if(yes) done++;
      btn.setAttribute("aria-pressed",String(yes));
      btn.textContent=yes?"✓ למדתי — בטל":"סמן שלמדתי";
    }
    counter.textContent=done+" / 8";
    resume.disabled=done===8;
  }
  section.addEventListener("click",event=>{
    const target=event.target;
    const btn=target && target.closest ? target.closest("button[data-ta4-mark]") : null;
    if(!btn || !section.contains(btn)) return;
    const n=btn.dataset.ta4Mark;
    progress[n]=!progress[n];
    try { localStorage.setItem(key,JSON.stringify(progress)); } catch (_) {}
    render();
  });
  resume.addEventListener("click",()=>{
    const next=units.find(row=>!progress[row[0]]);
    if(next) document.getElementById("taanit-4-"+next[0])?.scrollIntoView({behavior:"smooth",block:"center"});
  });
  render();
  let hash="";
  try { hash=decodeURIComponent(location.hash.slice(1)); } catch (_) {}
  if(hash==="taanitChapter4" || /^taanit-4-[1-8]$/.test(hash)) {
    const dest=hash==="taanitChapter4" ? section : document.getElementById(hash);
    if(dest) requestAnimationFrame(()=>dest.scrollIntoView({behavior:"auto",block:"start"}));
  }
})();