import React from 'react';

// PUBLIC_INTERFACE
export default function Badge({ children, variant = 'info' }: { children: React.ReactNode; variant?: 'success'|'warning'|'error'|'info' }) {
  /** Status indicator badge. */
  return <span className={`badge ${variant}`}>{children}</span>;
}
