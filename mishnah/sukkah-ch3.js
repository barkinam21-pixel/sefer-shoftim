"use strict";
(function(){
 const parent=document.getElementById("sukkahTractate");
 if(!parent||!document.getElementById("sukkahChapter2")||document.getElementById("sukkahChapter3"))return;
 const data=[[1,"לולב גזול, יבש או פגום","גזול, יבש, ראש שנקטם ועלים שנפרצו או נפרדו; ומידת הלולב.","סוכה ב׳ הסתיימה בגשם ובדירת הסוכה; כאן מתחיל פרק ארבעת המינים — מעבר טקסטואלי, לא תאריך.","מה פוסל את ההדס?"],[2,"הדס: ענבים, עלים וראש קטום","ההדס הגזול או היבש, ענביו המרובים מעליו, ומיעוטם לפני יום טוב.","א׳ בדקה את עלי הלולב; ב׳ בוחנת מין שני ואת פירותיו.","איך מבדילים בין ערבה לצפצפה?"],[3,"ערבה מול צפצפה","המשנה פוסלת ערבה פגומה ומבדילה בין צפצפה לערבה כמושה או ערבה שגדלה בשדה.","ב׳ בחנה הדס; ג׳ משלימה בדיקת מין אחר.","כמה ענפים מכל מין לוקחים?"],[4,"רבי ישמעאל, רבי טרפון ורבי עקיבא","מחלוקת על מספר ההדסים והערבות וכשרות הדסים קטומים; אין מקור להצגת כולם בשיחה משותפת.","א׳–ג׳ בדקו מינים נפרדים; ד׳ מצרפת אותם למצווה אחת.","האם מקור האתרוג משנה?"],[5,"אתרוג של ערלה, תרומה ודמאי","המשנה מבחינה בין דיני אתרוג גזול, ערלה, תרומה ודמאי, ובין עמדות בית שמאי ובית הלל.","ד׳ דנה במספר הענפים; ה׳ בודקת את מעמד הפרי הנלקח.","ומה כשבאתרוג יש פגם?"],[6,"חזזית, פיטם ונקב באתרוג","פיטם, חזזית, קילוף, סדק ונקב מחסר או שאינו מחסר; מחלוקת על מראה ירוק.","ה׳ בחנה את מקור הפרי; ו׳ את שלמותו.","כמה גדול או קטן יכול האתרוג להיות?"],[7,"אתרוג כאגוז או כביצה","רבי מאיר ורבי יהודה נחלקים בגודל הקטן; רבי יהודה ורבי יוסי בגדול.","ו׳ בדקה פגמים; ז׳ דנה במידות.","באיזה חומר אוגדים את הלולב?"],[8,"אגודת הלולב וחוטי הזהב בירושלים","רבי יהודה דורש אגידה במינו ורבי מאיר מתיר במשיחה; מסורת על קישוטי זהב של אנשי ירושלים.","ז׳ בדקה את הגודל; ח׳ את אופן אגידת המינים.","מתי מנענעים בעת ההלל?"],[9,"נענוע הלולב בהלל","מחלוקת בתי הלל ושמאי בפסוקי הנענוע, ועדות רבי עקיבא על רבן גמליאל ורבי יהושע.","ח׳ תיארה את האגידה; ט׳ את השימוש בלולב בתפילה.","איך עונים למי שמקריא הלל?"],[10,"מקריא ההלל והשומע","המשנה קובעת כיצד השומע משיב למקריא את ההלל, לפי מעמד חיובו של המקריא.","ט׳ עסקה בפסוקי ההלל; י׳ באופן אמירתם בקול.","אילו מנהגים משתנים ממקום למקום?"],[11,"מנהגי הלל ואתרוג בשביעית","כפילת פסוקים וברכה אחר ההלל לפי מנהג המקום, וקניית אתרוג בשביעית.","י׳ דיברה על המקריא; י״א על מנהג המקום ועל מסחר.","מה השתנה לאחר החורבן?"],[12,"תקנת רבן יוחנן בן זכאי","נטילת לולב במדינה שבעה ימים זכר למקדש ותקנת יום הנף; החורבן נזכר במפורש במשנה.","י״א הציגה מנהגים; י״ב מציגה תקנה היסטורית מפורשת.","איך מתכוננים לנטילת לולב בשבת?"],[13,"כל אדם והלולב שלו","כשהיום הראשון חל בשבת הביאו לולבים לבית הכנסת, וכל אדם זיהה את שלו.","י״ב הסבירה זכר למקדש; י״ג עוסקת בבעלות ונטילה ביום הראשון.","ומה הדין אם הוציא את הלולב בשבת בשוגג?"],[14,"הוציא את הלולב בשוגג","רבי יוסי דן בפטור של מי ששכח והוציא לרשות הרבים ביום טוב ראשון שחל בשבת.","י״ג תיארה את נטילת הלולב בשבת; י״ד בודקת שגגה.","האם מותר להחזיר את הלולב למים?"],[15,"החזרת הלולב למים וחינוך קטן","אישה מחזירה לולב למים, רבי יהודה מבחין בין ימי החג, וקטן היודע לנענע חייב בלולב.","י״ד דנה בשגגה; ט״ו מסיימת בהלכות הבית וחינוך הילד.","סוכה ד׳ ממשיכה את מנהגי הלולב והערבה."]], videos={"1":"cDxPoBPhV2Y","4":"mCyoC_KnTio","6":"NwNzxsz0NkY","7":"MLn2oQChdz4","15":"djgxVLpW-Ro"};
 const esc=x=>String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const letters=["","א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ז׳","ח׳","ט׳","י׳","י״א","י״ב","י״ג","י״ד","ט״ו"];
 const section=document.createElement("section");section.id="sukkahChapter3";section.setAttribute("aria-labelledby","sukkah3Heading");
 let html='<div class="study-divider">סוכה ג׳ — לימוד המשנה לפי הסדר<small>15 משניות לפי ספריא והפרק היומי, ללא ערבוב עם המסלול ההיסטורי</small></div>'+
 '<h4 id="sukkah3Heading">ארבעת המינים, הלל וזכר למקדש</h4>'+
 '<p class="smallprint">ספריא והפרק היומי מונים בפרק 15 משניות; מכון ממרא מאחד יחידות ומונה 12. כאן המספור לפי ספריא. חמישה סרטונים פרטניים זוהו ב־YouTube על פי כותרת ומזהה, לא בצפייה; בשאר המשניות מפנים רק לשיעור העברי המלא של הפרק. ניגון, כתוביות ומשך לא נבדקו.</p>'+
 '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Sukkah.3" target="_blank" rel="noopener noreferrer">📜 המקור בספריא ↗</a><a href="https://mechon-mamre.org/b/h/h26.htm" target="_blank" rel="noopener noreferrer">מכון ממרא ↗</a><a href="https://www.mishna.org.il/מועד/סוכה/3" target="_blank" rel="noopener noreferrer">▶ שיעור הפרק בעברית ↗</a></div>'+
 '<div class="actions" style="margin:12px 0"><button id="sukkah3Continue" type="button" class="btn gold">▶ המשך ללמוד</button> <span id="sukkah3Progress" class="progressnote" aria-live="polite"></span></div><div class="eruvin-cards">';
 for(const [n,title,focus,bridge,question] of data){
  const id=videos[n],prev=n===1?"#sukkah-2-9":"#sukkah-3-"+(n-1),next=n===15?"#sukkah-4-1":"#sukkah-3-"+(n+1);
  html+='<article class="eruvin-card" id="sukkah-3-'+n+'"><span class="eyebrow">סוכה ג׳, '+letters[n]+'</span><h4>'+esc(title)+'</h4><p>'+esc(focus)+'</p>'+
  '<p class="eruvin-bridge"><strong>מה ראינו קודם — מדוע זה מוביל לזה?</strong> '+esc(bridge)+' <strong>השאלה הבאה:</strong> '+esc(question)+'</p>'+
  '<p class="eruvin-credit">'+(id?"The Mishnah Project · סרטון פרטני באנגלית, מזהה מאומת במטא־נתונים בלבד":"אין סרטון פרטני מאומת; צפייה בשיעור העברי של הפרק כולו")+'</p>'+
  '<div class="eruvin-actions">'+(id?'<button class="btn gold" type="button" data-sukkah3-play="'+id+'" data-n="'+n+'">▶ נגן כאן</button><a class="btn ghost" href="https://www.youtube.com/watch?v='+id+'" target="_blank" rel="noopener noreferrer">הווידאו המקורי ↗</a>':
  '<a class="btn gold" href="https://www.mishna.org.il/מועד/סוכה/3" target="_blank" rel="noopener noreferrer">▶ שיעור הפרק השלם ↗</a>')+
  '<button class="btn ghost" type="button" data-sukkah3-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
  (id?'<div class="eruvin-video" data-sukkah3-host="'+n+'" hidden></div>':'')+
  '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Sukkah.3.'+n+'?lang=he" target="_blank" rel="noopener noreferrer">📜 המשנה בספריא ↗</a><a href="https://mechon-mamre.org/b/h/h26.htm" target="_blank" rel="noopener noreferrer">מכון ממרא ↗</a><a href="'+prev+'">הקודם</a><a href="'+next+'"'+''+'>הבא</a></div></article>';
 }
 section.innerHTML=html+'</div><p class="smallprint">ההסברים בני זמננו; העדויות על התנאים הן מתוך המשנה ואין להמציא מפגשים שלא תועדו.</p>';
 parent.appendChild(section);
 const key="mishnah_cinema_sukkah_ch3_v1";
 let state={};try{const x=JSON.parse(localStorage.getItem(key)||"{}");if(x&&!Array.isArray(x)&&typeof x==="object")state=x;}catch(_){}
 const marks=Array.from(section.querySelectorAll("[data-sukkah3-mark]"));
 function redraw(){let count=0;for(const b of marks){const on=!!state[b.dataset.sukkah3Mark];if(on)count++;b.setAttribute("aria-pressed",String(on));b.textContent=on?"✓ למדתי — בטל":"סמן שלמדתי";}section.querySelector("#sukkah3Progress").textContent=count+" / 15";section.querySelector("#sukkah3Continue").disabled=count===15;}
 section.addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b||!section.contains(b))return;
  if(b.dataset.sukkah3Mark){const n=b.dataset.sukkah3Mark;state[n]=!state[n];try{localStorage.setItem(key,JSON.stringify(state));}catch(_){}redraw();return;}
  if(!b.dataset.sukkah3Play)return;
  const id=b.dataset.sukkah3Play,n=b.dataset.n;if(videos[n]!==id||!/^[\w-]{11}$/.test(id))return;
  const host=section.querySelector('[data-sukkah3-host="'+n+'"]');if(!host)return;
  section.querySelectorAll("[data-sukkah3-host]").forEach(h=>{h.replaceChildren();h.hidden=true;});
  const f=document.createElement("iframe");f.src="https://www.youtube-nocookie.com/embed/"+id+"?rel=0";f.loading="lazy";f.title="סוכה ג׳ משנה "+n+" — The Mishnah Project";f.referrerPolicy="strict-origin-when-cross-origin";f.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";f.allowFullscreen=true;
  host.appendChild(f);host.hidden=false;b.textContent="↻ טען שוב";
 });
 section.querySelector("#sukkah3Continue").addEventListener("click",()=>{const u=data.find(x=>!state[x[0]]);if(u)document.getElementById("sukkah-3-"+u[0]).scrollIntoView({behavior:"smooth",block:"center"});});
 redraw();
 let hash="";try{hash=decodeURIComponent(location.hash.slice(1));}catch(_){}
 if(/^sukkah(?:Chapter3|-3-(?:[1-9]|1[0-5]))$/.test(hash)){const a=hash==="sukkahChapter3"?section:document.getElementById(hash);if(a)requestAnimationFrame(()=>a.scrollIntoView({behavior:"auto",block:"start"}));}
})();

// Mount the next textual chapter once chapter 3 is in the DOM.
(()=>{const s=document.createElement("script");s.src="./sukkah-ch4.js";document.body.appendChild(s);})();
