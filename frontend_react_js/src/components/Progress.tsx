import React from 'react';

// PUBLIC_INTERFACE
export default function Progress({ value, ariaLabel }: { value: number; ariaLabel?: string }) {
  /** Progress bar with ARIA attributes for accessibility. */
  const safe = Math.min(100, Math.max(0, value));
  return (
    <div className="progress" role="progressbar" aria-label={ariaLabel || 'Progress'} aria-valuemin={0} aria-valuemax={100} aria-valuenow={safe}>
      <div className="bar" style={{ width: `${safe}%` }} />
    </div>
  );
}
