import React from 'react';
import Card from '../components/Card.tsx';
import { useCase } from '../context/CaseContext.tsx';

// PUBLIC_INTERFACE
export default function TranscriptViewer() {
  /** Scrollable transcript with mock time markers and section breaks. */
  const { state } = useCase();
  const sections = state.transcript.split('--- Section Break ---');

  return (
    <Card title="Transcript Viewer" subtitle="Scroll through the generated transcript.">
      <div style={{ maxHeight: 420, overflow: 'auto', paddingRight: 6 }}>
        {sections.map((s, i) => (
          <div key={i} className="card" style={{ padding: 12, marginBottom: 10 }}>
            <div className="muted" style={{ marginBottom: 6 }}>Segment {i + 1}</div>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{s.trim()}</pre>
          </div>
        ))}
      </div>
    </Card>
  );
}
