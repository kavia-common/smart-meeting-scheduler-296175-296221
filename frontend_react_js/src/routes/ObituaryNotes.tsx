import React, { useState } from 'react';
import Card from '../components/Card.tsx';
import TextArea from '../components/TextArea.tsx';
import Button from '../components/Button.tsx';
import { useCase } from '../context/CaseContext.tsx';

// PUBLIC_INTERFACE
export default function ObituaryNotes() {
  /** Freeform notes simulated from transcript. */
  const { state, dispatch } = useCase();
  const [local, setLocal] = useState(state.obituaryNotes);
  const [saved, setSaved] = useState(false);

  const save = () => {
    dispatch({ type: 'SET_OBIT_NOTES', payload: local });
    setSaved(true);
    setTimeout(() => setSaved(false), 1200);
  };

  return (
    <Card title="Obituary Notes" subtitle="Edit notes derived from transcript.">
      <TextArea value={local} onChange={(e) => setLocal(e.target.value)} aria-label="Obituary notes" />
      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
        <Button onClick={save}>Save</Button>
        {saved && <span className="badge success">Saved</span>}
      </div>
    </Card>
  );
}
