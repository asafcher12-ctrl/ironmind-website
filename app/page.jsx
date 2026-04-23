'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    frameType: 'תאים עיצוביים',
    budget: '5000-10000',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `שם: ${formData.name}\nאימייל: ${formData.email}\nטלפון: ${formData.phone}\nסוג מסגרות: ${formData.frameType}\nתקציב: ${formData.budget}\nפרטים: ${formData.details}`;
    const whatsappUrl = `https://wa.me/972501234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="logo">
          <div className="logo-text">IronMind</div>
        </div>
        <div className="nav-links">
          <Link href="#services" className="nav-link">שירותים</Link>
          <Link href="#gallery" className="nav-link">גלריה</Link>
          <Link href="#estimator" className="nav-link">הצעת מחיר</Link>
          <Link href="#contact" className="nav-link">צור קשר</Link>
          <Link href="/blog" className="nav-link">בלוג</Link>
        </div>
        <Link href="#estimator" className="nav-cta">✦ הצעת מחיר חכמה</Link>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-grid-lines"></div>
        
        {/* Text Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-dot"></span>
            <span className="hero-badge-text">🎯 עיצוב מקצועי</span>
          </div>
          <h1 className="hero-h1">
           סוגרים לכם את הפינה במסגרות ופרגולות
            <br />
            <span className="hero-accent">בעיצוב מדויק</span>
          </h1>
          <p className="hero-sub">
           משלב המדידה ועד ההתקנה בשטח – אנחנו דואגים להכל. גדרות, שערים ופתרונות הצללה מאלומיניום בגימור נקי, מחירים הוגנים ועמידה בלוחות זמנים.
          </p>
          <div className="hero-btns">
            <Link href="#estimator" className="btn-primary">
              ✦ בקש הצעת מחיר
            </Link>
            <a href="#gallery" className="btn-secondary">
              📸 צפה בעבודות שלנו
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">500+</div>
              <div className="stat-label">פרויקטים מוצלחים</div>
            </div>
            <div>
              <div className="stat-num">15+</div>
              <div className="stat-label">שנות ניסיון</div>
            </div>
            <div>
              <div className="stat-num">98%</div>
              <div className="stat-label">שביעות רצון</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img src="/7.jpeg" alt="פרויקט IronMind" />
        </div>
      </section>

      <div className="divider"></div>

      {/* Services Section */}
      <section id="services" className="section section-mid">
        <div className="section-header">
          <span className="section-tag">🛠️ שירותים</span>
          <h2 className="section-h2">מה אנו מציעים</h2>
          <div className="section-line"></div>
        </div>
        <div className="services">
          <div className="svc-card">
            <div className="svc-icon">🎨</div>
            <div className="svc-title">עיצוב מותאם</div>
            <div className="svc-sub">Custom Design</div>
            <div className="svc-desc">עיצוב מותאם אישית לפי דרישותיך</div>
          </div>
          <div className="svc-card">
            <div className="svc-icon">🔧</div>
            <div className="svc-title">ייצור מקצועי</div>
            <div className="svc-sub">Professional Manufacturing</div>
            <div className="svc-desc">ייצור בחומרים איכותיים ודקויקים</div>
          </div>
          <div className="svc-card">
            <div className="svc-icon">📦</div>
            <div className="svc-title">הובלה מהירה</div>
            <div className="svc-sub">Fast Delivery</div>
            <div className="svc-desc">משלוח בזמן ובמחיר שיתאים לך</div>
          </div>
          <div className="svc-card">
            <div className="svc-icon">💬</div>
            <div className="svc-title">תמיכה ישירה</div>
            <div className="svc-sub">Direct Support</div>
            <div className="svc-desc">צוות תמיכה זמין 24/7</div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Gallery Section */}
      <section id="gallery" className="section section-dark">
        <div className="section-header">
          <span className="section-tag">📸 גלריה</span>
          <h2 className="section-h2">עבודות קודמות</h2>
          <div className="section-line"></div>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/4.jpeg" alt="פרגולה אלומיניום" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="gallery-overlay"></div>
            <div className="gallery-caption">פרגולה אלומיניום</div>
            <div className="amber-bar"></div>
          </div>
          <div className="gallery-item">
            <img src="/5.jpeg" alt="שער ברזל" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="gallery-overlay"></div>
            <div className="gallery-caption">שער ברזל מודרני</div>
            <div className="amber-bar"></div>
          </div>
          <div className="gallery-item">
            <img src="/6.jpeg" alt="פרגולה עץ וברזל" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="gallery-overlay"></div>
            <div className="gallery-caption">פרגולה עץ וברזל</div>
            <div className="amber-bar"></div>
          </div>
          <div className="gallery-item">
            <img src="/7.jpeg" alt="מעקה מדרגות" style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '16/9' }} />
            <div className="gallery-overlay"></div>
            <div className="gallery-caption">מעקה מדרגות</div>
            <div className="amber-bar"></div>
          </div>
          <div className="gallery-item">
            <img src="/8.jpeg" alt="פרגולה גדולה" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="gallery-overlay"></div>
            <div className="gallery-caption">פרגולה גדולה</div>
            <div className="amber-bar"></div>
          </div>
        </div>
        <p style={{ textAlign: 'center', color: '#475569', fontSize: '11px', marginTop: '12px' }}>
          ✨ עוד עבודות ממתינות לך - בקש הצעת מחיר והתחל היום!
        </p>
      </section>

      <div className="divider"></div>

      {/* Estimator Section */}
      <section id="estimator" className="section section-mid">
        <div className="section-header">
          <span className="section-tag">💰 מחשבון הצעות מחיר</span>
          <h2 className="section-h2">קבל הצעת מחיר מיידית</h2>
          <div className="section-line"></div>
        </div>
        <div style={{ maxWidth: '540px', margin: '0 auto', background: '#0c1628', border: '1px solid #1e293b', borderRadius: '4px', padding: '20px' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '999px', padding: '4px 12px', marginBottom: '10px' }}>
              <span style={{ color: '#fbbf24', fontSize: '10px', fontWeight: '700', letterSpacing: '0.08em' }}>🤖 מופעל AI</span>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">📛 שם מלא</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="שם שלך"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">📧 אימייל</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="אימייל שלך"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">📱 טלפון</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="05X-XXXXXXX"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">🎨 סוג מסגרות</label>
                <select
                  name="frameType"
                  value={formData.frameType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option>תאים עיצוביים</option>
                  <option>מסגרות עץ</option>
                  <option>מסגרות מתכת</option>
                  <option>מסגרות אחרות</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">💵 טווח תקציב</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option>5000-10000</option>
                  <option>10000-20000</option>
                  <option>20000-50000</option>
                  <option>50000+</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">💬 פרטים נוספים</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                className="form-textarea"
                placeholder="ספר לנו על הפרויקט שלך..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              ✦ שלח דרך WhatsApp
            </button>
            <div className="form-note">נשלח ישירות למנהל הפרויקט</div>
          </form>
        </div>
      </section>

      <div className="divider"></div>

      {/* Contact Section */}
      <section id="contact" className="section section-dark">
        <div className="section-header">
          <span className="section-tag">📞 צור קשר</span>
          <h2 className="section-h2">בואו נעבוד ביחד</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📱</div>
            <div className="contact-label">טלפון</div>
            <div className="contact-val">050-1234-567</div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <div className="contact-label">אימייל</div>
            <div className="contact-val">info@ironmind.co.il</div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <div className="contact-label">כתובת</div>
            <div className="contact-val">תל אביב, ישראל</div>
          </div>
        </div>
        <div className="footer-bar">
          <div className="footer-copy">© 2024 IronMind. כל הזכויות שמורות.</div>
          <div className="footer-copy">עיצוב בעברית RTL</div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer" className="wa-btn" title="WhatsApp">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.982 1.313l-.356.214-3.71-.973.992 3.63-.235.374a9.86 9.86 0 001.515 5.394l.184.308 3.519.909-.391-.124c1.210.334 2.51.331 3.715.121 3.402-.608 6.021-3.6 6.022-7.044 0-1.863-.755-3.616-2.125-4.932a6.95 6.95 0 00-4.945-2.087M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"></path>
        </svg>
      </a>
    </>
  );
}
