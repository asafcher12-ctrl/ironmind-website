/**
 * IronMind - Landing Page
 * אתר נחיתה עבור עסק מסגרות מקצועי
 *
 * Stack: React + Tailwind CSS + Lucide React
 * RTL: Full Hebrew support (dir="rtl")
 * Backend Integration: AI Estimator is ready for FastAPI endpoint at /api/estimate
 *
 * Sections:
 *  1. Navbar
 *  2. Hero
 *  3. Services Grid
 *  4. AI Estimator (IronMind Touch)
 *  5. Gallery
 *  6. Contact / Footer
 *  7. Floating WhatsApp Button
 */

import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronLeft,
  Shield,
  Layers,
  Columns,
  Wrench,
  Cpu,
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = "972501234567"; // <-- Replace with real number
const WHATSAPP_MESSAGE = encodeURIComponent("שלום! ראיתי את האתר שלכם ואשמח לקבל הצעת מחיר.");


const LOGO_BASE64 = "data:image/jpeg;base64,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";

const NAV_LINKS = [
  { label: "שירותים", href: "#services" },
  { label: "גלריה", href: "#gallery" },
  { label: "הצעת מחיר", href: "#estimator" },
  { label: "צור קשר", href: "#contact" },
];

const SERVICES = [
  {
    icon: Shield,
    title: "שערים",
    subtitle: "Gates",
    description:
      "שערי כניסה מרשימים לבתים ועסקים. עיצוב מותאם אישית, חומרים איכותיים, וביצוע מושלם.",
    color: "from-amber-600/20 to-amber-500/5",
    border: "border-amber-500/30",
  },
  {
    icon: Layers,
    title: "פרגולות",
    subtitle: "Pergolas",
    description:
      "פרגולות אלומיניום, ברזל ועץ. שילובים ייחודיים של חומרים המעניקים אופי ונוכחות לכל חצר.",
    color: "from-zinc-700/30 to-zinc-800/5",
    border: "border-zinc-500/30",
  },
  {
    icon: Columns,
    title: "מעקות",
    subtitle: "Railings",
    description:
      "מעקות מדרגות ומרפסות בסגנונות מודרניים וקלאסיים. בטיחות ואסתטיקה בפרויקט אחד.",
    color: "from-slate-700/30 to-slate-800/5",
    border: "border-slate-500/30",
  },
  {
    icon: Wrench,
    title: "עבודות מסגרות מותאמות",
    subtitle: "Custom Ironwork",
    description:
      "כל רעיון שיש לכם – נגשים אותו למציאות. ריהוט מתכת, עיצוב תעשייתי, ופתרונות ייחודיים.",
    color: "from-orange-900/20 to-orange-800/5",
    border: "border-orange-500/20",
  },
];

const PROJECT_TYPES = [
  { value: "gate", label: "שער כניסה" },
  { value: "pergola", label: "פרגולה" },
  { value: "railing", label: "מעקה" },
  { value: "custom", label: "עבודה מותאמת" },
];

const MATERIALS = [
  { value: "iron", label: "ברזל" },
  { value: "aluminum", label: "אלומיניום" },
  { value: "wood_iron", label: "ברזל + עץ" },
  { value: "stainless", label: "נירוסטה" },
];

// Gallery images - replace src with actual project photos
const GALLERY_IMAGES = [
  { src: "/images/project1.jpg", alt: "פרגולת אלומיניום מרפסת" },
  { src: "/images/project2.jpg", alt: "שער ברזל מודרני" },
  { src: "/images/project3.jpg", alt: "פרגולת עץ וברזל" },
  { src: "/images/project4.jpg", alt: "מעקה מדרגות" },
  { src: "/images/project5.jpg", alt: "פרגולה גדולה" },
  { src: "/images/project6.jpg", alt: "עבודת מסגרות מותאמת" },
];

// ─── HOOK: Intersection Observer for scroll animations ────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

