'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/blog')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Error fetching posts:', err));
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <div className="logo-text">IronMind</div>
        </div>
        <div className="nav-links">
          <Link href="/" className="nav-link">בית</Link>
          <Link href="/blog" className="nav-link">בלוג</Link>
        </div>
        <Link href="/" className="nav-cta">← חזור לבית</Link>
      </nav>

      <section className="section section-dark">
        <div className="section-header">
          <span className="section-tag">📝 בלוג</span>
          <h2 className="section-h2">מאמרים שימושיים</h2>
          <div className="section-line"></div>
        </div>

        <div className="blog-grid">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <a className="blog-card">
                  <div className="blog-header">
                    <h3 className="blog-title">{post.title}</h3>
                    <div className="blog-date">{new Date(post.date).toLocaleDateString('he-IL')}</div>
                  </div>
                  <div className="blog-excerpt">{post.excerpt}</div>
                </a>
              </Link>
            ))
          ) : (
            <div style={{ textAlign: 'center', color: '#94a3b8' }}>אין מאמרים זמינים עדיין</div>
          )}
        </div>
      </section>

      <div className="divider"></div>

      <section className="section section-dark">
        <div className="footer-bar">
          <div className="footer-copy">© 2024 IronMind. כל הזכויות שמורות.</div>
        </div>
      </section>
    </>
  );
}
