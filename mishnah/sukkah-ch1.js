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
    const next=n===11?"#sukkah-2-1":"#sukkah-1-"+(n+1);
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
     '<a href="'+prev+'">הקודם</a><a href="'+next+'"'+''+'>הבא</a></div></article>';
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
  // The chapter is injected after page load; honor direct hash links once it exists.
  const fragment=decodeURIComponent(window.location.hash.slice(1));
  if(/^sukkah(?:Tractate|Chapter1|-1-(?:[1-9]|10|11))$/.test(fragment)){
    const anchor=fragment==="sukkahTractate"?section:section.querySelector("#"+fragment);
    if(anchor)requestAnimationFrame(()=>anchor.scrollIntoView({behavior:"auto",block:"start"}));
  }
})();


/* Sukkah 2 research: Sefaria /Mishnah_Sukkah.2.1-9, Mechon Mamre /b/h/h26.htm,
   HaPerek HaYomi /מועד/סוכה/2. Sefaria counts 9; Mechon Mamre combines 4-5.
   Verified 5 individual video page/title IDs by metadata, NOT actual playback.
   This is study text and attributed source narration, not cinematic reconstruction. */
(function(){
 "use strict";
 const parent=document.getElementById("sukkahTractate");
 if(!parent||document.getElementById("sukkahChapter2"))return;
 const lessons=[{"n":1,"title":"טבי מתחת למיטה — עדות ומחלוקת","desc":"הישן תחת המיטה לא יצא ידי חובתו; רבי יהודה מציג עדות על זקנים, ורבי שמעון את מעשה טבי, עבדו של רבן גמליאל. אין להפוך את העדויות לפגישה מבוימת של כל התנאים.","bridge":"א׳, י״א עסקה בגג ובכיסוי הסוכה. כאן נשאל האם מיטה בתוך הסוכה היא גג נוסף מעל האדם.","question":"אם מיטה מפרידה בין אדם לסכך, האם מיטה יכולה גם לשמש יסוד למבנה הסוכה?","url":"https://www.chabad.org/multimedia/video_cdo/aid/7407735/jewish/Sukkah-Perek-2-Mishnah-1.htm","provider":"Chabad · מאויר למתחילים · 5:46"},{"n":2,"title":"סוכה שנשענת על מיטה","desc":"רבי יהודה חולק על סוכה שאינה יכולה לעמוד בלי רגלי המיטה. המשנה מתייחסת גם לסכך מדובלל ולסכך צפוף שצילתו מרובה.","bridge":"אחרי שינה מתחת למיטה במשנה א׳, עוברים למיטה שמחזיקה את הסוכה עצמה.","question":"אם המבנה עומד, האם הוא חייב להיות נייח או שאפשר לבנות אותו על עגלה?","url":"https://www.youtube.com/watch?v=tTjhXZymgME","provider":"The Mishnah Project · סרטון למשנה ב׳","yt":"tTjhXZymgME","alt":"https://www.chabad.org/multimedia/video_cdo/aid/7407736/jewish/Sukkah-Perek-2-Mishnah-2.htm"},{"n":3,"title":"סוכה על ספינה, עגלה, אילן או גמל","desc":"המשנה מבחינה בין סוכה כשרה ובין איסור לעלות אליה בחג אם הדבר מחייב שימוש באילן או בבעל חיים.","bridge":"ב׳, ב׳ בדקה את יציבות הסוכה על רגלי מיטה; ג׳ מעבירה אותה לעגלה, לספינה ולאילן.","question":"האם גם אילנות המשמשים כדפנות נחשבים סוכה, ומי פטור מהישיבה?","url":"https://www.youtube.com/watch?v=Tw67U4ZO4hk","provider":"The Mishnah Project · סרטון למשנה ג׳","yt":"Tw67U4ZO4hk","alt":"https://www.chabad.org/multimedia/video_cdo/aid/7407737/jewish/Sukkah-Perek-2-Mishnah-3.htm"},{"n":4,"title":"שלוחי מצווה, חולים ואכילת עראי","desc":"סוכה בין אילנות יכולה להיות כשרה; שלוחי מצווה, חולים ומלוויהם פטורים מן הסוכה, וניתן לאכול ולשתות עראי מחוץ לה.","bridge":"ג׳ עסקה באילן שנושא סוכה; ד׳ פותחת באילן כדופן ועוברת לצורכי האדם בחג.","question":"איך נהגו חכמי המשנה כאשר הובא אליהם אוכל בכמות קטנה?","url":"https://www.chabad.org/multimedia/video_cdo/aid/7407738/jewish/Sukkah-Perek-2-Mishnah-4.htm","provider":"Chabad · מאויר למתחילים · 5:39"},{"n":5,"title":"מה ביקשו רבן יוחנן בן זכאי, רבן גמליאל ורבי צדוק?","desc":"מסורת המשנה מתארת חכמים שהעלו מזון קל לסוכה ולעומתם רבי צדוק שאכל פחות מכביצה מחוץ לה. זהו מקרה נפרד, לא הוכחה למפגש משותף.","bridge":"משנה ד׳ התירה אכילת עראי מחוץ לסוכה; ה׳ מציבה מעשים של חכמים לצד ההיתר.","question":"כמה סעודות אדם חייב לאכול בסוכה בשבעת ימי החג?","url":"https://www.youtube.com/watch?v=uB2PL1vwF5U","provider":"The Mishnah Project · סרטון למשנה ה׳","yt":"uB2PL1vwF5U"},{"n":6,"title":"ארבע עשרה סעודות — או בלי מספר קבוע?","desc":"רבי אליעזר מחייב ארבע עשרה סעודות, וחכמים אינם קובעים מכסה מלבד ליל יום טוב הראשון; נחלקו גם בדין השלמה.","bridge":"ה׳ הציגה אכילה בפועל אצל חכמים; ו׳ מנסחת מחלוקת על מספר הסעודות המחייב.","question":"אם הראש בתוך הסוכה והשולחן בבית, האם קיימו את המצווה?"},{"n":7,"title":"ראשו בסוכה ושולחנו בבית","desc":"בית שמאי פוסלים ובית הלל מכשירים, והמשנה מביאה עדות על יוחנן בן החורוני, מבלי לקבוע סדר זמנים לכל הדוברים.","bridge":"ו׳ דנה בכמות הסעודות; ז׳ שואלת היכן אוכל האדם ומה משמעות השולחן שבבית.","question":"מי חייב לשבת בסוכה, ומה מלמד מעשה שמאי הזקן על חינוך קטן?"},{"n":8,"title":"מי פטור? ומה עשה שמאי עבור תינוק?","desc":"המשנה מפרטת פטור נשים, עבדים וקטנים ומספרת ששמאי הזקן פתח תקרה וסיכך מעל מקום התינוק שנולד במשפחתו.","bridge":"ז׳ ביררה את מקום השולחן של המשפחה; ח׳ שואלת אילו בני משפחה חייבים ומביאה מעשה שמאי.","question":"מה עושים כאשר יורד גשם לתוך הסוכה עד שהאוכל מתקלקל?"},{"n":9,"title":"כשהסוכה היא בית — והגשם מגיע","desc":"שבעת הימים עושים סוכה קבע ובית עראי; המשנה דנה בפינוי מפני גשם ומסיימת במשל הקיתון.","bridge":"ח׳ עסקה בבני הבית בסוכה; ט׳ מסיימת בקביעות המגורים כשהגשם משנה את האפשרות לשהות בה.","question":"בפרק ג׳ עוברים ללולב ולארבעת המינים: מעבר נושאי ברצף המסכת, לא תיארוך היסטורי."}];
 const escapeHTML=x=>String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const section=document.createElement("section");
 section.id="sukkahChapter2";
 section.setAttribute("aria-labelledby","sukkahTwoTitle");
 let html='<div class="study-divider">סוכה פרק ב׳ — מסלול לימוד המשנה<small>9 משניות לפי ספריא; סדר טקסטואלי ולא סדר ההתרחשויות ההיסטוריות</small></div>'+
 '<h4 id="sukkahTwoTitle">סוכה ב׳: מן הבנייה לחיים בתוך הסוכה</h4>'+
 '<p>טבי שישן תחת המיטה, סוכה על ספינה, חכמים וארוחותיהם, חינוך ילד וגשם. חמישה סרטונים פרטניים ומקור לכל תשע המשניות. אין סרטון נפרד מאומת למשניות ו׳–ט׳, ולכן איננו מציגים כזה.</p>'+
 '<p class="smallprint">ספריא והפרק היומי מונים תשע משניות; מכון ממרא מונה שמונה סעיפים, ומאחד את ד׳–ה׳. הפניה כאן היא לפי מספור ספריא. דפי הסרטונים, משך הסרטונים בחב״ד ומזהי YouTube נבדקו כמטא־נתונים בלבד; לא בוצעה צפייה, לא אומתו כתוביות או ניגון. סרטוני חב״ד מיועדים למתחילים ולילדים, ואינם עוברים כאן אישור סגנוני לבוגרים.</p>'+
 '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Sukkah.2.1-9?lang=he" target="_blank" rel="noopener noreferrer">מקור ספריא ↗</a>'+
 '<a href="https://mechon-mamre.org/b/h/h26.htm" target="_blank" rel="noopener noreferrer">מכון ממרא ↗</a>'+
 '<a href="https://www.mishna.org.il/מועד/סוכה/2" target="_blank" rel="noopener noreferrer">▶ סרטון עברי לפרק כולו, לא לכל משנה בנפרד ↗</a></div>'+
 '<div class="actions" style="margin:12px 0"><button class="btn gold" type="button" id="sukkah2Continue">▶ המשך למשנה שלא למדתי</button> <span class="progressnote" id="sukkah2Progress" aria-live="polite"></span></div>'+
 '<div class="eruvin-cards">';
 for(const u of lessons){
  const n=u.n,previous=n===1?"#sukkah-1-11":"#sukkah-2-"+(n-1);
  const next=n===9?"https://www.sefaria.org/Mishnah_Sukkah.3.1?lang=he":"#sukkah-2-"+(n+1);
  html+='<article id="sukkah-2-'+n+'" data-sukkah2-unit="'+n+'" class="eruvin-card">'+
   '<span class="eyebrow">סוכה ב׳ · משנה '+n+(u.url?' · סרטון פרטני מזוהה':' · סרטון פרטני טרם אותר')+'</span>'+
   '<h4>'+escapeHTML(u.title)+'</h4><p>'+escapeHTML(u.desc)+'</p>'+
   '<p class="eruvin-bridge"><strong>מה ראינו קודם — מדוע זה מוביל לכאן?</strong> '+escapeHTML(u.bridge)+
   ' <strong>השאלה הבאה:</strong> '+escapeHTML(u.question)+'</p>'+
   '<p class="eruvin-credit">'+escapeHTML(u.provider||"יחידת לימוד טקסטואלית עם מקור; וידאו נפרד לא אומת")+'</p>'+
   '<div class="eruvin-actions">'+
    (u.yt?'<button type="button" class="btn gold" data-sukkah2-play="'+u.yt+'" data-sukkah2-slot="'+n+'">▶ נגן כאן</button>':'')+
    (u.url?'<a class="btn gold" target="_blank" rel="noopener noreferrer" href="'+escapeHTML(u.url)+'">▶ סרטון למשנה זו אצל היוצר ↗</a>':'')+
    '<button type="button" class="btn ghost" data-sukkah2-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
   (u.yt?'<div class="eruvin-video" data-sukkah2-host="'+n+'" hidden></div>':'')+
   '<div class="peah-links"><a target="_blank" rel="noopener noreferrer" href="https://www.sefaria.org/Mishnah_Sukkah.2.'+n+'?lang=he">📜 המשנה בספריא ↗</a>'+
   (u.alt?'<a target="_blank" rel="noopener noreferrer" href="'+escapeHTML(u.alt)+'">חלופה מאוירת ↗</a>':'')+
   '<a href="'+previous+'">הקודם</a><a href="'+next+'"'+(n===9?' target="_blank" rel="noopener noreferrer"':'')+'>הבא</a></div></article>';
 }
 html+='</div>';
 section.innerHTML=html;
 parent.querySelector("#sukkahChapter1").after(section);
 const storage="mishnah_cinema_sukkah_ch2_v1";
 let state={};try{const t=JSON.parse(localStorage.getItem(storage)||"{}");if(t&&typeof t==="object"&&!Array.isArray(t))state=t;}catch(_){}
 const marks=Array.from(section.querySelectorAll("[data-sukkah2-mark]"));
 const continueBtn=section.querySelector("#sukkah2Continue");
 function redraw(){
  let count=0;marks.forEach(b=>{const yes=!!state[b.dataset.sukkah2Mark];if(yes)count++;b.setAttribute("aria-pressed",String(yes));b.textContent=yes?"✓ למדתי — בטל סימון":"סמן שלמדתי";});
  section.querySelector("#sukkah2Progress").textContent=count+" / "+lessons.length+" משניות סומנו בדפדפן.";
  continueBtn.disabled=count===lessons.length;
 }
 section.addEventListener("click",e=>{
  const b=e.target.closest("[data-sukkah2-mark]");
  if(b&&section.contains(b)){state[b.dataset.sukkah2Mark]=!state[b.dataset.sukkah2Mark];try{localStorage.setItem(storage,JSON.stringify(state));}catch(_){}redraw();return;}
  const play=e.target.closest("button[data-sukkah2-play]");
  if(!play||!section.contains(play))return;
  const ids={"2":"tTjhXZymgME","3":"Tw67U4ZO4hk","5":"uB2PL1vwF5U"},slot=play.dataset.sukkah2Slot;
  if(ids[slot]!==play.dataset.sukkah2Play)return;
  section.querySelectorAll("[data-sukkah2-host]").forEach(h=>{h.replaceChildren();h.hidden=true;});
  const host=section.querySelector('[data-sukkah2-host="'+slot+'"]');if(!host)return;
  const frame=document.createElement("iframe");
  frame.src="https://www.youtube-nocookie.com/embed/"+ids[slot]+"?rel=0";
  frame.title="סוכה ב׳, משנה "+slot+" — The Mishnah Project";
  frame.loading="lazy";frame.referrerPolicy="strict-origin-when-cross-origin";
  frame.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";frame.allowFullscreen=true;
  host.appendChild(frame);host.hidden=false;play.textContent="↻ טען שוב";
 });
 continueBtn.addEventListener("click",()=>{const u=lessons.find(x=>!state[x.n]);if(u)section.querySelector("#sukkah-2-"+u.n)?.scrollIntoView({behavior:"smooth",block:"start"});});
 redraw();
 let hash="";try{hash=decodeURIComponent(location.hash.slice(1));}catch(_){}
 if(/^sukkah(?:Chapter2|-2-[1-9])$/.test(hash)){const anchor=hash==="sukkahChapter2"?section:section.querySelector("#"+hash);if(anchor)requestAnimationFrame(()=>anchor.scrollIntoView({behavior:"auto",block:"start"}));}
})();
