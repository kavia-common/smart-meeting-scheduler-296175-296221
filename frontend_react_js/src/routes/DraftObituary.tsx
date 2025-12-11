import React, { useEffect, useRef, useState } from 'react';
import Card from '../components/Card.tsx';
import Toolbar from '../components/Toolbar.tsx';
import Button from '../components/Button.tsx';
import { useCase } from '../context/CaseContext.tsx';

// PUBLIC_INTERFACE
export default function DraftObituary() {
  /** Rich text-like editing using contentEditable and a simple toolbar. */
  const { state, dispatch } = useCase();
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerText = state.draftObituary;
    }
  }, [state.draftObituary]);

  const toggle = (t: 'bold'|'italic'|'underline') => {
    if (t === 'bold') setBold(b => !b);
    if (t === 'italic') setItalic(i => !i);
    if (t === 'underline') setUnderline(u => !u);
    document.execCommand(t);
  };

  const save = () => {
    const val = ref.current?.innerText || '';
    dispatch({ type: 'SET_DRAFT_OBIT', payload: val });
    setSaved(true);
    setTimeout(() => setSaved(false), 1200);
  };

  return (
    <Card title="Draft Obituary" subtitle="Edit the obituary draft.">
      <div style={{ display: 'flex', gap: 12, marginBottom: 10, alignItems: 'center' }}>
        <Toolbar bold={bold} italic={italic} underline={underline} onToggle={toggle} />
        {saved && <span className="badge success">Saved</span>}
      </div>
      <div
        ref={ref}
        role="textbox"
        aria-multiline="true"
        contentEditable
        style={{
          padding: 12,
          border: '1px solid rgba(10,26,47,0.12)',
          borderRadius: 10,
          minHeight: 220,
          background: 'white',
          outline: 'none',
          whiteSpace: 'pre-wrap',
        }}
      />
      <div style={{ marginTop: 10 }}>
        <Button onClick={save}>Save</Button>
      </div>
    </Card>
  );
}
