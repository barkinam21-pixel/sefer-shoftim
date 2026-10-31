"use strict";
(function(){
 const previous=document.getElementById("sukkah-5-8"),sukkah=document.getElementById("sukkahTractate");
 if(!previous||!sukkah||document.getElementById("beitzahTractate"))return;
 const lessons=[[1,"ביצה שנולדה ביום טוב ושיעור חמץ","בית שמאי מתירים ביצה שנולדה ביום טוב ובית הלל אוסרים. באותה משנה מופיעה מחלוקת אחרת על שיעורי שאור וחמץ; אין לטעון שהן אירוע אחד.","מסוכה ה׳, ח׳ עוברים למסכת הבאה בסדר המשנה, לא לתקופה היסטורית חדשה. שאלה ראשונה: מה דינו של דבר שנוצר בחג?","איך מכסים את דמו של עוף שנשחט ביום טוב?"],[2,"כיסוי הדם ועפר מוכן","בית שמאי מתירים לשחוט ולכסות בדקר; בית הלל דורשים עפר מוכן. המשנה מוסיפה את הדין אם כבר שחט ואת אפר הכירה. ויקיטקסט כותב כאן במפורש 'מבעוד יום', בשונה ממכון ממרא.","א׳ עסקה בביצה שנולדה בחג; ב׳ עוברת להכנת עפר לכיסוי הדם. אלה שאלות הכנה שונות.","איך מייחדים מראש גוזלים משובך?"],[3,"סולם השובך וזימון גוזלים","בית שמאי ובית הלל נחלקים בטלטול הסולם ובדרך לייחד גוזלים לפני יום טוב. אין כאן תיאור מתועד של מפגש משותף בין הדוברים.","ב׳ בחנה הכנת עפר לשחיטה; ג׳ עוברת להכנת העופות ולגישה אליהם.","ומה הדין אם נמצאו גוזלים שונים מאלו שיועדו?"],[4,"זימן גוזלים ומצא אחרים","המשנה מבחינה בין צבעי העופות, מספרם ומיקומם ומבררת מתי העופות שנמצאו עדיין מותרים.","ג׳ הסבירה את הזימון; ד׳ בוחנת אם מה שנמצא תואם את מה שהוכן.","מה מותר לעשות בכלי העבודה סביב סעודת החג?"],[5,"תריסים, עלי, עור והוצאה","ארבע מחלוקות נפרדות: תריסים, עלי לקיצוץ בשר, עור, והוצאה לרשות הרבים של קטן, לולב וספר תורה. אין כאן סיפור רציף אחד.","ד׳ עסקה בהכנת עופות; ה׳ מרחיבה לפעולות וכלים אחרים לצורכי יום טוב — מעבר נושאי.","אפשר להוליך מתנות לכוהן ביום טוב?"],[6,"חלה ומתנות כהונה לעומת תרומה","בית שמאי אוסרים להוליך חלה ומתנות לכוהן ביום טוב ובית הלל מתירים. המשנה מוסרת טיעונים על ההבדל בין מתנות אלה לתרומה.","ה׳ ביררה הוצאה ותנועה של חפצים; ו׳ בוחנת הולכת מתנות לכהן, בלי להניח קשר סיבתי.","כיצד דכים תבלינים ומלח לקראת סעודה?"],[7,"דיכת תבלינים ומלח","בית שמאי ובית הלל מבחינים בין תבלינים למלח ובין מדוך עץ, מדוך אבן ופך.","ו׳ עסקה במתנות כהונה; ז׳ פותחת נושא מטבחי אחר: הכנת טעם המזון.","אחרי הכתישה כיצד בוררים קטניות?"],[8,"ברירת קטניות","המשנה מבחינה בין ברירה בחיק ובתמחוי לבין טבלה, נפה וכברה. רבן גמליאל מציע גם הדחה ושלייה.","ז׳ דנה בכלי כתישה; ח׳ עוברת לכלי ברירה ולהפרדת האוכל מן הפסולת.","מה אפשר לשלוח מן המטבח לאדם אחר בחג?"],[9,"שליחת מנות ומאכלים","בתי שמאי והלל נחלקים בעניין משלוח מנות ובעלי חיים. המשנה מונה יין, שמן, סולת וקטניות; רבי שמעון מתיר גם תבואה.","ח׳ עסקה בהכנת המזון בבית; ט׳ במשלוח מזון לאחרים — קשר נושאי ולא שחזור אירוע.","האם מותר לשלוח גם כלים ובגדים?"],[10,"בגדים וכלים שנשלחים ביום טוב","המשנה מתירה משלוח כלים הראויים לשימוש בחג עם הגבלות על סנדל מסומר ומנעל שאינו תפור. רבי יהודה מוסיף הגבלה למנעל לבן הזקוק לאומן.","ט׳ עסקה במשלוח מזון; י׳ עוברת למתנות שאינן מאכלים ולכלל השימוש ביום טוב.","ביצה ב׳, א׳ — מה עושים כשיום טוב חל בערב שבת?"]];
 const videoIds={1:"ITEfUvfW9r8",2:"-LLBq_aHREw"};
 const catalog="https://www.torahsecrets.co.uk/playlist/masechet-beitzah/";
 const chapterLesson="https://www.mishna.org.il/מועד/ביצה/1";
 const esc=x=>String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const letters=["","א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ז׳","ח׳","ט׳","י׳"];
 const el=document.createElement("section");el.id="beitzahTractate";el.className="next-tractate";el.setAttribute("aria-labelledby","beitzahHeading");
 let html='<span class="eyebrow">סדר מועד · המסלול הטקסטואלי הנפרד</span><h3 id="beitzahHeading">מסכת ביצה — פרק א׳: החג בבית ובמטבח</h3>'+
 '<p>אחרי סוכה ה׳, ח׳, ממשיכים אל ביצה א׳, א׳ — סדר המשניות ולא רצף כרונולוגי בתולדות ישראל.</p>'+
 '<section id="beitzahChapter1"><div class="study-divider">ביצה א׳ · עשר משניות<small>מקור, רעיון מרכזי, מעבר, סרטון והתקדמות</small></div>'+
 '<p class="smallprint">נוסח המשנה הושווה במכון ממרא ובוויקיטקסט; מספור עשר המשניות תואם גם את ספריא. א׳, ב׳: ויקיטקסט כולל "מבעוד יום" לאחר "עפר מוכן", ומכון ממרא אינו כולל מילים אלו. ההסברים כאן אינם ציטוטי המקור, פסיקה או סצנות מומחזות.</p>'+
 '<p class="smallprint">רק שני סרטוני YouTube באנגלית של The Mishnah Project למשניות א׳–ב׳ אומתו לפי כותרת ומפרסם; בשמונה הנותרות קיימות רשומות בקטלוג, ולא נגן מאומת. לא אומתו צפייה, איכות חזותית, ניגון, כתוביות או אורך בפועל.</p>'+
 '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Beitzah.1?lang=he" target="_blank" rel="noopener noreferrer">ספריא ↗</a>'+
 '<a href="https://mechon-mamre.org/b/h/h27.htm" target="_blank" rel="noopener noreferrer">מכון ממרא ↗</a>'+
 '<a href="https://he.wikisource.org/wiki/משנה_ביצה_א" target="_blank" rel="noopener noreferrer">ויקיטקסט ↗</a>'+
 '<a href="'+catalog+'" target="_blank" rel="noopener noreferrer">קטלוג 10 סרטונים ↗</a>'+
 '<a href="'+chapterLesson+'" target="_blank" rel="noopener noreferrer">שיעור עברי לפרק השלם ↗</a></div>'+
 '<div class="actions" style="margin:12px 0"><button type="button" class="btn gold" id="beitzah1Continue">▶ המשך ללמוד</button> <span id="beitzah1Progress" class="progressnote" aria-live="polite"></span></div><div class="eruvin-cards">';
 for(const [n,title,focus,bridge,question] of lessons){
   const video=videoIds[n],prev=n===1?"#sukkah-5-8":"#beitzah-1-"+(n-1);
   const next=n===10?"https://www.sefaria.org/Mishnah_Beitzah.2.1?lang=he":"#beitzah-1-"+(n+1);
   const watch=video?'<button type="button" class="btn gold" data-beitzah1-play="'+video+'" data-n="'+n+'">▶ נגן באתר</button> <a class="btn ghost" href="https://www.youtube.com/watch?v='+video+'" target="_blank" rel="noopener noreferrer">הסרטון המקורי ↗</a>':
     '<a class="btn gold" href="'+catalog+'" target="_blank" rel="noopener noreferrer">רשומת סרטון בקטלוג ↗</a>';
   html+='<article class="eruvin-card" id="beitzah-1-'+n+'"><span class="eyebrow">ביצה א׳, '+letters[n]+'</span><h4>'+esc(title)+'</h4>'+
     '<p>'+esc(focus)+'</p><p class="eruvin-bridge"><strong>מה ראינו קודם — מדוע זה מוביל לזה?</strong> '+esc(bridge)+
     ' <strong>השאלה הבאה:</strong> '+esc(question)+'</p><p class="eruvin-credit">'+(video?'The Mishnah Project · סרטון במטא־נתונים בלבד':'The Mishnah Project · רישום בקטלוג בלבד')+'</p>'+
     '<div class="eruvin-actions">'+watch+'<button type="button" class="btn ghost" data-beitzah1-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
     (video?'<div class="eruvin-video" data-beitzah1-host="'+n+'" hidden></div>':'')+
     '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Beitzah.1.'+n+'?lang=he" target="_blank" rel="noopener noreferrer">המשנה בספריא ↗</a>'+
     '<a href="https://mechon-mamre.org/b/h/h27.htm" target="_blank" rel="noopener noreferrer">מכון ממרא ↗</a><a href="'+prev+'">הקודם</a>'+
     '<a href="'+next+'"'+(n===10?' target="_blank" rel="noopener noreferrer"':'')+'>הבא</a></div></article>';
 }
 el.innerHTML=html+'</div><p class="smallprint">ההמשך: ביצה ב׳, א׳. הסרטונים מוצגים מנגנים חיצוניים והזכויות נשארות בידי היוצרים.</p></section>';sukkah.after(el);
 const key="mishnah_cinema_beitzah_ch1_v1";let state={};
 try{const x=JSON.parse(localStorage.getItem(key)||"{}");if(x&&typeof x==="object"&&!Array.isArray(x))state=x;}catch(_){}
 const marks=Array.from(el.querySelectorAll("[data-beitzah1-mark]")),continueBtn=el.querySelector("#beitzah1Continue");
 function redraw(){let count=0;for(const b of marks){const on=!!state[b.dataset.beitzah1Mark];if(on)count++;b.setAttribute("aria-pressed",String(on));b.textContent=on?"✓ למדתי — בטל":"סמן שלמדתי";}el.querySelector("#beitzah1Progress").textContent=count+" / 10";continueBtn.disabled=count===10;}
 el.addEventListener("click",e=>{
   const b=e.target.closest("button");if(!b||!el.contains(b))return;
   if(b.dataset.beitzah1Mark){const n=b.dataset.beitzah1Mark;state[n]=!state[n];try{localStorage.setItem(key,JSON.stringify(state));}catch(_){}redraw();return;}
   const id=b.dataset.beitzah1Play,n=b.dataset.n;if(!id||videoIds[n]!==id||!/^[a-zA-Z0-9_-]{11}$/.test(id))return;
   const host=el.querySelector('[data-beitzah1-host="'+n+'"]');if(!host)return;
   el.querySelectorAll("[data-beitzah1-host]").forEach(h=>{h.replaceChildren();h.hidden=true;});
   const f=document.createElement("iframe");f.src="https://www.youtube-nocookie.com/embed/"+id+"?rel=0";f.loading="lazy";f.title="ביצה א׳ משנה "+n;
   f.referrerPolicy="strict-origin-when-cross-origin";f.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";f.allowFullscreen=true;host.appendChild(f);host.hidden=false;b.textContent="↻ טען שוב";
 });
 continueBtn.addEventListener("click",()=>{const u=lessons.find(x=>!state[x[0]]);if(u)document.getElementById("beitzah-1-"+u[0])?.scrollIntoView({behavior:"smooth",block:"center"});});
 redraw();let hash="";try{hash=decodeURIComponent(location.hash.slice(1));}catch(_){}
 if(/^beitzah(?:Chapter1|-1-(?:10|[1-9]))$/.test(hash)){const a=hash==="beitzahChapter1"?el.querySelector("#beitzahChapter1"):document.getElementById(hash);if(a)requestAnimationFrame(()=>a.scrollIntoView({behavior:"auto",block:"start"}));}
})();
