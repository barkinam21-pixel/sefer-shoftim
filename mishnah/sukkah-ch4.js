"use strict";
(function(){
 const parent=document.getElementById("sukkahTractate");
 if(!parent||!document.getElementById("sukkahChapter3")||document.getElementById("sukkahChapter4"))return;
 // Lesson summaries describe the ancient Mishnah. The videos are third-party aids, not original historical footage.
 const units=[
 [1,"כמה ימים נמשכות מצוות החג?","המשנה מונה לולב וערבה שישה או שבעה ימים, הלל ושמחה שמונה, סוכה וניסוך המים שבעה, וחליל חמישה או שישה.","סוכה ג׳, ט״ו הסתיימה בנטילת הלולב בבית. כעת נפתחת מפת הזמנים של מצוות החג, בלי לטעון למעבר היסטורי.","באיזה מקרה נוטלים לולב שבעה ימים?"],
 [2,"לולב שבעה — מתי שבת משנה את החשבון?","כאשר היום הראשון של החג חל בשבת, נטילת הלולב נוהגת שבעה ימים; בשאר המקרים שישה, כמתואר במשנה.","א׳ מנתה שישה או שבעה ימים; ב׳ מסבירה מתי הלולב מגיע לשבעה.","מתי הערבה מקבלת שבעה ימים?"],
 [3,"ערבה שבעה — היום השביעי שחל בשבת","המשנה קובעת שכאשר היום השביעי של הערבה חל בשבת, מצוות הערבה שבעה ימים, ובשאר המקרים שישה.","ב׳ בחנה את הלולב ושבת בתחילת החג; ג׳ בוחנת את הערבה ושבת בסוף שבעת הימים.","איך הביאו את הלולבים למקדש?"],
 [4,"לולבים בהר הבית — ומדוע שינו את המנהג?","המשנה מתארת הבאת לולבים להר הבית, מסירתם לחזנים, דוחק ומכות בזמן הנטילה, ותקנת בית הדין שכל אדם ייטול בביתו.","ג׳ תיארה מתי הערבה דוחה שבת; ד׳ מציגה כיצד ארגנו בפועל את נטילת הלולב במקדש.","כיצד קיימו את מצוות הערבה סביב המזבח?"],
 [5,"ערבות ממוצא והקפות המזבח","לפי המשנה הביאו ערבות ממוצא, זקפום בצדי המזבח ותקעו; הקיפו פעם אחת בכל יום ושבע פעמים ביום השביעי. מובאת גם לשונו החולקת של רבי יהודה.","ד׳ הציגה את נטילת הלולב בהר הבית; ה׳ עוברת אל מנהג הערבה סביב המזבח, טקס אחר.","מה עשו כאשר יום הערבה חל בשבת?"],
 [6,"ערבות של ערב שבת — וחריות הדקל","לשבת הכינו את הערבות מבעוד יום ושמרו אותן בגיגיות זהב. רבי יוחנן בן ברוקה מוסר מנהג נוסף של חיבוט חריות דקל.","ה׳ תיארה את הקפת המזבח בערבה; ו׳ מראה כיצד שימרו ערבות לקיום המנהג בשבת ומוסיפה דעה על חריות דקל.","מה קרה ללולבים ולאתרוגים של הילדים?"],
 [7,"לולבי הילדים ואתרוגיהם","המשנה הקצרה מזכירה שמיטת לולבי התינוקות ואכילת אתרוגיהם; זהות הפועלים המדויקת ופירוש המנהג נדונים בפרשנות, ואין להמחיזם כעובדה ברורה.","ו׳ מסרה את מנהג הערבה וחריות הדקל; ז׳ מוסיפה מעשה קצר הנוגע ללולבים ולאתרוגים.","כיצד מכבדים את יום טוב האחרון?"],
 [8,"שמחת החג והמעבר מישיבה בסוכה","ההלל והשמחה נמשכים שמונה ימים; עם גמר האכילה ביום השביעי אין מפרקים מיד את הסוכה, אבל מורידים כלים לקראת יום טוב האחרון.","ז׳ עסקה בלולבים ובאתרוגים; ח׳ חוזרת למניין ימי השמחה ולמעבר מן הסוכה אל יום טוב האחרון.","כיצד הובילו מים מן השילוח למזבח?"],
 [9,"ניסוך המים — מן השילוח אל המזבח","המשנה מפרטת צלוחית זהב, מילוי מן השילוח, תקיעות ושני ספלים; רבי יהודה חולק בפרטים. מתואר גם מקרה שבו נרגם המנסך באתרוגים, ללא זיהויו במשנה.","ח׳ הסבירה את שבעת ימי הסוכה; ט׳ פותחת את טקס ניסוך המים שנמנה אף הוא בשבעה ימים במשנה א׳.","מה משתנה בניסוך המים שחל בשבת?"],
 [10,"ניסוך מים בשבת — הכנה ושמירה","לפני שבת מילאו מים מן השילוח בחבית זהב שאינה מקודשת. אם נשפכו או נתגלו, מילאו מן הכיור, משום שמים ויין מגולים פסולים למזבח.","ט׳ תיארה את ניסוך המים ביום רגיל; י׳ משלימה את השאלה המעשית של הכנה לשבת.","בפרק ה׳ נמשיך אל שמחת בית השואבה."]
 ];
 const videoIds={1:"u3jKCyMG9N0",7:"GVh86gJPaq8",10:"X3BQsxLo-34"};
 const producerPages={3:"https://mishnah.co/find-a-mishnah?mishnah=1891",9:"https://mishnah.co/he/find-a-mishnah?mishnah=1897"};
 const fullChapter="https://www.mishna.org.il/מועד/סוכה/4";
 const esc=x=>String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const letters=["","א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ז׳","ח׳","ט׳","י׳"];
 const section=document.createElement("section");section.id="sukkahChapter4";section.setAttribute("aria-labelledby","sukkah4Heading");
 let html='<div class="study-divider">סוכה ד׳ — לימוד לפי הסדר<small>עשר משניות לפי ספריא, לא לפי סדר האירועים בהיסטוריה</small></div>'+
 '<h4 id="sukkah4Heading">לולב וערבה במקדש, הלל וניסוך המים</h4>'+
 '<p class="smallprint">ספריא מונה 10 משניות; מכון ממרא מציג 9 פסקאות, אך בתוך פסקה ו׳ גם את משנה ז׳, ומסמן את משניות ח׳–י׳ בסוגריים בפסקאות ז׳–ט׳. לפיכך המספור כאן הוא 1–10 לפי ספריא. אין לבלבל טקסט של המשנה, ביאור עכשווי ושחזור היסטורי.</p>'+
 '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Sukkah.4" target="_blank" rel="noopener noreferrer">📜 מקור בספריא ↗</a><a href="https://mechon-mamre.org/b/h/h26.htm" target="_blank" rel="noopener noreferrer">נוסח מכון ממרא ↗</a><a href="'+fullChapter+'" target="_blank" rel="noopener noreferrer">▶ שיעור וידאו עברי לכל הפרק ↗</a></div>'+
 '<p class="smallprint">וידאו: שלושה מזהי YouTube של The Mishnah Project אומתו לפי כותרת ומטא־נתונים בלבד; עוד שני דפי יוצר פרטניים זוהו. בחמש המשניות האחרות יש קישור לשיעור עברי של כל הפרק — לא חמישה סרטונים נפרדים. ניגון, משך, כתוביות ואיכות בצפייה טרם אומתו.</p>'+
 '<div class="actions" style="margin:12px 0"><button id="sukkah4Continue" type="button" class="btn gold">▶ המשך ללמוד</button> <span id="sukkah4Progress" class="progressnote" aria-live="polite"></span></div><div class="eruvin-cards">';
 for(const [n,title,focus,bridge,question] of units){
  const id=videoIds[n],page=producerPages[n];
  const prev=n===1?"#sukkah-3-15":"#sukkah-4-"+(n-1),next=n===10?"#sukkah-5-1":"#sukkah-4-"+(n+1);
  let actions='';
  if(id){actions='<button type="button" class="btn gold" data-sukkah4-play="'+id+'" data-n="'+n+'">▶ נגן באתר</button><a class="btn ghost" href="https://www.youtube.com/watch?v='+id+'" target="_blank" rel="noopener noreferrer">הסרטון המקורי ↗</a>';}
  else if(page){actions='<a class="btn gold" href="'+page+'" target="_blank" rel="noopener noreferrer">▶ סרטון פרטני אצל היוצר ↗</a>';}
  else{actions='<a class="btn ghost" href="'+fullChapter+'" target="_blank" rel="noopener noreferrer">▶ וידאו הפרק השלם (לא משנה נפרדת) ↗</a>';}
  html+='<article class="eruvin-card" id="sukkah-4-'+n+'"><span class="eyebrow">סוכה ד׳, '+letters[n]+'</span><h4>'+esc(title)+'</h4><p>'+esc(focus)+'</p>'+
   '<p class="eruvin-bridge"><strong>מה ראינו קודם — למה זה מוביל לכאן?</strong> '+esc(bridge)+' <strong>השאלה הבאה:</strong> '+esc(question)+'</p>'+
   '<p class="eruvin-credit">'+(id?'The Mishnah Project · זוהה במטא־נתונים בלבד':page?'The Mishnah Project · דף משנה פרטני זוהה':'שיעור וידאו עברי של הפרק השלם — לא סרטון פרטני')+'</p>'+
   '<div class="eruvin-actions">'+actions+'<button type="button" class="btn ghost" data-sukkah4-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
   (id?'<div class="eruvin-video" data-sukkah4-host="'+n+'" hidden></div>':'')+
   '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Sukkah.4.'+n+'?lang=he" target="_blank" rel="noopener noreferrer">📜 משנה מדויקת בספריא ↗</a><a href="https://mechon-mamre.org/b/h/h26.htm" target="_blank" rel="noopener noreferrer">מכון ממרא ↗</a><a href="'+prev+'">הקודם</a><a href="'+next+'"'+'>הבא</a></div></article>';
 }
 section.innerHTML=html+'</div><p class="smallprint">הנושאים והגשרים הם ביאור מודרני. תיאור מנהגי המקדש מבוסס על המשנה, ואין לראות בהמחזה עתידית צילום של ההתרחשות ההיסטורית. הסרטונים נשארים אצל בעלי הזכויות; אין העתקת וידאו.</p>';
 parent.appendChild(section);
 const storage="mishnah_cinema_sukkah_ch4_v1";let state={};
 try{const old=JSON.parse(localStorage.getItem(storage)||"{}");if(old&&typeof old==="object"&&!Array.isArray(old))state=old;}catch(_){ }
 const marks=Array.from(section.querySelectorAll("[data-sukkah4-mark]"));
 function redraw(){let count=0;for(const b of marks){const done=!!state[b.dataset.sukkah4Mark];if(done)count++;b.setAttribute("aria-pressed",String(done));b.textContent=done?"✓ למדתי — בטל":"סמן שלמדתי";}section.querySelector("#sukkah4Progress").textContent=count+" / 10";section.querySelector("#sukkah4Continue").disabled=count===10;}
 section.addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b||!section.contains(b))return;
  if(b.dataset.sukkah4Mark){const n=b.dataset.sukkah4Mark;state[n]=!state[n];try{localStorage.setItem(storage,JSON.stringify(state));}catch(_){}redraw();return;}
  const id=b.dataset.sukkah4Play,n=b.dataset.n;if(!id||videoIds[n]!==id||!/^[a-zA-Z0-9_-]{11}$/.test(id))return;
  const host=section.querySelector('[data-sukkah4-host="'+n+'"]');if(!host)return;
  section.querySelectorAll("[data-sukkah4-host]").forEach(h=>{h.replaceChildren();h.hidden=true;});
  const frame=document.createElement("iframe");frame.src="https://www.youtube-nocookie.com/embed/"+id+"?rel=0";
  frame.title="סוכה ד׳ משנה "+n+" — The Mishnah Project";frame.loading="lazy";frame.referrerPolicy="strict-origin-when-cross-origin";
  frame.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";frame.allowFullscreen=true;
  host.appendChild(frame);host.hidden=false;b.textContent="↻ טען שוב";
 });
 section.querySelector("#sukkah4Continue").addEventListener("click",()=>{const next=units.find(u=>!state[u[0]]);if(next)document.getElementById("sukkah-4-"+next[0])?.scrollIntoView({behavior:"smooth",block:"center"});});
 redraw();
 let hash="";try{hash=decodeURIComponent(location.hash.slice(1));}catch(_){}
 if(/^sukkah(?:Chapter4|-4-(?:10|[1-9]))$/.test(hash)){const anchor=hash==="sukkahChapter4"?section:document.getElementById(hash);if(anchor)requestAnimationFrame(()=>anchor.scrollIntoView({behavior:"auto",block:"start"}));}
})();

// Load the next textual Mishnah chapter after chapter 4 has mounted.
(()=>{const s=document.createElement("script");s.src="./sukkah-ch5.js";document.body.appendChild(s);})();
