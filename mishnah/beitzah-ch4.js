"use strict";
/* Beitzah chapter 4: seven Mishnah units, independent of the historical chronology.
   Source: Mechon Mamre and Hebrew Wikisource; video metadata only, no viewing. */
(function(){
 const parent=document.getElementById("beitzahChapter3");
 if(!parent||document.getElementById("beitzahChapter4"))return;
 const units=[[1,"כדי יין ותבן: שינוי בדרך הנשיאה","המשנה מורה כיצד להעביר כדי יין ותבן ביום טוב בדרך השונה מנשיאת משאות של חול; בסופה הבחנה בין ערמת תבן לעצים שבמוקצה. פירוש ברטנורא מדגיש את שינוי אופן הנשיאה.","ביצה ג׳, ח׳ עסקה בלשון המסחר בחנות; כאן משתנה המוקד לדרך נשיאת הסחורה. זהו קשר מחיי היום־יום, לא סיפור המשך.","מהיכן מותר לקחת עצים להסקה?"],[2,"עצי סוכה, שדה וקרפף","אין נוטלים עצים מגוף הסוכה אלא מן הסמוך לה. עצים בשדה נלקחים מן המכונס, ובקרפף גם מן המפוזר. רבי יהודה ורבי יוסי נחלקים בהגדרת קרפף.","א׳ עסקה בנשיאת תבן ובעצים שבמוקצה; ב׳ מתמקדת במקומות שבהם עצים מוכנים לנטילה.","אם העצים מותרים, באילו כלים מותר לבקע אותם?"],[3,"ביקוע עצים ופירות מאחורי פתח סתום","המשנה מגבילה מקור עצים וכלי ביקוע: לא קרדום, מגרה או מגל, אלא קופיץ. בדין אחר, בית פירות שנפחת, ורבי מאיר מתיר אף לפחות לכתחילה; אין להעתיק דין זה לכל בניין.","ב׳ ביררה אילו עצים זמינים; ג׳ ממשיכה לשאלה כיצד מבקעים אותם, ועוברת למקרה אחר של פירות מאוחסנים.","מתי שימוש בנר הופך ליצירת כלי חדש?"],[4,"נר, פחמים ופתילה","המשנה אוסרת עשיית נר, פחמים וחיתוך פתילה לשניים ביום טוב. רבי יהודה מציע חיתוך באש לשני נרות. יש חילוף נוסח 'פוחתין' במכון ממרא לעומת 'פותחין' בחלק מהמהדורות.","ג׳ עסקה בביקוע עצים ובפתיחת פתח; ד׳ מעבירה את השאלה לעשיית כלי תאורה חדשים — מעבר נושאי.","מה מותר לשנות בתנור ובסידור כלי הבישול?"],[5,"תנור, חרס וכלי בישול","אין שוברים חרס או חותכים נייר לצלייה, ויש הגבלות על גריפת תנור, הסמכת סיר וסידור חביות. בוויקיטקסט מופיע היתר של רבי אלעזר ברבי שמעון להולכת בהמה במקל; במכון ממרא משפט זה אינו מופיע.","ד׳ דנה ביצירת נר ופתילה; ה׳ מעמיקה בפעולות סביב הצלייה והסיר, ובסופה דין נפרד בהולכת בהמה.","האם כל קיסם וחומר בחצר מוכנים לשימוש?"],[6,"קיסם שיניים ועצים מן החצר","רבי אליעזר מתיר ליטול קיסם לחצוץ שיניים ולגבב עצים מן החצר, וחכמים מגבילים את הלקיטה למה שלפניו. יש הבדל נוסח בלשון חכמים ('מגבב' לעומת 'אף מגבב').","ה׳ ביררה פעולות הכנה ליד התנור; ו׳ שואלת מה נחשב מוכן בחצר.","אם אין אש קיימת, האם יוצרים אש חדשה?"],[7,"אש חדשה והכנת פירות","המשנה אוסרת להוציא אש חדשה מעצים, אבנים, עפר או מים, וכן ללבן רעפים לצלייה. בסופה מחלוקת רבי אליעזר וחכמים על ייעוד מוקדם של פירות בשנת השמיטה — נושא אחר בתוך המשנה.","ו׳ עסקה בליקוט חומר להדלקה; ז׳ מפרידה בין שימוש בדלק מוכן ליצירת אש חדשה, ואז עוברת לדין פירות.","המשך: ביצה ה׳, א׳ — כיצד מצילים פירות מגשם בחג?"]];
 const videos={7:"P4hNemaEtIU"};
 const creator="https://www.torahsecrets.co.uk/playlist/masechet-beitzah/";
 const text="https://he.wikisource.org/wiki/משנה_ביצה_ד";
 const mm="https://mechon-mamre.org/b/h/h27.htm";
 const letters=["","א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ז׳"];
 const escapeText=x=>String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const section=document.createElement("section");
 section.id="beitzahChapter4";
 section.setAttribute("aria-label","ביצה פרק ד · לימוד המשנה לפי הסדר");
 let html='<div class="study-divider">ביצה ד׳ · שבע משניות<small>דרך נשיאה, עצים, כלים ואש · מסלול לימוד המשנה, לא ציר זמן היסטורי</small></div>'+
 '<p class="smallprint">שתי מהדורות עצמאיות: מכון ממרא וויקיטקסט, שבע משניות בשתיהן. הבדלי נוסח בד׳, ג׳–ז׳ ובמיוחד בה׳ מתועדים במחקר; אין ציטוט מנוקד או הכרע ללא עיון נוסף.</p>'+
 '<p class="smallprint">שבעה סרטונים נפרדים באנגלית זוהו בקטלוג The Mishnah Project. מזהה YouTube ישיר אומת רק לז׳ על פי עמוד המפרסם. שאר היחידות מפנות לרשומות הפרטניות אצל היוצר. לא אומתו צפייה, נגינה, כתוביות או איכות המחשה.</p>'+
 '<div class="peah-links"><a target="_blank" rel="noopener noreferrer" href="https://www.sefaria.org/Mishnah_Beitzah.4?lang=he">ספריא ↗</a> <a target="_blank" rel="noopener noreferrer" href="'+text+'">ויקיטקסט ↗</a> <a target="_blank" rel="noopener noreferrer" href="'+mm+'">מכון ממרא ↗</a> <a target="_blank" rel="noopener noreferrer" href="'+creator+'">שבעת הסרטונים ↗</a> <a target="_blank" rel="noopener noreferrer" href="https://www.mishna.org.il/מועד/ביצה/4">שיעור עברי לפרק שלם ↗</a></div>'+
 '<div class="actions" style="margin:12px 0"><button type="button" class="btn gold" id="beitzah4Continue">▶ המשך ללמוד</button> <span id="beitzah4Progress" class="progressnote" aria-live="polite"></span></div><div class="eruvin-cards">';
 for(const [n,title,explanation,bridge,question] of units){
  const id=videos[n],prev=n===1?"#beitzah-3-8":"#beitzah-4-"+(n-1);
  const next=n===7?"#beitzah-5-1":"#beitzah-4-"+(n+1);
  const video=id?'<button type="button" class="btn gold" data-beitzah4-play="'+id+'" data-n="'+n+'">▶ נגן כאן</button> <a class="btn ghost" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v='+id+'">הסרטון המקורי ↗</a>':'<a class="btn gold" target="_blank" rel="noopener noreferrer" href="https://mishnah.co/moed/beitza/chapter-4/mishnah-'+n+'">▶ סרטון המשנה אצל היוצר ↗</a>';
  html+='<article class="eruvin-card" id="beitzah-4-'+n+'"><span class="eyebrow">ביצה ד׳, '+letters[n]+'</span><h4>'+escapeText(title)+'</h4><p>'+escapeText(explanation)+'</p>'+
   '<p class="eruvin-bridge"><strong>מה ראינו קודם — כיצד הוא מוביל לכאן?</strong> '+escapeText(bridge)+' <strong>השאלה הבאה:</strong> '+escapeText(question)+'</p>'+
   '<p class="eruvin-credit">הסבר עכשווי, לא לשון המשנה ולא שחזור היסטורי · סרטון לפי מטא־נתונים בלבד</p>'+
   '<div class="eruvin-actions">'+video+' <button type="button" class="btn ghost" data-beitzah4-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
   (id?'<div class="eruvin-video" data-beitzah4-host="'+n+'" hidden></div>':'')+
   '<div class="peah-links"><a target="_blank" rel="noopener noreferrer" href="https://www.sefaria.org/Mishnah_Beitzah.4.'+n+'?lang=he">המשנה בספריא ↗</a> <a target="_blank" rel="noopener noreferrer" href="'+text+'">ויקיטקסט ↗</a> <a href="'+prev+'">הקודם</a> <a href="'+next+'"'+(n===7?'':'')+'>הבא</a></div></article>';
 }
 section.innerHTML=html+'</div><p class="smallprint">ההמשך הוא ביצה ה׳, א׳ — המקור נפתח בקישור עד שיהיה שיעור באתר. אין כאן טענה לרצף אירועים או סקירת תורה אנושית.</p>';
 parent.after(section);
 const key="mishnah_cinema_beitzah_ch4_v1";let state={};
 try{const x=JSON.parse(localStorage.getItem(key)||"{}");if(x&&typeof x==="object"&&!Array.isArray(x))state=x;}catch(_){}
 const marks=Array.from(section.querySelectorAll("[data-beitzah4-mark]")),resume=section.querySelector("#beitzah4Continue");
 function update(){let done=0;for(const b of marks){const on=!!state[b.dataset.beitzah4Mark];if(on)done++;b.setAttribute("aria-pressed",String(on));b.textContent=on?"✓ למדתי — בטל":"סמן שלמדתי";}section.querySelector("#beitzah4Progress").textContent=done+" / 7";resume.disabled=done===7;}
 section.addEventListener("click",e=>{
  const button=e.target.closest("button");if(!button||!section.contains(button))return;
  if(button.dataset.beitzah4Mark){const n=button.dataset.beitzah4Mark;state[n]=!state[n];try{localStorage.setItem(key,JSON.stringify(state));}catch(_){}update();return;}
  const id=button.dataset.beitzah4Play,n=button.dataset.n;
  if(!id||videos[n]!==id||!/^[a-zA-Z0-9_-]{11}$/.test(id))return;
  const host=section.querySelector('[data-beitzah4-host="'+n+'"]');if(!host)return;
  section.querySelectorAll("[data-beitzah4-host]").forEach(h=>{h.replaceChildren();h.hidden=true;});
  const f=document.createElement("iframe");f.src="https://www.youtube-nocookie.com/embed/"+id+"?rel=0";f.loading="lazy";f.referrerPolicy="strict-origin-when-cross-origin";
  f.title="ביצה ד׳ משנה "+n+" — The Mishnah Project";f.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";f.allowFullscreen=true;host.appendChild(f);host.hidden=false;button.textContent="↻ טען שוב";
 });
 resume.addEventListener("click",()=>{const u=units.find(x=>!state[x[0]]);if(u)document.getElementById("beitzah-4-"+u[0])?.scrollIntoView({behavior:"smooth",block:"center"});});
 update();
 let hash="";try{hash=decodeURIComponent(location.hash.slice(1));}catch(_){}
 if(/^beitzah(?:Chapter4|-4-[1-7])$/.test(hash)){const el=hash==="beitzahChapter4"?section:document.getElementById(hash);if(el)requestAnimationFrame(()=>el.scrollIntoView({behavior:"auto",block:"start"}));}
})();

/* Chained textual course loader. One small JS fetch; no video preloading. */
(function(){
  if(!document.getElementById("beitzahChapter4")||document.getElementById("beitzahChapter5"))return;
  if(document.querySelector("script[data-mishnah-beitzah5]"))return;
  const s=document.createElement("script");
  s.dataset.mishnahBeitzah5="1";
  const origin=document.currentScript&&document.currentScript.src;
  s.src=origin?new URL("beitzah-ch5.js",origin).href:"./beitzah-ch5.js";
  s.defer=true;
  document.body.appendChild(s);
})();
