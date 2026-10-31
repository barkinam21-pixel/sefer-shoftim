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
   const next=n===10?"#beitzah-2-1":"#beitzah-1-"+(n+1);
   const watch=video?'<button type="button" class="btn gold" data-beitzah1-play="'+video+'" data-n="'+n+'">▶ נגן באתר</button> <a class="btn ghost" href="https://www.youtube.com/watch?v='+video+'" target="_blank" rel="noopener noreferrer">הסרטון המקורי ↗</a>':
     '<a class="btn gold" href="'+catalog+'" target="_blank" rel="noopener noreferrer">רשומת סרטון בקטלוג ↗</a>';
   html+='<article class="eruvin-card" id="beitzah-1-'+n+'"><span class="eyebrow">ביצה א׳, '+letters[n]+'</span><h4>'+esc(title)+'</h4>'+
     '<p>'+esc(focus)+'</p><p class="eruvin-bridge"><strong>מה ראינו קודם — מדוע זה מוביל לזה?</strong> '+esc(bridge)+
     ' <strong>השאלה הבאה:</strong> '+esc(question)+'</p><p class="eruvin-credit">'+(video?'The Mishnah Project · סרטון במטא־נתונים בלבד':'The Mishnah Project · רישום בקטלוג בלבד')+'</p>'+
     '<div class="eruvin-actions">'+watch+'<button type="button" class="btn ghost" data-beitzah1-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
     (video?'<div class="eruvin-video" data-beitzah1-host="'+n+'" hidden></div>':'')+
     '<div class="peah-links"><a href="https://www.sefaria.org/Mishnah_Beitzah.1.'+n+'?lang=he" target="_blank" rel="noopener noreferrer">המשנה בספריא ↗</a>'+
     '<a href="https://mechon-mamre.org/b/h/h27.htm" target="_blank" rel="noopener noreferrer">מכון ממרא ↗</a><a href="'+prev+'">הקודם</a>'+
     '<a href="'+next+'">הבא</a></div></article>';
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


/*
 * Research ledger, 2026-10-31: Beitzah 2, Mishnayot 1-10.
 * Primary comparison: https://mechon-mamre.org/b/h/h27.htm
 * Independently segmented text: https://he.wikisource.org/wiki/משנה_ביצה_ב
 * 10-unit video inventory: https://www.torahsecrets.co.uk/playlist/masechet-beitzah/
 * Direct video metadata: YouTube F7GeA0yvx3g (2:3), mishnah.co embedded 9siLdVAcz3k (2:9).
 * Numbers 1-10 use Wikisource / Sefaria, NOT Mechon Mamre's eight paragraph numbers.
 * Mechon Mamre grouping: 1->ב,א; 2&3->ב,ב; 4->ב,ג; 5->ב,ד;
 * 6->ב,ה; 7->ב,ו; 8->ב,ז; 9&10->ב,ח.
 * Summaries and links below are contemporary teaching aids, not original period footage.
 * No viewing/listening, subtitling, playback, rights to video reuse, historical dramatization,
 * or human Torah review has been verified. No embedded video loads before click.
 * The historical film chronology is an independent track, unchanged.
 */
