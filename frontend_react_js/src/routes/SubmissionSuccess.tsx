import React from 'react';
import Card from '../components/Card.tsx';
import Button from '../components/Button.tsx';
import { useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function SubmissionSuccess() {
  /** Post-submission confirmation screen. */
  const nav = useNavigate();

  return (
    <Card title="Submission Success" subtitle="Your case has been submitted successfully.">
      <div className="muted" style={{ marginBottom: 12 }}>
        This is a mock confirmation message. In a real app, you would receive a reference or link.
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="success" onClick={() => window.alert('Dummy: Open external Case System')}>View in Case System</Button>
        <Button onClick={() => nav('/upload')}>Upload another recording</Button>
      </div>
    </Card>
  );
}
