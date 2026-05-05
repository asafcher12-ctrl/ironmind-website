# לי-אור | אתר עסקי

אתר פרמיום לחברת לי-אור — מומחים בשילוב ברזל ועץ.

## מבנה הקבצים

```
lior-website/
├── index.html          # עמוד ראשי
├── style.css           # עיצוב
├── main.js             # JavaScript
├── vercel.json         # הגדרות Vercel
├── .gitignore
└── images/             # תמונות הפרויקטים
    ├── project1.jpeg
    ├── project2.jpeg
    ├── project3.jpeg
    ├── project4.jpeg
    ├── project5.jpeg
    └── project6.jpeg
```

---

## הוראות העלאה לגיטהאב

### שלב 1 — יצירת ריפוזיטורי
1. היכנס ל-[github.com](https://github.com) ולחץ **New repository**
2. תן שם: `lior-website`
3. השאר **Public** → לחץ **Create repository**

### שלב 2 — העלאת הקבצים
**אפשרות א׳ — דרך הדפדפן (קל יותר):**
1. בריפוזיטורי הריק לחץ **uploading an existing file**
2. גרור את כל תיקיית הפרויקט
3. לחץ **Commit changes**

**אפשרות ב׳ — דרך Git (מקצועי יותר):**
```bash
git init
git add .
git commit -m "Initial commit - לי-אור website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lior-website.git
git push -u origin main
```

---

## הוראות Deploy ב-Vercel

### שלב 1 — חיבור לגיטהאב
1. היכנס ל-[vercel.com](https://vercel.com) עם חשבון GitHub
2. לחץ **Add New → Project**
3. בחר את הריפוזיטורי `lior-website`

### שלב 2 — הגדרות Build
- **Framework Preset:** `Other`
- **Build Command:** (השאר ריק)
- **Output Directory:** `.` (נקודה = ספרייה הראשית)
- לחץ **Deploy**

### שלב 3 — דומיין מותאם אישית (אופציונלי)
1. ב-Vercel → Project Settings → Domains
2. הוסף את הדומיין שלך
3. עדכן את רשומות ה-DNS אצל ספק הדומיין

---

## הגדרות נדרשות לאחר העלאה

### 1. עדכון מספר טלפון
בקבצים `index.html` — חפש את:
```
050-000-0000
```
והחלף במספר האמיתי שלך.

חפש גם את:
```
https://wa.me/972500000000
```
והחלף ב-`https://wa.me/972XXXXXXXXX` (המספר שלך ללא 0 בהתחלה).

### 2. חיבור טופס יצירת קשר
1. הירשם ל-[formspree.io](https://formspree.io) (חינמי עד 50 הגשות/חודש)
2. צור טופס חדש → קבל Form ID
3. ב-`index.html` החלף:
   ```
   YOUR_FORM_ID
   ```
   ב-ID שקיבלת (למשל: `xyzabcde`)

### 3. תמונת Hero
ניתן לשנות את תמונת הרקע של ה-Hero ב-`style.css`:
```css
.hero-img {
  background: url('images/project1.jpeg') center/cover no-repeat;
}
```
החלף `project1.jpeg` בתמונה המועדפת עליך.

---

## הוספת תמונות נוספות
פשוט הוסף תמונות לתיקיית `images/` ועדכן את ה-HTML בסקציית הפורטפוליו.

---

## רישיון
כל הזכויות שמורות © 2025 לי-אור
