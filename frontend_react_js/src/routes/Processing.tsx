import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card.tsx';
import Progress from '../components/Progress.tsx';
import Button from '../components/Button.tsx';

const steps = [
  'Retrieving audio',
  'Sending to transcription',
  'Generating transcript',
  'Extracting structured data',
  'Preparing dashboard',
];

// PUBLIC_INTERFACE
export default function Processing() {
  /** Processing screen simulating staged progress with timers. */
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const total = steps.length;
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + 8);
        return next;
      });
    }, 350);
    const stepper = setInterval(() => {
      setIndex((i) => {
        const next = Math.min(total - 1, i + 1);
        return next;
      });
    }, 1200);
    const finish = setTimeout(() => {
      setDone(true);
      setProgress(100);
      clearInterval(interval);
      clearInterval(stepper);
    }, 5200);
    return () => {
      clearInterval(interval);
      clearInterval(stepper);
      clearTimeout(finish);
    };
  }, []);

  return (
    <>
      <Card title="Processing" subtitle="Your file is being prepared. This is a simulated preview.">
        <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Progress value={progress} ariaLabel="Processing progress" />
          <span className="badge info">{Math.round(progress)}%</span>
        </div>
        <div className="muted" aria-live="polite">{steps[index]}</div>
        {done && (
          <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
            <Button onClick={() => nav('/dashboard')}>View Case Dashboard</Button>
          </div>
        )}
      </Card>
    </>
  );
}