(function(){
 "use strict";
 const parent=document.getElementById("beitzahTractate");
 const prev=document.getElementById("beitzahChapter1");
 if(!parent||!prev||document.getElementById("beitzahChapter2"))return;
 const units=[
 [1,"עירוב תבשילין: מהחג לשבת","יום טוב שחל בערב שבת: תבשיל שהוכן לפני יום טוב מאפשר לסמוך עליו בהכנה לשבת. בית שמאי דורשים שני תבשילים ובית הלל אחד, עם דין דג וביצה שעליו.","ביצה א׳, י׳ סיימה את דיני המשלוח בחג. כעת מתחיל פרק חדש, על מפגש יום טוב ושבת — מעבר בסדר הלימוד, לא אירוע בהיסטוריה.","ומה עושים כשיום טוב חל מיד אחרי השבת?"],
 [2,"טבילה לפני החג או בשבת?","כשיום טוב חל אחרי השבת, בית שמאי ובית הלל נחלקים במועד טבילת כלים ואדם.","א׳ דנה בחג שלפני השבת; ב׳ בוחנת את הסדר ההפוך, כשהחג בא אחריה.","מה הדין במים טמאים ובטבילה לשם דרגת טהרה אחרת?"],
 [3,"השקת מים וטבילה מחבורה לחבורה","המשנה מזכירה השקת מים בכלי אבן לטהרם, ומבחינה בין טבילה לצרכים שונים של טהרה. אין מדובר בהיתר גורף לכל טבילה בחג.","ב׳ שאלה מתי טובלים אדם וכלים; ג׳ ממשיכה באבחנות בין אופני הטהרה.","ומה הדין בקרבנות עולות ושלמים ביום טוב?"],
 [4,"שלמים, עולות וסמיכה במקדש","בית שמאי מתירים הבאת שלמים בלי סמיכה, ולא עולות; בית הלל מתירים גם עולות וסמיכה. זו מחלוקת הלכתית במשנה, לא צילום של טקס.","ג׳ עסקה בדיני טהרה; ד׳ עוברת לעבודת המקדש ביום טוב — שני נושאים הלכתיים שונים.","האם מותר לחמם מים לרחצה בחג?"],
 [5,"חימום מים לרגליים והדלקת מדורה","בית שמאי מגבילים חימום מים לרגליים למים שראויים לשתייה; בית הלל מתירים. המשנה מוסיפה דין מדורה להתחממות.","ד׳ עסקה בעבודת המקדש; ה׳ עוברת מצורכי הקרבן לצורכי הגוף ביום טוב — מעבר נושאי.","אילו שלוש החמרות נהג רבן גמליאל?"],
 [6,"שלוש החמרות של רבן גמליאל","רבן גמליאל מחמיר כבית שמאי בטמינת חמין, העמדת מנורה ואפיית פת. מובאת תגובה על מנהג בית אביו; אין להמציא שיחה מצולמת.","ה׳ ביררה חימום לשימוש אישי; ו׳ מרחיבה למנהגי רבן גמליאל סביב החג.","באילו שלוש הלכות היה אותו רבן גמליאל דווקא מקל?"],
 [7,"שלוש הקלות — אותו רבן גמליאל","רבן גמליאל מתיר כיבוד בין המיטות, הנחת מוגמר ועשיית גדי מקולס בלילי פסחים, וחכמים אוסרים.","ו׳ הציגה החמרות של רבן גמליאל; ז׳ מציגה את הצד המקביל — ההקלות שלו.","מה מתיר רבי אלעזר בן עזריה בנוגע לבהמה ולפלפלים?"],
 [8,"רבי אלעזר בן עזריה: פרה, קירוד וריחיים","שלוש הלכות שבהן רבי אלעזר בן עזריה מתיר וחכמים אוסרים; רבי יהודה מחלק בין קירוד לקרצוף, מפני חשש חבורה.","ז׳ מנתה הקלות של רבן גמליאל; ח׳ מציגה היתרים וחילוקי דעות של תנא אחר, בלי להניח שנפגשו.","מה עושה את ריחיים של הפלפלין לכלי המקבל טומאה?"],
 [9,"ריחיים של פלפלין: שלושה דיני טומאה","ריחיים של פלפלים מקבלת טומאה משלוש בחינות: כלי קיבול, כלי מתכות וכברה.","ח׳ הזכירה שחיקת פלפלין בריחיים; ט׳ בוחנת את הריחיים עצמן, הפעם מצד דיני טומאת כלים.","האם עגלה של ילד נגררת ומיטלטלת בשבת?"],
 [10,"עגלה של קטן: טומאה, טלטול וגרירה","המשנה דנה בעגלת ילד המקבלת טומאת מדרס וניטלת בשבת, במחלוקת על גרירתה. אין להשליך מכאן ישירות לפסיקה של ימינו.","ט׳ עסקה בטומאת ריחיים; י׳ משלימה את הפרק בדיון בטומאת כלי אחר — עגלה של קטן.","הפרק הבא, ביצה ג׳, א׳: אילו בעלי חיים מותר לצוד או להאכיל ביום טוב?"]
 ];
 const videoIds={3:"F7GeA0yvx3g",9:"9siLdVAcz3k"};
 const catalog="https://www.torahsecrets.co.uk/playlist/masechet-beitzah/";
 const hebrew="https://he.wikisource.org/wiki/משנה_ביצה_ב";
 const mamre="https://mechon-mamre.org/b/h/h27.htm";
 const chapterVideo="https://mishna.org.il/מועד/ביצה/2";
 const letters=["","א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ז׳","ח׳","ט׳","י׳"];
 const escapeText=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const chapter=document.createElement("section");
 chapter.id="beitzahChapter2";chapter.setAttribute("aria-label","ביצה פרק ב");
 let markup='<div class="study-divider">ביצה ב׳ · 10 משניות לפי חלוקת ויקיטקסט וספריא<small>מקור עתיק, הסבר מודרני, חיבור בין שיעורים וניווט רציף</small></div>'+
 '<p class="smallprint">שימו לב: מכון ממרא מאגד את פרק ב׳ לשמונה סעיפים; שם ב׳–ג׳ במשנה שלפניכם יחד בסעיף ב׳, ומשניות ט׳–י׳ יחד בסעיף ח׳. כאן משתמשים בחלוקת עשר המשניות, התואמת את הסרטונים. אין לערבב בין מספרי שתי המהדורות.</p>'+
 '<p class="smallprint">הסרטונים באנגלית של The Mishnah Project מופיעים ברשימת עשרה סרטונים נפרדים. עבור משניות ג׳ וט׳ זוהו מזהי נגינה ישירים על סמך עמודי היוצר/YouTube; ביתר המשניות קיים קישור לקטלוג בלבד. איכות, צפייה מלאה, כתוביות וזמינות נגן בפועל טרם אומתו.</p>'+
 '<div class="peah-links"><a href="'+hebrew+'" target="_blank" rel="noopener noreferrer">ויקיטקסט · כל הפרק ↗</a> <a href="'+mamre+'" target="_blank" rel="noopener noreferrer">מכון ממרא · מספור שונה ↗</a> <a href="https://www.sefaria.org/Mishnah_Beitzah.2?lang=he" target="_blank" rel="noopener noreferrer">ספריא ↗</a> <a href="'+catalog+'" target="_blank" rel="noopener noreferrer">עשרה סרטונים פרטניים ↗</a> <a href="'+chapterVideo+'" target="_blank" rel="noopener noreferrer">שיעור עברי אחד לפרק כולו ↗</a></div>'+
 '<div class="actions" style="margin:12px 0"><button class="btn gold" type="button" id="beitzah2Continue">▶ המשך לימוד</button> <span id="beitzah2Progress" class="progressnote" aria-live="polite"></span></div><div class="eruvin-cards">';
 for(const [n,title,explanation,bridge,question] of units){
   const video=videoIds[n];
   const previous=n===1?"#beitzah-1-10":"#beitzah-2-"+(n-1);
   const next=n===10?"#beitzah-3-1":"#beitzah-2-"+(n+1);
   const videoControl=video?
    '<button type="button" class="btn gold" data-beitzah2-play="'+video+'" data-n="'+n+'">▶ הפעל נגן כאן</button> <a class="btn ghost" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v='+video+'">עמוד הסרטון ↗</a>':
    '<a class="btn gold" target="_blank" rel="noopener noreferrer" href="'+catalog+'">פתח קטלוג · ב׳, '+letters[n]+' ↗</a>';
   markup+='<article id="beitzah-2-'+n+'" class="eruvin-card"><span class="eyebrow">ביצה ב׳, '+letters[n]+'</span><h4>'+escapeText(title)+'</h4>'+
      '<p>'+escapeText(explanation)+'</p>'+
      '<p class="eruvin-bridge"><strong>מה ראינו קודם — מדוע זה מוביל לזה?</strong> '+escapeText(bridge)+' <strong>השאלה בסרטון הבא:</strong> '+escapeText(question)+'</p>'+
      '<p class="eruvin-credit">המשנה: נוסח קדום · ההסבר והמעבר: עיבוד מודרני · '+(video?'סרטון אנגלי זוהה במטא־נתונים':'סרטון אנגלי מופיע בקטלוג, ללא נגן מאומת')+'</p>'+
      '<div class="eruvin-actions">'+videoControl+' <button type="button" class="btn ghost" data-beitzah2-mark="'+n+'" aria-pressed="false">סמן שלמדתי</button></div>'+
      (video?'<div class="eruvin-video" data-beitzah2-host="'+n+'" hidden></div>':'')+
      '<div class="peah-links"><a target="_blank" rel="noopener noreferrer" href="https://www.sefaria.org/Mishnah_Beitzah.2.'+n+'?lang=he">המשנה בספריא ↗</a>'+
      ' <a target="_blank" rel="noopener noreferrer" href="'+hebrew+'">נוסח הפרק בוויקיטקסט ↗</a> <a href="'+previous+'">הקודם</a> <a href="'+next+'"' +'>הבא</a></div></article>';
 }
 chapter.innerHTML=markup+'</div><p class="smallprint">המשך הלימוד: ביצה ג׳, א׳. ניתן להמשיך מכאן לפרק ג׳ באתר. אין כאן שחזור של אירועים מתקופת התנאים או שימוש חוזר בקובצי הסרטונים.</p>';
 prev.after(chapter);
 let state={};const storage="mishnah_cinema_beitzah_ch2_v1";
 try{const val=JSON.parse(localStorage.getItem(storage)||"{}");if(val&&typeof val==="object"&&!Array.isArray(val))state=val;}catch(_){}
 const marks=Array.from(chapter.querySelectorAll("[data-beitzah2-mark]"));
 const continueBtn=chapter.querySelector("#beitzah2Continue");
 function redraw(){let count=0;for(const btn of marks){const yes=!!state[btn.dataset.beitzah2Mark];if(yes)count++;btn.setAttribute("aria-pressed",String(yes));btn.textContent=yes?"✓ למדתי — בטל":"סמן שלמדתי";}chapter.querySelector("#beitzah2Progress").textContent=count+" / 10";continueBtn.disabled=count===10;}
 chapter.addEventListener("click",e=>{
   const button=e.target.closest("button");if(!button||!chapter.contains(button))return;
   if(button.dataset.beitzah2Mark){const n=button.dataset.beitzah2Mark;state[n]=!state[n];try{localStorage.setItem(storage,JSON.stringify(state));}catch(_){}redraw();return;}
   const n=button.dataset.n,id=button.dataset.beitzah2Play;
   if(!id||videoIds[n]!==id||!/^[a-zA-Z0-9_-]{11}$/.test(id))return;
   const host=chapter.querySelector('[data-beitzah2-host="'+n+'"]');if(!host)return;
   chapter.querySelectorAll("[data-beitzah2-host]").forEach(node=>{node.replaceChildren();node.hidden=true;});
   const player=document.createElement("iframe");player.src="https://www.youtube-nocookie.com/embed/"+id+"?rel=0";
   player.loading="lazy";player.title="ביצה ב׳, משנה "+n+" — The Mishnah Project";
   player.referrerPolicy="strict-origin-when-cross-origin";
   player.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
   player.allowFullscreen=true;host.appendChild(player);host.hidden=false;button.textContent="↻ טען שוב";
 });
 continueBtn.addEventListener("click",()=>{const next=units.find(x=>!state[x[0]]);if(next)document.getElementById("beitzah-2-"+next[0])?.scrollIntoView({behavior:"smooth",block:"center"});});
 redraw();
 let hash="";try{hash=decodeURIComponent(location.hash.slice(1));}catch(_){}
 if(/^beitzah(?:Chapter2|-2-(?:10|[1-9]))$/.test(hash)){const target=hash==="beitzahChapter2"?chapter:document.getElementById(hash);if(target)requestAnimationFrame(()=>target.scrollIntoView({behavior:"auto",block:"start"}));}
})();

// Continue the textual Mishnah sequence; load after chapter 2 mounts.
(()=>{const s=document.createElement("script");s.src="./beitzah-ch3.js";document.body.appendChild(s);})();
