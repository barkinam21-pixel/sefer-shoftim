"use strict";
(function sukkahInit(){
  "use strict";
  const yoma=document.getElementById("yomaTractate");
  if(!yoma||document.getElementById("sukkahTractate"))return;
  // n, title, fact-based summary, bridge from exact prior unit, question for next, video URL, provider, youtube ID, Chabad alternative ID
  const lessons=[
    [1,"כמה גבוהה, כמה דפנות, וכמה צל?","ארבע דרישות יסוד: גובה, דפנות, צל, ושאלת סוכה ישנה; רבי יהודה חולק על גובהה ובית שמאי ובית הלל על הסוכה הישנה.","יומא ח׳ סיים את דיני יום הכיפורים. כעת עוברים למסכת הבאה בסדר המשנה, ולא לשלב מאוחר יותר בתולדות ישראל.","כאשר מעל הסוכה יש עץ או סוכה נוספת, איזה סכך נחשב?", "https://www.youtube.com/watch?v=82-_YiS-ipA","The Mishnah Project","82-_YiS-ipA","7224236"],
    [2,"סוכה תחת עץ — או סוכה על סוכה","סוכה הנמצאת תחת אילן; סוכה על גבי סוכה; רבי יהודה מתייחס למקרה שאין דיורים בעליונה.","משנה א׳ בדקה את הסוכה עצמה; משנה ב׳ בודקת מה מצוי מעל הסכך ומי יושב בשכבה העליונה.","ומה אם כיסינו את הסכך בסדין או תלינו כילה מעל המיטה?","https://mishnah.co/moed/sukkah/chapter-1/mishnah-2","The Mishnah Project","","7224240"],
    [3,"הסדין והכילה: מי באמת מסכך?","סדין מעל הסוכה מפני השמש או תחת הסכך מפני נשירת עלים, וכילה על גבי מיטה; הבחנה בין קינוף לנקליטים.","משנה ב׳ התמקדה בגג שמעל הסוכה; כאן בודקים מה קורה כאשר מוסיפים שכבת בד מעל או מתחת לסכך.","אם בד עשוי לפסול, אילו צמחים אפשר להפוך לסכך כשר?","https://www.chabad.org/multimedia/video_cdo/aid/7224242/jewish/Sukkah-Perek-1-Mishnah-3.htm","Chabad.org — סדרת המחשה למתחילים","","7224242"],
    [4,"גפן, דלעת וקיסוס — מהו סכך כשר?","סכך שנעשה מענפים מחוברים לעומת ענפים שנקצצו; הכלל: גידולי קרקע שאינם מקבלים טומאה.","משנה ג׳ פסלה כיסוי בד; כעת מנסחים מה כן יכול לשמש כסכך, וגם מתי ענפים חיים אינם מועילים.","אפילו בענפים כשרים, מדוע צרורות קש ועצים עשויים להיפסל?","https://www.chabad.org/multimedia/video_cdo/aid/7224244/jewish/Sukkah-Perek-1-Mishnah-4.htm","Chabad.org — סדרת המחשה למתחילים","","7224244"],
    [5,"חבילות קש ועצים: למה צריך להתיר אותן?","אין מסככים בחבילות קש, עצים או זרדים כשהן קשורות; לאחר התרתן הן כשרות, והחומרים עצמם יכולים לשמש לדפנות.","משנה ד׳ קבעה כללים לחומר הסכך; משנה ה׳ מוסיפה שהאופן שבו מניחים אותו חשוב לא פחות.","מה הדין בלוחות עץ רחבים המשמשים לקירוי?","https://mishnah.co/moed/sukkah/chapter-1/mishnah-5","The Mishnah Project","","7224245"],
    [6,"נסרים וגג עץ: רבי יהודה מול רבי מאיר","רבי יהודה מתיר לסכך בנסרים ורבי מאיר אוסר; תחת נסר שרוחבו ארבעה טפחים אין לישון אף כשהסוכה כשרה.","אחרי חבילות הענפים במשנה ה׳ אנו בוחנים עץ שכבר עובד לקורות רחבות.","ואם הגג המקורי עצמו מורכב מנסרים, האם אפשר להסב אותו לסוכה?","https://mishnah.co/moed/sukkah/chapter-1/mishnah-6","The Mishnah Project","","7224249"],
    [7,"להפוך תקרת נסרים לסכך","רבי יהודה בשם בית הלל, בית שמאי ורבי מאיר נחלקים אם אפשר להכשיר תקרה חסרת מעזיבה באמצעות פקפוק הנסרים או הוצאת נסר.","משנה ו׳ דנה בנסר בודד; כאן בודקים את כל הגג הקיים ומה צריך לשנות בו.","מה קורה כשהקורות אינן כשרות כלל ומשאירים ביניהן רווחים?","https://mishnah.co/index.php/moed/sukkah/chapter-1/mishnah-7","The Mishnah Project","","7279657"],
    [8,"שיפודים, חלקי מיטה וגדיש שחת","סיכוך בשיפודים או בארוכות מיטה עם רווחים מתאימים; החופר חלל בתוך גדיש אינו יוצר בכך סוכה.","משנה ז׳ עסקה בהתאמת תקרה ישנה; משנה ח׳ משווה בין החלפת חלקי גג לבין חפירת חלל בלי בניית סוכה.","כעת, אחרי הגג, כמה רחוק מותר לדופן להיות מן הקרקע ומן הסכך?","https://www.chabad.org/multimedia/video_cdo/aid/7279658/jewish/Sukkah-Perek-1-Mishnah-8.htm","Chabad.org — סדרת המחשה למתחילים","","7279658"],
    [9,"דפנות תלויות והמרחק מן הסכך","דפנות היורדות מלמעלה או עולות מלמטה, שיטת רבי יוסי, והמרחק בין הסכך לדפנות.","אחרי שימוש בחללים וברווחים בסכך במשנה ח׳ אנו מודדים את המרווחים שבין הקירות, הקרקע והגג.","אם הגג נפחת ונשאר פס של תקרה ישנה סמוך לקיר, עד כמה הוא נחשב חלק מהסוכה?","https://www.youtube.com/watch?v=ExEcG7QsnFY","The Mishnah Project","ExEcG7QsnFY","7279660"],
    [10,"דופן עקומה: כשהסכך הכשר רחוק מן הקיר","בית שנפחת, חצר מוקפת אכסדרה וסוכה המוקפת בחומר שאינו ראוי לסיכוך — מקרים של מרחק ארבע אמות.","משנה ט׳ מדדה מרחק ישיר בין סכך לדופן; משנה י׳ מציגה פס של תקרה פסולה המפריד בין הסכך הכשר לקיר.","ואם אין גג שטוח כלל, אלא דפנות משופעות, האם זו סוכה?","https://www.youtube.com/watch?v=yWP4pNYb9Gs","The Mishnah Project","yWP4pNYb9Gs","7407770"],
    [11,"סוכת צריף ומחצלת הקנים","רבי אליעזר וחכמים חולקים בסוכה שגגה משופע; מחצלת קנים משתנה בדינה לפי ייעודה לשכיבה או לסיכוך.","משנה י׳ הציגה פס סכך פסול לצד הקיר; כעת נשאל מה בכלל נחשב גג, והאם ייעוד מחצלת קובע את כשרותה.","בפרק ב׳ עוברים מן המבנה עצמו אל החיים בתוכו — למשל שינה תחת מיטה.","https://www.chabad.org/multimedia/video_cdo/aid/7407771/jewish/Sukkah-Perek-1-Mishnah-11.htm","Chabad.org — סדרת המחשה למתחילים","","7407771"]
  ];
  const section=document.createElement("section");
  section.id="sukkahTractate";
  section.className="next-tractate";
  section.setAttribute("aria-labelledby","sukkahHeading");
  const chabadVideo=(id,n)=>"https://www.chabad.org/multimedia/video_cdo/aid/"+id+"/jewish/Sukkah-Perek-1-Mishnah-"+n+".htm";
  const escape=(s)=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  let html='<span class="eyebrow">סדר מועד · המסכת השישית · מסלול לימוד המשנה, לא כרונולוגיה היסטורית</span>'+
   '<h3 id="sukkahHeading">מסכת סוכה — פרק א׳: כל 11 המשניות בווידאו</h3>'+
   '<p>אחרי יומא ממשיכים לסוכה א׳, א׳, לפי סדר המסכתות. כאן 11 יחידות וידאו העוסקות בבניית סוכה: הגובה, הצל, הדפנות, הסכך ומחלוקות התנאים. לכל יחידה סרטון מסוים של היוצר; 3 סרטוני YouTube עם מזהה מזוהה יכולים להיפתח בנגן פנימי בלחיצה. האחרים נפתחים אצל היוצר.</p>'+
   '<p class="smallprint">מספור 11 המשניות ונושאיהן הושוו למכון ממרא ולספריא. נוסח מכון ממרא בא׳, א׳ אומר ״גבוהה מעשרים אמה״, ובנוסח הנפוץ בספריא מופיע ״גבוהה למעלה מעשרים אמה״; אין כאן הכרעה בין כתבי יד. כל ההסברים והמעברים הם ניסוח לימודי מודרני. דפי המקור, שמות הסרטונים ומזהי שלושת נגני YouTube נבדקו במטא־נתונים, לא בצפייה: שפה מדוברת, כתוביות, אפשרות הטמעה, סגנון ואיכות לא נבדקו בפועל. סרטוני חב״ד מיועדים גם למתחילים צעירים ומסומנים ככאלה; אין בהם המלצה לסדרה בעלת משחק ילדותי. לא הועתקה מדיה.</p>'+
   '<div class="peah-links"><a class="btn ghost" href="#yoma-8-9">← סיום יומא ח׳, ט׳</a><a class="btn gold" href="#sukkah-1-1">▶ התחל סוכה א׳, א׳</a><a href="https://mechon-mamre.org/b/h/h26.htm" target="_blank" rel="noopener noreferrer">נוסח מכון ממרא ↗</a><a href="https://www.sefaria.org/Mishnah_Sukkah.1.1-11?lang=he" target="_blank" rel="noopener noreferrer">ספריא — פרק א׳ ↗</a></div>'+
   '<div class="actions" style="margin:12px 0;display:flex;gap:9px;flex-wrap:wrap"><button type="button" id="sukkahContinue" class="btn gold">▶ המשך למשנה הבאה שלא למדתי</button><span id="sukkahProgress" class="progressnote" aria-live="polite"></span></div>'+
   '<section id="sukkahChapter1" aria-labelledby="sukkahChapterHeading"><h4 id="sukkahChapterHeading">סוכה א׳ — מבנה הסוכה והסכך</h4><div class="eruvin-cards">';
  for(const [n,title,summary,from,to,url,provider,yt,chabad] of lessons){
    const prev=n===1?"#yoma-8-9":"#sukkah-1-"+(n-1);
    const next=n===11?"https://www.sefaria.org/Mishnah_Sukkah.2.1?lang=he":"#sukkah-1-"+(n+1);
    const mainLabel=yt?"▶ צפה במקור ב־YouTube ↗":"▶ פתח את סרטון המשנה ↗";
    const isChabad=provider.startsWith("Chabad.org");
    html+='<article class="eruvin-card" id="sukkah-1-'+n+'" data-sukkah-unit="'+n+'">'+
     '<span class="eyebrow">סוכה פרק א׳ · משנה '+n+' · סרטון יחידת לימוד</span>'+
     '<h4>'+escape(title)+'</h4><p>'+escape(summary)+'</p>'+
     '<p class="eruvin-bridge"><strong>מה ראינו קודם — ואיך זה מוביל לכאן?</strong> '+escape(from)+' <strong>השאלה של הסרט הבא:</strong> '+escape(to)+'</p>'+
     '<p class="eruvin-credit">'+escape(provider)+' · וידאו באתר היוצר · '+(isChabad?'חלופה מאוירת למתחילים, סגנונה לא נבדק בצפייה':'קישור מקור באנגלית לפי קטלוג היוצר, שפה בפועל לא נבדקה')+'</p>'+
     '<div class="eruvin-actions">'+(yt?'<button type="button" class="btn gold" data-sukkah-play="'+yt+'" data-sukkah-slot="'+n+'">▶ נגן כאן</button>':'')+
     '<a class="btn gold" href="'+escape(url)+'" target="_blank" rel="noopener noreferrer">'+mainLabel+'</a>'+
     '<button type="button" class="btn ghost" data-sukkah-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
     (yt?'<div class="eruvin-video" data-sukkah-host="'+n+'" hidden></div>':'')+
     '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Sukkah.1.'+n+'?lang=he" target="_blank" rel="noopener noreferrer">📜 המשנה בספריא ↗</a><a href="https://mechon-mamre.org/b/h/h26.htm" target="_blank" rel="noopener noreferrer">מכון ממרא ↗</a>'+
     (!isChabad?'<a href="'+chabadVideo(chabad,n)+'" target="_blank" rel="noopener noreferrer">חלופת וידאו מאוירת ↗</a>':'')+
     '<a href="'+prev+'">הקודם</a><a href="'+next+'"'+(n===11?' target="_blank" rel="noopener noreferrer"':'')+'>הבא</a></div></article>';
  }
  html+='</div></section><p class="smallprint">הפרק הבא לפי סדר המשנה: סוכה ב׳, א׳. אין להחליף את סרטוני לימוד המשנה בהרצאות על התקופה או בתמונות סטטיות.</p>';
  section.innerHTML=html;
  yoma.after(section);
  const key="mishnah_cinema_sukkah_ch1_v1";
  let done={};
  try{const v=JSON.parse(localStorage.getItem(key)||"{}");if(v&&typeof v==="object"&&!Array.isArray(v))done=v;}catch(_){}
  const allMarks=Array.from(section.querySelectorAll("[data-sukkah-mark]"));
  const continueBtn=section.querySelector("#sukkahContinue");
  function repaint(){
    let count=0;
    for(const b of allMarks){const on=!!done[b.dataset.sukkahMark];if(on)count++;b.setAttribute("aria-pressed",String(on));b.textContent=on?"✓ למדתי — בטל סימון":"סמן שלמדתי";}
    section.querySelector("#sukkahProgress").textContent=count+" / "+lessons.length+" משניות סומנו כנלמדות בדפדפן הזה.";
    continueBtn.disabled=count===lessons.length;
  }
  section.addEventListener("click",function(e){
    const mark=e.target.closest("[data-sukkah-mark]");
    if(mark&&section.contains(mark)){const k=mark.dataset.sukkahMark;done[k]=!done[k];try{localStorage.setItem(key,JSON.stringify(done));}catch(_){}repaint();return;}
    const play=e.target.closest("button[data-sukkah-play]");
    if(!play||!section.contains(play))return;
    const id=play.dataset.sukkahPlay,slot=play.dataset.sukkahSlot;
    const allowed={"1":"82-_YiS-ipA","9":"ExEcG7QsnFY","10":"yWP4pNYb9Gs"};
    if(allowed[slot]!==id)return;
    section.querySelectorAll("[data-sukkah-host]").forEach(h=>{h.replaceChildren();h.hidden=true;});
    const host=section.querySelector('[data-sukkah-host="'+slot+'"]');
    if(!host)return;
    const frame=document.createElement("iframe");
    frame.src="https://www.youtube-nocookie.com/embed/"+id+"?rel=0";
    frame.title="סוכה פרק א׳ משנה "+slot+" — The Mishnah Project";
    frame.loading="lazy";frame.referrerPolicy="strict-origin-when-cross-origin";
    frame.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen=true;
    host.appendChild(frame);host.hidden=false;play.textContent="↻ טען שוב";
  });
  continueBtn.addEventListener("click",function(){const n=lessons.find(u=>!done[u[0]]);if(!n)return;const card=section.querySelector("#sukkah-1-"+n[0]);if(card)card.scrollIntoView({behavior:"smooth",block:"start"});});
  repaint();
})();
