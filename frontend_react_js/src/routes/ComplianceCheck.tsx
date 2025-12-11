import React from 'react';
import Card from '../components/Card.tsx';
import Badge from '../components/Badge.tsx';
import { useCase } from '../context/CaseContext.tsx';

// PUBLIC_INTERFACE
export default function ComplianceCheck() {
  /** Computes a simple completeness/check summary from local state. */
  const { state } = useCase();
  const required = [
    { label: 'Deceased Name', ok: !!state.info.deceasedName },
    { label: 'DOB', ok: !!state.info.dob },
    { label: 'DOD', ok: !!state.info.dod },
    { label: 'Service Date', ok: !!state.service.date },
    { label: 'Service Time', ok: !!state.service.time },
    { label: 'Location', ok: !!state.service.location },
  ];

  const completed = required.filter(r => r.ok).length;
  const missing = required.filter(r => !r.ok).length;
  const warnings = state.contacts.length === 0 ? 1 : 0;

  return (
    <Card title="Compliance Check" subtitle="Quick validation before submission.">
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <Badge variant="success">Completed: {completed}</Badge>
        <Badge variant="error">Missing: {missing}</Badge>
        <Badge variant="warning">Warnings: {warnings}</Badge>
      </div>
      <div className="table">
        <table>
          <thead><tr><th>Field</th><th>Status</th></tr></thead>
          <tbody>
            {required.map((r, i) => (
              <tr key={i}>
                <td>{r.label}</td>
                <td>{r.ok ? <Badge variant="success">OK</Badge> : <Badge variant="error">Missing</Badge>}</td>
              </tr>
            ))}
            <tr>
              <td>Primary Contact</td>
              <td>{state.contacts.some(c => c.primary) ? <Badge variant="success">OK</Badge> : <Badge variant="warning">Not set</Badge>}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}
