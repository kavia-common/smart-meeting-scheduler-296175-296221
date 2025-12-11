import React, { useState } from 'react';
import Card from '../components/Card.tsx';
import Button from '../components/Button.tsx';
import { useCase } from '../context/CaseContext.tsx';

// PUBLIC_INTERFACE
export default function ActionItems() {
  /** Checklist of tasks with mock persistence in context. */
  const { state, dispatch } = useCase();
  const [text, setText] = useState('');

  const add = () => {
    if (!text.trim()) return;
    dispatch({ type: 'ADD_ACTION_ITEM', payload: { id: Math.random().toString(36).slice(2), text, done: false } });
    setText('');
  };

  const toggle = (id: string) => {
    const it = state.actionItems.find(a => a.id === id);
    if (!it) return;
    dispatch({ type: 'UPDATE_ACTION_ITEM', payload: { ...it, done: !it.done } });
  };

  const updateText = (id: string, val: string) => {
    const it = state.actionItems.find(a => a.id === id);
    if (!it) return;
    dispatch({ type: 'UPDATE_ACTION_ITEM', payload: { ...it, text: val } });
  };

  const remove = (id: string) => dispatch({ type: 'REMOVE_ACTION_ITEM', payload: id });

  return (
    <Card title="Action Items" subtitle="Track tasks and follow-ups.">
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input className="input" placeholder="New action item..." value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? add() : undefined} />
        <Button onClick={add}>Add</Button>
      </div>
      <div style={{ display: 'grid', gap: 8 }}>
        {state.actionItems.map(item => (
          <div key={item.id} className="card" style={{ padding: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
            <input type="checkbox" checked={item.done} onChange={() => toggle(item.id)} aria-label={`Toggle ${item.text}`} />
            <input className="input" value={item.text} onChange={(e) => updateText(item.id, e.target.value)} />
            <Button variant="error" onClick={() => remove(item.id)}>Remove</Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
