# IronMind - Professional Frame Design 🎨

אתר Next.js RTL מדהים לחברת עיצוב מסגרות עם SEO מלא וביוג עם Markdown.

## ✨ תכונות

- ✅ **Next.js 14** - Framework מודרני וחזק
- ✅ **עברית RTL** - כל הטקסטים בעברית עם כיוון נכון
- ✅ **SEO מלא**
  - Meta tags מותאמים
  - Open Graph ו-Twitter Cards
  - Schema.org LocalBusiness
  - Sitemap ו-robots.txt
- ✅ **בלוג עם Markdown** - כתוב מאמרים ב-Markdown
- ✅ **טופס הצעת מחיר** - עם אינטגרציה WhatsApp
- ✅ **דיזיין מדהים** - עם אנימציות חלקות
- ✅ **Responsive Design** - עובד בכל מכשירים
- ✅ **מוכן לVercel** - פרסום בלחיצה אחת

## 🚀 התחלה מהירה

### 1. התקנת Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. הרצה במצב פיתוח
\`\`\`bash
npm run dev
\`\`\`

הפתח [http://localhost:3000](http://localhost:3000) בדפדפן שלך.

### 3. בנייה לייצור
\`\`\`bash
npm run build
npm run start
\`\`\`

## 📝 הוספת מאמרים לבלוג

1. צור קובץ \`.md\` חדש בתוך התיקייה \`posts/\`
2. הוסף Frontmatter בחלק העליון:

\`\`\`markdown
---
title: "כותרת המאמר"
date: "2024-01-15"
excerpt: "תיאור קצר של המאמר"
---

# תוכן המאמר שלך

גוף הטקסט כאן...
\`\`\`

## 🔍 SEO

אתר זה בנוי עם SEO בחזקה:

- **Meta Tags** - כל עמוד עם תיאור ייחודי
- **Open Graph** - שיתוף יפה בחברתיים
- **LocalBusiness Schema** - כדי שחיפוש יהיה טוב
- **Sitemap** - \`sitemap.xml\` לבעלי חיפוש
- **Robots.txt** - הנחיות לעסקות הסריקה

## 🐳 פרסום ב-Vercel

### אפשרות 1: GitHub Connection (מומלץ)

1. דחוף את הקוד ל-GitHub:
\`\`\`bash
git add .
git commit -m "Add Next.js IronMind website"
git push origin nextjs-version
\`\`\`

2. היכנס ל-[vercel.com](https://vercel.com)
3. לחץ "New Project"
4. בחר את ה-Repository של IronMind
5. Vercel יגלה את הקונפיגורציה ויפרוס באופן אוטומטי ✅

### אפשרות 2: ישירה ממשוב

1. התקן את ה-Vercel CLI:
\`\`\`bash
npm i -g vercel
\`\`\`

2. דחוף מהתיקייה של הפרויקט:
\`\`\`bash
vercel
\`\`\`

## 🔧 שינוי ההגדרות

### שינוי מספר הטלפון שלך בWhatsApp

בקובץ \`app/page.jsx\`, חפש את:
\`\`\`jsx
https://wa.me/972501234567
\`\`\`

שנה ל-:
\`\`\`jsx
https://wa.me/YOUR_PHONE_NUMBER
\`\`\`

### שינוי מטא דאטה

בקובץ \`app/layout.jsx\`:
\`\`\`jsx
export const metadata = {
  title: 'IronMind - עיצוב מסגרות מקצועי',
  description: 'תיאור שלך כאן',
  // ...
};
\`\`\`

## 📦 מבנה הפרויקט

\`\`\`
ironmind-website/
├── app/
│   ├── layout.jsx          # Layout הראשי עם SEO
│   ├── page.jsx            # דף הבית
│   ├── globals.css         # סגנונות גלובליים
│   ├── blog/
│   │   └── page.jsx        # דף הבלוג
│   └── api/
│       └── blog/
│           └── route.js    # API לבלוג
├── posts/                  # מאמרי Markdown
│   ├── choosing-perfect-frame.md
│   └── trends-2024.md
├── public/
│   └── robots.txt          # SEO robots
├── package.json
├── next.config.js
└── .gitignore
\`\`\`

## 🎨 ערכת הצבעים

- **Primary**: #f59e0b (Amber)
- **Background**: #0f172a (Dark Blue)
- **Surface**: #0c1628 (Darker Blue)
- **Text**: #f1f5f9 (Light Text)

## 📱 תואמות

- ✅ סמארטפונים (iOS ו-Android)
- ✅ טابלטים
- ✅ דסקטופ
- ✅ RTL (עברית)

## 🤝 תמיכה

שאלות? צור קשר:
- 📧 Email: info@ironmind.co.il
- 📱 WhatsApp: [לחץ כאן](https://wa.me/972501234567)
- 🌐 Website: https://ironmind-frames.com

## 📄 רישיון

הפרויקט הזה בעל רישיון MIT. ראה את הקובץ LICENSE לפרטים נוספים.

---

עוצב עם ❤️ באמצעות Next.js 14 ו-Vercel
