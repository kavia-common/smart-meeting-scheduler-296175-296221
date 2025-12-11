import React from 'react';
import Card from '../components/Card.tsx';
import Button from '../components/Button.tsx';
import { useCase } from '../context/CaseContext.tsx';
import { useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function FinalReview() {
  /** Read-only snapshot of current state across sections. */
  const { state } = useCase();
  const nav = useNavigate();

  return (
    <Card title="Final Review" subtitle="Confirm the details before submitting.">
      <div className="form-row">
        <div className="card">
          <div className="section-title">Case Information</div>
          <div className="muted">Name: {state.info.deceasedName || '—'}</div>
          <div className="muted">DOB: {state.info.dob || '—'}</div>
          <div className="muted">DOD: {state.info.dod || '—'}</div>
          <div className="muted">Service Type: {state.info.serviceType || '—'}</div>
          <div className="muted">Preference: {state.info.servicePreference || '—'}</div>
        </div>
        <div className="card">
          <div className="section-title">Service Details</div>
          <div className="muted">Date: {state.service.date || '—'}</div>
          <div className="muted">Time: {state.service.time || '—'}</div>
          <div className="muted">Location: {state.service.location || '—'}</div>
          <div className="muted">Chapel: {state.service.chapel || '—'}</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <div className="section-title">Family Contacts</div>
        {state.contacts.length === 0 ? (
          <div className="muted">No contacts added</div>
        ) : (
          <ul>
            {state.contacts.map(c => (
              <li key={c.id}>{c.name} ({c.relationship}) - {c.phone} {c.primary ? '• Primary' : ''}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <div className="section-title">Draft Obituary</div>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{state.draftObituary}</pre>
      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <Button onClick={() => nav('/submission-success')}>Confirm and Submit</Button>
        <Button variant="secondary" onClick={() => nav('/dashboard')}>Back to Dashboard</Button>
      </div>
    </Card>
  );
}
