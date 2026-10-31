"use strict";
(function(){
 const parent=document.getElementById("sukkahTractate");
 if(!parent||!document.getElementById("sukkahChapter4")||document.getElementById("sukkah-4-10")||document.getElementById("sukkahChapter5"))return;
 // Order follows Sefaria and HaPerek HaYomi, not the chronology of Jewish history.
 const units=[
 [1,"החליל ושמחת בית השואבה","החליל של בית השואבה נוהג חמישה או שישה ימים ואינו דוחה שבת או יום טוב. המשנה מדגישה את עוצמת השמחה.","סוכה ד׳, י׳ תיארה כיצד הכינו את המים לניסוך בשבת; כעת עוברים לשמחה שליוותה את שאיבת המים — מצווה וטקס קרובים, לא אותו מעשה.","איך האירו את עזרת הנשים לחגיגה?"],
 [2,"מנורות הזהב בעזרת הנשים","במוצאי יום טוב ראשון ירדו לעזרת הנשים ל'תיקון גדול'. המשנה מתארת מנורות זהב, ארבעה ספלים לכל מנורה, סולמות ופרחי כהונה שנשאו כדי שמן.","א׳ תיארה שמחה יוצאת דופן; ב׳ מתחילה לפרט איך הוכשר המרחב לחגיגה. פירוש 'תיקון גדול' דורש פרשנות, ולא נוסיף לו תיאור שלא נאמר במשנה.","במה השתמשו כפתילות לאור הרב?"],
 [3,"מבגדי כהונה ישנים אל האור","מבלויי מכנסי הכוהנים ומאבנטיהם הכינו פתילות למנורות; המשנה מתארת אור שהאיר את חצרות ירושלים.","ב׳ הציגה את הספלים ומילוי השמן; ג׳ משלימה כיצד דלקו המנורות. תיאור כל חצרות ירושלים הוא לשון המשנה, לא מדידת תאורה ארכאולוגית.","מי רקדו וניגנו בחגיגה?"],
 [4,"ריקוד, לויים וחמש עשרה מדרגות","חסידים ואנשי מעשה רקדו באבוקות; לויים ניגנו ושרו על חמש עשרה המעלות; הכוהנים תקעו והתקדמו עד שער המזרח. המשנה מביאה גם חילוף נוסח בשם רבי יהודה.","ג׳ עסקה באור שהאיר את החגיגה; ד׳ מציגה את המשתתפים, השירה והתנועה במרחב. התיאור במשנה הוא מקור תנאי; המחשה חזותית תהיה שחזור בלבד.","כמה תקיעות נשמעו במקדש בימים שונים?"],
 [5,"מ־21 עד 48 תקיעות","המשנה מונה 21 תקיעות ביום רגיל ועד 48 בערב שבת שבתוך חג הסוכות, ומפרטת תקיעות לשערים, לקרבנות, למילוי המים ולהכנה לשבת.","ד׳ תיארה את הכוהנים התוקעים במסלול החגיגה; ה׳ עוצרת כדי למנות ולארגן את התקיעות לפי הזמנים והמעמדים.","כיצד התחלקה עבודת הקרבנות בין משמרות הכוהנים?"],
 [6,"הקרבנות ומשמרות הכהונה","ביום הראשון הקריבו שלושה עשר פרים, שני אילים, שעיר וארבעה עשר כבשים; המשנה מסבירה כיצד השתנתה חלוקת העבודה בין המשמרות בימי החג ובשמיני עצרת.","ה׳ סידרה את קולות המקדש; ו׳ עוברת למערכת אחרת בעבודתו — חלוקת הקרבנות. זה מעבר נושאי, לא קשר סיבתי בין התקיעות למספר הפרים.","באילו חלקים כל משמרות הכוהנים היו שוות ברגלים?"],
 [7,"שוויון המשמרות ברגלים","ברגלים היו כל המשמרות שוות באימורי הרגלים ובחלוקת לחם הפנים. המשנה מזכירה גם את שתי הלחם של חג השבועות — דוגמה מחג אחר, לא אירוע של סוכות.","ו׳ תיארה סדר תורנות מפורט של הקרבת הקרבנות; ז׳ מבהירה אילו זכויות התחלקו בשווה ברגלים ואילו נשארו בידי המשמר הקבוע.","כיצד חילקו את לחם הפנים כשהחג סמוך לשבת?"],
 [8,"לחם הפנים ומשמרת בילגה","כאשר יום אחד הפסיק בין הרגל לשבת, המשמר הקבוע נטל עשר חלות והמתעכב שתיים; בדרך כלל הנכנס והיוצא חלקו שש ושש, ורבי יהודה אמר שבע וחמש. המשנה מזכירה גם את הגבלות משמר בילגה, בלי לספר מדוע הוטלו.","ז׳ קבעה את עקרון השוויון בחלוקת לחם הפנים ברגל; ח׳ מפרטת חלוקה במועדים הסמוכים לשבת ומסיימת בפרט על משמר בילגה.","ההמשך הטקסטואלי הוא מסכת ביצה א׳, א׳; התולדות ההיסטוריות נלמדות במסלול אחר."]
 ];
 const esc=x=>String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const letters=["","א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ז׳","ח׳"];
 const fullChapter="https://www.mishna.org.il/מועד/סוכה/5";
 const videoIds={8:"CyHsIdX8CJY"}; // Youtube verified by title and publisher metadata, playback not verified.
 const section=document.createElement("section");section.id="sukkahChapter5";section.setAttribute("aria-labelledby","sukkah5Heading");
 let html='<div class="study-divider">סוכה ה׳ — לימוד המשנה לפי הסדר<small>8 משניות לפי ספריא והפרק היומי; המסלול ההיסטורי נפרד</small></div>'+
 '<h4 id="sukkah5Heading">שמחת בית השואבה, תקיעות המקדש ומשמרות הכהונה</h4>'+
 '<p class="smallprint">המספור כאן: שמונה משניות לפי ספריא והפרק היומי. מכון ממרא מאחד את ב׳–ד׳ בפסקה אחת ומונה שש פסקאות; סימני [ג]–[ח] משמרים את חלוקת השמונה. הטקסט המקורי, ההסבר העכשווי והמחשה היסטורית אינם אותו סוג מקור.</p>'+
 '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Sukkah.5" target="_blank" rel="noopener noreferrer">📜 טקסט בספריא ↗</a><a href="https://mechon-mamre.org/b/h/h26.htm" target="_blank" rel="noopener noreferrer">נוסח מכון ממרא ↗</a><a href="'+fullChapter+'" target="_blank" rel="noopener noreferrer">▶ שיעור עברי של כל הפרק ↗</a></div>'+
 '<p class="smallprint">למשנה ח׳ אותר סרטון ייעודי באנגלית של The Mishnah Project במזהה YouTube מאומת בכותרת ובפרטי המפרסם בלבד. לשאר שבע המשניות ניתנת גישה לשיעור עברי אחד של הפרק השלם, ולא שבעה סרטונים. ניגון, כתוביות ומשך טרם נבדקו בצפייה.</p>'+
 '<div class="actions" style="margin:12px 0"><button id="sukkah5Continue" type="button" class="btn gold">▶ המשך ללמוד</button> <span id="sukkah5Progress" class="progressnote" aria-live="polite"></span></div><div class="eruvin-cards">';
 for(const [n,title,focus,bridge,question] of units){
  const id=videoIds[n],prev=n===1?"#sukkah-4-10":"#sukkah-5-"+(n-1),next=n===8?"https://www.sefaria.org/Mishnah_Beitzah.1.1?lang=he":"#sukkah-5-"+(n+1);
  let actions=id?'<button type="button" class="btn gold" data-sukkah5-play="'+id+'" data-n="'+n+'">▶ נגן באתר</button><a class="btn ghost" href="https://www.youtube.com/watch?v='+id+'" target="_blank" rel="noopener noreferrer">הסרטון המקורי ↗</a>':'<a class="btn gold" href="'+fullChapter+'" target="_blank" rel="noopener noreferrer">▶ שיעור הפרק השלם ↗</a>';
  html+='<article class="eruvin-card" id="sukkah-5-'+n+'"><span class="eyebrow">סוכה ה׳, '+letters[n]+'</span><h4>'+esc(title)+'</h4><p>'+esc(focus)+'</p>'+
   '<p class="eruvin-bridge"><strong>מה ראינו קודם — למה כאן?</strong> '+esc(bridge)+' <strong>מה נלמד אחר כך?</strong> '+esc(question)+'</p>'+
   '<p class="eruvin-credit">'+(id?'The Mishnah Project · סרטון יחידה באנגלית, זוהה במטא־נתונים בלבד':'הפרק היומי · שיעור וידאו עברי לפרק השלם (לא סרטון ליחידה זו)')+'</p>'+
   '<div class="eruvin-actions">'+actions+'<button type="button" class="btn ghost" data-sukkah5-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
   (id?'<div class="eruvin-video" data-sukkah5-host="'+n+'" hidden></div>':'')+
   '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Sukkah.5.'+n+'?lang=he" target="_blank" rel="noopener noreferrer">📜 המשנה בספריא ↗</a><a href="https://mechon-mamre.org/b/h/h26.htm" target="_blank" rel="noopener noreferrer">מכון ממרא ↗</a><a href="'+prev+'">הקודם</a><a href="'+next+'"'+(n===8?' target="_blank" rel="noopener noreferrer"':'')+'>הבא</a></div></article>';
 }
 section.innerHTML=html+'</div><p class="smallprint">המסלול הטקסטואלי ממשיך לפי סדר המסכתות אל מסכת ביצה. קטעי לימוד מאוחרים ודיונים תלמודיים אינם חלק מנוסח המשנה. הסרטונים משובצים ממקורות חיצוניים ללא העתקה; הזכויות שייכות לבעליהם.</p>';
 parent.appendChild(section);
 const key="mishnah_cinema_sukkah_ch5_v1";let state={};
 try{const old=JSON.parse(localStorage.getItem(key)||"{}");if(old&&typeof old==="object"&&!Array.isArray(old))state=old;}catch(_){}
 const marks=Array.from(section.querySelectorAll("[data-sukkah5-mark]"));
 function redraw(){let count=0;for(const b of marks){const done=!!state[b.dataset.sukkah5Mark];if(done)count++;b.setAttribute("aria-pressed",String(done));b.textContent=done?"✓ למדתי — בטל":"סמן שלמדתי";}section.querySelector("#sukkah5Progress").textContent=count+" / 8";section.querySelector("#sukkah5Continue").disabled=count===8;}
 section.addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b||!section.contains(b))return;
  if(b.dataset.sukkah5Mark){const n=b.dataset.sukkah5Mark;state[n]=!state[n];try{localStorage.setItem(key,JSON.stringify(state));}catch(_){}redraw();return;}
  const id=b.dataset.sukkah5Play,n=b.dataset.n;if(!id||videoIds[n]!==id||!/^[\w-]{11}$/.test(id))return;
  const host=section.querySelector('[data-sukkah5-host="'+n+'"]');if(!host)return;
  section.querySelectorAll("[data-sukkah5-host]").forEach(h=>{h.replaceChildren();h.hidden=true;});
  const f=document.createElement("iframe");f.src="https://www.youtube-nocookie.com/embed/"+id+"?rel=0";f.loading="lazy";f.title="סוכה ה׳ משנה "+n+" — The Mishnah Project";f.referrerPolicy="strict-origin-when-cross-origin";f.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";f.allowFullscreen=true;host.appendChild(f);host.hidden=false;b.textContent="↻ טען שוב";
 });
 section.querySelector("#sukkah5Continue").addEventListener("click",()=>{const u=units.find(x=>!state[x[0]]);if(u)document.getElementById("sukkah-5-"+u[0])?.scrollIntoView({behavior:"smooth",block:"center"});});
 redraw();
 let hash="";try{hash=decodeURIComponent(location.hash.slice(1));}catch(_){}
 if(/^sukkah(?:Chapter5|-5-[1-8])$/.test(hash)){const anchor=hash==="sukkahChapter5"?section:document.getElementById(hash);if(anchor)requestAnimationFrame(()=>anchor.scrollIntoView({behavior:"auto",block:"start"}));}
})();
