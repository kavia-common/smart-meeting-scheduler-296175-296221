import React from 'react';

// PUBLIC_INTERFACE
export default function Card({ title, subtitle, children }: { title?: string; subtitle?: string; children: React.ReactNode }) {
  /** Generic card container used across screens. */
  return (
    <section className="card" role="region" aria-label={title || 'Card'}>
      {title && <h3 className="section-title">{title}</h3>}
      {subtitle && <div className="muted" style={{ marginBottom: 8 }}>{subtitle}</div>}
      {children}
    </section>
  );
}
