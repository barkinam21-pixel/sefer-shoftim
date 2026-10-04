from pathlib import Path
import json
import re

p = Path("index.html")
s = p.read_text(encoding="utf-8")

IDS = {
    "א":"dMfyog_Z5EA","ב":"oW0h-AwPhg4","ג":"KhbZVQ_xfPA","ד":"xJnDGKQvVCY",
    "ה":"7WdCmDoBh1Q","ו":"DTN-sy0m7mg","ז":"oe3LNfZAzPw","ח":"lIms7HsGYQc",
    "ט":"nKKjVOKhtLs","י":"Wb7dZIf6kME","יא":"K0RVwNlTXpk","יב":"4QuUq6MTPFM",
    "יג":"RUKgFr9tgzo","יד":"jUk9haofFbk","טו":"IhWO_NlxSkY","טז":"xVTOTk-pSJQ",
    "יז":"0u4Dk9uy0Wg","יח":"bsLZc-RrKwE","יט":"LozAQ9gq91c","כ":"ofDCMQdoP8A","כא":"vme74pRb8j8"
}
NOTE = "פתיחה ישירה ביוטיוב — בעל הסרטונים חסם הטמעה באתרים אחרים"

for ch, vid in IDS.items():
    title = f'הנ״ך הבהיר — שופטים פרק {ch}'
    marker = f'{{"ch":"{ch}","title":"{title}","type":"base"'
    start = s.find(marker)
    if start < 0:
        raise SystemExit(f"Missing chapter {ch}")
    end = s.find("}", start)
    if end < 0:
        raise SystemExit(f"Malformed item for chapter {ch}")
    obj = s[start:end + 1]
    obj = re.sub(r'"yt":(?:null|"[^"]*")', '"yt":null', obj, count=1)
    obj = re.sub(r'"url":(?:null|"[^"]*")',
                 f'"url":"https://www.youtube.com/watch?v={vid}"', obj, count=1)
    obj = re.sub(r'"note":"[^"]*"', f'"note":"{NOTE}"', obj, count=1)
    s = s[:start] + obj + s[end + 1:]

data_start = s.index("const DATA=") + len("const DATA=")
data_end = s.index(";let filter=", data_start)
data = json.loads(s[data_start:data_end])
total = len(data["items"])
playable = sum(1 for x in data["items"] if x.get("yt") or x.get("embed"))
external = total - playable

s = re.sub(r'\d+ מתוך \d+ פריטים ניתנים להפעלה בתוך האתר\.',
           f'{playable} מתוך {total} פריטים ניתנים להפעלה בתוך האתר.', s, count=1)
s = re.sub(
    r'כל 21/21 פרקי [“"]הנ״ך הבהיר[”"] .*?; \d+ מקורות חיצוניים מסומנים במפורש\.',
    f'כל 21/21 פרקי “הנ״ך הבהיר” נפתחים כעת ישירות בסרטון המדויק ביוטיוב, משום שבעל הסרטונים חסם הטמעה באתרים אחרים; {external} מקורות חיצוניים מסומנים במפורש.',
    s,
    count=1,
)

p.write_text(s, encoding="utf-8")
print(f"HaNakh external links enforced: playable={playable}, total={total}, external={external}")
