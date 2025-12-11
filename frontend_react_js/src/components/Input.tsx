import React from 'react';

// PUBLIC_INTERFACE
export default function Input(props: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  /** Labeled input control. */
  const { label, id, ...rest } = props;
  const inputId = id || `in_${Math.random().toString(36).slice(2)}`;
  return (
    <div className="form-col">
      {label && <label className="label" htmlFor={inputId}>{label}</label>}
      <input id={inputId} className="input" {...rest} />
    </div>
  );
}
