// =============================================
// לי-אור | Main JavaScript
// =============================================

// ── Sticky Nav ──────────────────────────────
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Mobile Hamburger ─────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// ── Scroll Reveal ─────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ── Contact Form ──────────────────────────────
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

if (form) {
  form.addEventListener('submit', async (e) => {
    // If Formspree is not configured yet, prevent default and show message
    const action = form.getAttribute('action');
    if (action && action.includes('YOUR_FORM_ID')) {
      e.preventDefault();
      submitBtn.textContent = '⚠️ יש לחבר את הטופס ל-Formspree תחילה';
      submitBtn.style.background = '#8B5E3C';
      setTimeout(() => {
        submitBtn.textContent = 'שלח פנייה ←';
        submitBtn.style.background = '';
      }, 3000);
      return;
    }

    // Real Formspree submission
    e.preventDefault();
    submitBtn.textContent = 'שולח...';
    submitBtn.disabled = true;

    try {
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        submitBtn.textContent = '✓ הפנייה נשלחה — ניצור קשר בקרוב';
        submitBtn.classList.add('success');
        form.reset();
      } else {
        throw new Error('שגיאה בשליחה');
      }
    } catch {
      submitBtn.textContent = '❌ שגיאה — נסה שוב או שלח בוואטסאפ';
      submitBtn.style.background = '#8B3C3C';
      submitBtn.disabled = false;
    }
  });
}
