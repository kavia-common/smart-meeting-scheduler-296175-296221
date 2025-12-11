import React from 'react';
import Card from '../components/Card.tsx';
import Button from '../components/Button.tsx';
import { useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Dashboard() {
  /** Case Dashboard overview with quick links. */
  const nav = useNavigate();
  const sections = [
    { path: '/dashboard/case-information', title: 'Case Information', desc: 'Key personal details for the obituary and services.' },
    { path: '/dashboard/service-details', title: 'Service Details', desc: 'Schedule, location, and ceremony preferences.' },
    { path: '/dashboard/family-contacts', title: 'Family Contacts', desc: 'Primary and secondary family points of contact.' },
    { path: '/dashboard/obituary-notes', title: 'Obituary Notes', desc: 'Raw editable notes derived from transcript.' },
    { path: '/dashboard/draft-obituary', title: 'Draft Obituary', desc: 'Rich text draft of the obituary.' },
    { path: '/dashboard/action-items', title: 'Action Items', desc: 'Checklist of follow-ups and tasks.' },
    { path: '/dashboard/follow-up-email', title: 'Follow Up Email', desc: 'Compose and copy follow-up messages.' },
    { path: '/dashboard/transcript-viewer', title: 'Transcript Viewer', desc: 'Scroll through full transcript with markers.' },
    { path: '/dashboard/compliance-check', title: 'Compliance Check', desc: 'Validate completeness prior to submission.' },
  ];

  return (
    <div className="grid-2">
      <div className="tab-list">
        {sections.map((s) => (
          <Button key={s.path} variant="secondary" onClick={() => nav(s.path)}>{s.title}</Button>
        ))}
      </div>
      <div>
        <Card title="Overview" subtitle="A quick summary of major sections.">
          <div className="muted" style={{ marginBottom: 12 }}>
            Use the left quick links to navigate between dashboard sections. This overview is a placeholder.
          </div>
          <div style={{ display: 'grid', gap: 12 }}>
            {sections.map(s => (
              <div key={s.path} className="card" style={{ padding: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div className="section-title" style={{ marginBottom: 4 }}>{s.title}</div>
                    <div className="muted">{s.desc}</div>
                  </div>
                  <Button onClick={() => nav(s.path)}>Open</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
