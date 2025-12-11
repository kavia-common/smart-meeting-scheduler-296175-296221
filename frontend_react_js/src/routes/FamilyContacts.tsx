import React, { useState } from 'react';
import Card from '../components/Card.tsx';
import Table from '../components/Table.tsx';
import Button from '../components/Button.tsx';
import Input from '../components/Input.tsx';
import { useCase } from '../context/CaseContext.tsx';

type Draft = { name: string; relationship: string; phone: string; primary: boolean };

// PUBLIC_INTERFACE
export default function FamilyContacts() {
  /** Manage family contacts, local state only. */
  const { state, dispatch } = useCase();
  const [draft, setDraft] = useState<Draft>({ name: '', relationship: '', phone: '', primary: false });

  const add = () => {
    if (!draft.name) return;
    dispatch({
      type: 'ADD_CONTACT',
      payload: { id: Math.random().toString(36).slice(2), ...draft },
    });
    setDraft({ name: '', relationship: '', phone: '', primary: false });
  };

  const remove = (id: string) => dispatch({ type: 'REMOVE_CONTACT', payload: id });

  const togglePrimary = (id: string) => {
    const c = state.contacts.find(x => x.id === id);
    if (!c) return;
    dispatch({ type: 'UPDATE_CONTACT', payload: { ...c, primary: !c.primary } });
  };

  return (
    <Card title="Family Contacts" subtitle="Primary and secondary contacts.">
      <div className="form-row" style={{ marginBottom: 12 }}>
        <Input label="Name" value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} placeholder="Full name" />
        <Input label="Relationship" value={draft.relationship} onChange={(e) => setDraft({ ...draft, relationship: e.target.value })} placeholder="e.g., Daughter" />
      </div>
      <div className="form-row" style={{ marginBottom: 12 }}>
        <Input label="Phone" value={draft.phone} onChange={(e) => setDraft({ ...draft, phone: e.target.value })} placeholder="(555) 555-5555" />
        <div className="form-col">
          <label className="label">Primary Contact</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" checked={draft.primary} onChange={(e) => setDraft({ ...draft, primary: e.target.checked })} aria-label="Primary contact" />
            <Button onClick={add}>Add Contact</Button>
          </div>
        </div>
      </div>

      <Table
        columns={['Name', 'Relationship', 'Phone', 'Primary', 'Actions']}
        rows={state.contacts}
        renderRow={(row: any) => (
          <>
            <td>{row.name}</td>
            <td>{row.relationship}</td>
            <td>{row.phone}</td>
            <td>
              <input type="checkbox" checked={row.primary} onChange={() => togglePrimary(row.id)} aria-label={`Primary for ${row.name}`} />
            </td>
            <td>
              <Button variant="error" onClick={() => remove(row.id)}>Remove</Button>
            </td>
          </>
        )}
      />
    </Card>
  );
}
