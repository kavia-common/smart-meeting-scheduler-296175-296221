import React from 'react';

// PUBLIC_INTERFACE
export default function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string }) {
  /** Labeled text area control. */
  const { label, id, ...rest } = props;
  const inputId = id || `ta_${Math.random().toString(36).slice(2)}`;
  return (
    <div className="form-col">
      {label && <label className="label" htmlFor={inputId}>{label}</label>}
      <textarea id={inputId} className="textarea" {...rest} />
    </div>
  );
}
