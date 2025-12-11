import React from 'react';

// PUBLIC_INTERFACE
export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary'|'secondary'|'ghost'|'success'|'warning'|'error' }) {
  /** Themed button with variants. */
  const { variant = 'primary', className = '', ...rest } = props;
  const classes = ['btn'];
  if (variant === 'secondary') classes.push('secondary');
  if (variant === 'ghost') classes.push('ghost');
  if (variant === 'success') classes.push('success');
  if (variant === 'warning') classes.push('warning');
  if (variant === 'error') classes.push('error');
  return <button {...rest} className={`${classes.join(' ')} ${className}`} />;
}
