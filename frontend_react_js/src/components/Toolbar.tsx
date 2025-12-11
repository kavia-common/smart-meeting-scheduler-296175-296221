import React from 'react';

// PUBLIC_INTERFACE
export default function Toolbar({ bold, italic, underline, onToggle }: {
  bold: boolean; italic: boolean; underline: boolean; onToggle: (t: 'bold'|'italic'|'underline') => void;
}) {
  /** Simple formatting toolbar for mock rich text areas. */
  return (
    <div className="toolbar" role="toolbar" aria-label="Formatting">
      <button className={`tool ${bold ? 'active' : ''}`} aria-pressed={bold} onClick={() => onToggle('bold')}><b>B</b></button>
      <button className={`tool ${italic ? 'active' : ''}`} aria-pressed={italic} onClick={() => onToggle('italic')}><i>I</i></button>
      <button className={`tool ${underline ? 'active' : ''}`} aria-pressed={underline} onClick={() => onToggle('underline')}><u>U</u></button>
    </div>
  );
}
