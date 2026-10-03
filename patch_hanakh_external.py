from pathlib import Path
import re

p = Path("index.html")
s = p.read_text(encoding="utf-8")

ids = {
"א":"dMfyog_Z5EA","ב":"oW0h-AwPhg4","ג":"KhbZVQ_xfPA","ד":"xJnDGKQvVCY",
"ה":"7WdCmDoBh1Q","ו":"DTN-sy0m7mg","ז":"oe3LNfZAzPw","ח":"lIms7HsGYQc",
"ט":"nKKjVOKhtLs","י":"Wb7dZIf6kME","יא":"K0RVwNlTXpk","יב":"4QuUq6MTPFM",
"יג":"RUKgFr9tgzo","יד":"jUk9haofFbk","טו":"IhWO_NlxSkY","טז":"xVTOTk-pSJQ",
"יז":"0u4Dk9uy0Wg","יח":"bsLZc-RrKwE","יט":"LozAQ9gq91c","כ":"ofDCMQdoP8A","כא":"vme74pRb8j8"
}

for ch, vid in ids.items():
 title = f'הנ״ך הבהיר — שופטים פרק {ch}'
 marker = f'{{"ch":"{ch}","title":"{title}","type":"base","yt":'
    start = s.find(marker)
    if start &lt; 0:
        raise SystemExit(f"Missing chapter {ch}")
    end = s.find("}", start)
    obj = s[start:end+1]
    obj = re.sub(r'"yt":(?:null|"[^"]*")', '"yt":null', obj, count=1)
 obj = re.sub(r'"url":(?:null|"[^"]*")', f'"url":"https://www.youtube.com/watch?v={vid}"', obj, count=1)
 obj = re.sub(r'"note":"[^"]*"', '"note":"פתיחה ישירה ביוטיוב — בעל הסרטון חסם הטמעה באתרים אחרים"', obj, count=1)
 s = s[:start] + obj + s[end+1:]

s = s.replace(
'116 מתוך 126 פריטים ניתנים להפעלה בתוך האתר. כל 21/21 פרקי "הנ״ך הבהיר" מוטמעים כעת ישירות בנגן; 10 מקורות חיצוניים מסומנים במפורש.',
'95 מתוך 126 פריטים ניתנים להפעלה בתוך האתר. כל 21/21 פרקי "הנ״ך הבהיר" נפתחים כעת ישירות בסרטון המדויק ביוטיוב, משום שבעל הסרטונים חסם הטמעה באתרים אחרים; 31 מקורות חיצוניים מסומנים במפורש.'
)

p.write_text(s, encoding="utf-8")
