import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card.tsx';
import Button from '../components/Button.tsx';

// PUBLIC_INTERFACE
export default function Upload() {
  /** Upload Recording screen with drag-and-drop and file picker. */
  const [fileName, setFileName] = useState<string | null>(null);
  const [drag, setDrag] = useState(false);
  const nav = useNavigate();

  const onDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setDrag(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  const onPick: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files[0]) setFileName(e.target.files[0].name);
  };

  return (
    <>
      <Card title="Upload Recording" subtitle="Select a recording file to begin processing.">
        <div
          onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
          onDragLeave={() => setDrag(false)}
          onDrop={onDrop}
          aria-label="Drag and drop area"
          style={{
            border: `2px dashed ${drag ? 'var(--color-accent)' : 'rgba(10,26,47,0.2)'}`,
            borderRadius: 14,
            padding: 24,
            textAlign: 'center',
            background: drag ? 'rgba(38,93,255,0.06)' : 'transparent',
            transition: '200ms ease',
            marginBottom: 12
          }}
        >
          <div className="muted" style={{ marginBottom: 8 }}>
            Drag and drop a file here, or use the file picker below
          </div>
          <input id="fileInput" type="file" onChange={onPick} aria-label="File input" />
          {fileName && <div style={{ marginTop: 10 }}><strong>Selected:</strong> {fileName}</div>}
        </div>
        <Button onClick={() => nav('/processing')} aria-label="Upload and Process">Upload and Process</Button>
      </Card>
    </>
  );
}
