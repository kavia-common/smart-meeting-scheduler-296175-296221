import React, { useRef, useState } from 'react';
import Card from '../components/Card.tsx';
import Input from '../components/Input.tsx';
import Button from '../components/Button.tsx';
import Toolbar from '../components/Toolbar.tsx';
import { useCase } from '../context/CaseContext.tsx';

// PUBLIC_INTERFACE
export default function FollowUpEmail() {
  /** Subject and body editor with copy-to-clipboard action. */
  const { state, dispatch } = useCase();
  const [subject, setSubject] = useState(state.followUpEmail.subject);
  const ref = useRef<HTMLDivElement>(null);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggle = (t: 'bold'|'italic'|'underline') => {
    if (t === 'bold') setBold(b => !b);
    if (t === 'italic') setItalic(i => !i);
    if (t === 'underline') setUnderline(u => !u);
    document.execCommand(t);
  };

  const save = () => {
    dispatch({ type: 'SET_EMAIL', payload: { subject, body: ref.current?.innerText || '' } });
  };

  const copy = async () => {
    const text = ref.current?.innerText || '';
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore in mock
    }
  };

  return (
    <Card title="Follow Up Email" subtitle="Compose and copy your follow-up message.">
      <Input label="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <div style={{ display: 'flex', gap: 8, margin: '10px 0' }}>
        <Toolbar bold={bold} italic={italic} underline={underline} onToggle={toggle} />
        {copied && <span className="badge success">Copied</span>}
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
          minHeight: 180,
          background: 'white',
          outline: 'none',
          whiteSpace: 'pre-wrap',
        }}
        suppressContentEditableWarning
      >
        {state.followUpEmail.body}
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
        <Button onClick={save}>Save</Button>
        <Button variant="secondary" onClick={copy}>Copy to Clipboard</Button>
      </div>
    </Card>
  );
}