// ─── COMPONENT: Navbar ────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/95 backdrop-blur-md border-b border-zinc-800/60 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={LOGO_BASE64} alt="IronMind Logo" className="w-10 h-10 object-contain" />
          <span className="text-zinc-100 font-bold text-lg tracking-wide">IronMind</span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-zinc-400 hover:text-amber-400 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#estimator"
          className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-bold px-4 py-2 rounded-sm transition-colors duration-200 shadow-lg shadow-amber-500/20"
        >
          <Sparkles size={14} />
          הצעת מחיר חכמה
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-300 hover:text-amber-400 transition-colors p-1"
          aria-label="תפריט"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full right-0 left-0 bg-slate-950/98 border-b border-zinc-800 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover:text-amber-400 font-medium py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#estimator"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-sm transition-colors"
          >
            <Sparkles size={14} />
            הצעת מחיר חכמה
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── COMPONENT: Hero ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Industrial grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(251,191,36,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251,191,36,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      {/* Decorative diagonal bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6 bg-amber-500/5">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-400 text-xs font-medium tracking-widest uppercase">מסגרות מקצועיות</span>
        </div>

        {/* H1 */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-100 leading-tight mb-6"
          style={{ fontFamily: "'Heebo', sans-serif", lineHeight: 1.15 }}
        >
          אומנות בברזל.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-300 to-amber-500">
            פתרונות מסגרות מתקדמים
          </span>
          <br />
          לבית ולעסק.
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          שערים, פרגולות ומעקות בעיצוב אישי – עם ניסיון של שנים, חומרים מהמובחרים,
          ושירות שמדבר בעד עצמו.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#estimator"
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-bold px-7 py-3.5 rounded-sm transition-all duration-200 shadow-xl shadow-amber-500/25 text-base w-full sm:w-auto justify-center"
          >
            <Sparkles size={16} />
            קבל הצעת מחיר חכמה
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 font-semibold px-7 py-3.5 rounded-sm transition-all duration-200 text-base w-full sm:w-auto justify-center"
          >
            <Phone size={16} />
            דבר איתנו עכשיו
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex items-center justify-center gap-10 flex-wrap">
          {[
            { num: "200+", label: "פרויקטים" },
            { num: "10+", label: "שנות ניסיון" },
            { num: "100%", label: "שביעות רצון" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black text-amber-400">{num}</div>
              <div className="text-zinc-500 text-sm mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-zinc-400" />
        <ChevronLeft size={14} className="text-zinc-400 rotate-270 -rotate-90" />
      </div>
    </section>
  );
}

// ─── COMPONENT: Services ──────────────────────────────────────────────────────
function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" className="py-24 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-amber-500 text-xs font-semibold tracking-widest uppercase">מה אנחנו עושים</span>
          <h2 className="text-3xl md:text-4xl font-black text-zinc-100 mt-2">השירותים שלנו</h2>
          <div className="mt-4 h-px w-16 bg-amber-500 mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`
                  group relative border ${service.border} rounded-sm p-6
                  bg-gradient-to-b ${service.color} bg-slate-900
                  hover:border-amber-500/60 transition-all duration-300
                  cursor-pointer
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-sm bg-slate-800 border border-zinc-700/60 group-hover:bg-amber-500/10 group-hover:border-amber-500/40 transition-all duration-300">
                  <Icon size={20} className="text-amber-400" />
                </div>
                <h3 className="text-zinc-100 font-bold text-lg mb-1">{service.title}</h3>
                <p className="text-zinc-600 text-xs mb-3 tracking-wider font-mono">{service.subtitle}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>

                {/* Hover arrow */}
                <div className="mt-4 flex items-center gap-1 text-amber-500 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>למידע נוסף</span>
                  <ArrowLeft size={12} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── COMPONENT: AI Estimator ──────────────────────────────────────────────────
// TODO: Connect to FastAPI backend at POST /api/estimate
function AIEstimator() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({
    projectType: "",
    material: "",
    width: "",
    height: "",
    notes: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.projectType || !form.phone) {
      setError("נא למלא סוג פרויקט ומספר טלפון");
      return;
    }
    setError("");
    setLoading(true);
    try {
      /**
       * BACKEND INTEGRATION POINT
       * Replace with actual API call:
       * const res = await fetch('/api/estimate', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify(form),
       * });
       */
      await new Promise((r) => setTimeout(r, 1800)); // Simulated delay
      setSubmitted(true);
    } catch {
      setError("שגיאה בשליחה. נסה שוב.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="estimator" className="py-24 bg-slate-950 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-bl from-amber-500/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 mb-4 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5">
            <Cpu size={13} className="text-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">IronMind AI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-zinc-100">הצעת מחיר חכמה</h2>
          <p className="text-zinc-400 mt-3 text-base max-w-xl mx-auto">
            מלא פרטים בסיסיים על הפרויקט שלך ונחזור אליך עם הערכת מחיר ראשונית תוך שעות ספורות.
          </p>
          <div className="mt-4 h-px w-16 bg-amber-500 mx-auto" />
        </div>

        {/* Form card */}
        <div
          className={`
            border border-zinc-800 rounded-sm bg-slate-900/80 backdrop-blur-sm p-6 md:p-8
            transition-all duration-700 delay-200
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center mx-auto mb-4">
                <Sparkles size={28} className="text-amber-400" />
              </div>
              <h3 className="text-zinc-100 text-xl font-bold mb-2">הפנייה התקבלה!</h3>
              <p className="text-zinc-400">ניצור איתך קשר בהקדם עם הצעת מחיר מותאמת אישית.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Row 1: Project type & Material */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 text-sm mb-1.5 font-medium">סוג פרויקט *</label>
                  <select
                    value={form.projectType}
                    onChange={handleChange("projectType")}
                    className="w-full bg-slate-800 border border-zinc-700 text-zinc-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="">בחר...</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm mb-1.5 font-medium">חומר עיקרי</label>
                  <select
                    value={form.material}
                    onChange={handleChange("material")}
                    className="w-full bg-slate-800 border border-zinc-700 text-zinc-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="">בחר...</option>
                    {MATERIALS.map((m) => (
                      <option key={m.value} value={m.value}>{m.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2: Dimensions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 text-sm mb-1.5 font-medium">רוחב משוער (מ"ר)</label>
                  <input
                    type="number"
                    placeholder='למשל: 3.5'
                    value={form.width}
                    onChange={handleChange("width")}
                    className="w-full bg-slate-800 border border-zinc-700 text-zinc-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder-zinc-600"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm mb-1.5 font-medium">גובה משוער (מ"ר)</label>
                  <input
                    type="number"
                    placeholder='למשל: 2.2'
                    value={form.height}
                    onChange={handleChange("height")}
                    className="w-full bg-slate-800 border border-zinc-700 text-zinc-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder-zinc-600"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-zinc-400 text-sm mb-1.5 font-medium">פרטים נוספים</label>
                <textarea
                  rows={3}
                  placeholder="תאר את הפרויקט, העדפות עיצוב, מיקום..."
                  value={form.notes}
                  onChange={handleChange("notes")}
                  className="w-full bg-slate-800 border border-zinc-700 text-zinc-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder-zinc-600 resize-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-zinc-400 text-sm mb-1.5 font-medium">מספר טלפון *</label>
                <input
                  type="tel"
                  placeholder="05X-XXXXXXX"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  className="w-full bg-slate-800 border border-zinc-700 text-zinc-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder-zinc-600"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-400 text-sm border border-red-500/20 bg-red-500/5 rounded-sm px-3 py-2">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold py-3.5 rounded-sm transition-colors duration-200 text-base shadow-lg shadow-amber-500/20"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-950/40 border-t-slate-950 rounded-full animate-spin" />
                    מעבד...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    שלח בקשה להצעת מחיר
                  </>
                )}
              </button>

              <p className="text-zinc-600 text-xs text-center">
                * הפרטים שלך מוגנים ולא יועברו לצד שלישי
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── COMPONENT: Gallery ───────────────────────────────────────────────────────
function Gallery() {
  const [ref, inView] = useInView(0.05);

  // Placeholder gradient tiles when real images aren't loaded
  const placeholders = [
    "from-slate-800 to-slate-900",
    "from-zinc-800 to-zinc-900",
    "from-slate-700 to-slate-800",
    "from-zinc-700 to-zinc-800",
    "from-slate-800 to-slate-700",
    "from-zinc-900 to-zinc-800",
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-amber-500 text-xs font-semibold tracking-widest uppercase">הפרויקטים שלנו</span>
          <h2 className="text-3xl md:text-4xl font-black text-zinc-100 mt-2">גלריית עבודות</h2>
          <div className="mt-4 h-px w-16 bg-amber-500 mx-auto" />
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`
                group relative overflow-hidden rounded-sm aspect-square
                bg-gradient-to-br ${placeholders[i]}
                border border-zinc-800/60
                transition-all duration-700
                ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                ${i === 0 || i === 4 ? "md:aspect-[4/5]" : ""}
              `}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Real image (will load if path is correct) */}
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onLoad={(e) => e.target.classList.replace("opacity-0", "opacity-100")}
              />

              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <Wrench size={32} className="text-zinc-500" />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-zinc-200 text-sm font-medium">{img.alt}</p>
              </div>

              {/* Amber accent line on hover */}
              <div className="absolute bottom-0 right-0 left-0 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-600 text-sm mt-6">
          עוד פרויקטים בעמוד האינסטגרם שלנו ·{" "}
          <a
            href="https://instagram.com/amit_iron_and_wood"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-2"
          >
            @amit_iron_and_wood
          </a>
        </p>
      </div>
    </section>
  );
}

// ─── COMPONENT: Contact / Footer ──────────────────────────────────────────────
function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" className="py-24 bg-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-amber-500 text-xs font-semibold tracking-widest uppercase">יצירת קשר</span>
          <h2 className="text-3xl md:text-4xl font-black text-zinc-100 mt-2">בואו נדבר על הפרויקט שלך</h2>
          <div className="mt-4 h-px w-16 bg-amber-500 mx-auto" />
        </div>

        <div
          className={`
            grid grid-cols-1 md:grid-cols-3 gap-6 mb-16
            transition-all duration-700 delay-200
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          {[
            {
              icon: Phone,
              label: "טלפון",
              value: "050-123-4567",
              href: "tel:+972501234567",
            },
            {
              icon: Mail,
              label: 'דוא"ל',
              value: "info@ironmind.co.il",
              href: "mailto:info@ironmind.co.il",
            },
            {
              icon: MapPin,
              label: "אזור פעילות",
              value: "מרכז הארץ והסביבה",
              href: "#",
            },
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="group flex flex-col items-center gap-3 border border-zinc-800 hover:border-amber-500/40 bg-slate-900 rounded-sm p-6 transition-all duration-300 text-center"
            >
              <div className="w-10 h-10 rounded-sm bg-slate-800 border border-zinc-700/60 group-hover:bg-amber-500/10 group-hover:border-amber-500/40 flex items-center justify-center transition-all duration-300">
                <Icon size={18} className="text-amber-400" />
              </div>
              <div>
                <div className="text-zinc-500 text-xs mb-0.5">{label}</div>
                <div className="text-zinc-200 font-semibold">{value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer bottom bar */}
        <div className="border-t border-zinc-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-sm bg-amber-500 flex items-center justify-center">
              <span className="text-slate-950 font-black text-xs">IM</span>
            </div>
            <span className="text-zinc-500 text-sm">IronMind — מסגרות איכות</span>
          </div>
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} כל הזכויות שמורות
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── COMPONENT: Floating WhatsApp Button ──────────────────────────────────────
function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="פתח שיחת וואטסאפ"
      className="
        fixed bottom-6 left-6 z-50
        w-14 h-14 rounded-full
        bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#17a84f]
        flex items-center justify-center
        shadow-2xl shadow-green-500/30
        transition-all duration-200 hover:scale-105 active:scale-95
      "
    >
      {/* WhatsApp SVG icon */}
      <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// ─── ROOT COMPONENT ───────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    // RTL wrapper for Hebrew
    <div dir="rtl" lang="he" className="bg-slate-950 min-h-screen">
      {/* Google Font: Heebo (Hebrew-optimized) — add to index.html:
          <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
      */}
      <style>{`
        * { font-family: 'Heebo', 'Arial Hebrew', sans-serif; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #f59e0b; }
      `}</style>

      <Navbar />
      <Hero />
      <Services />
      <AIEstimator />
      <Gallery />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}
