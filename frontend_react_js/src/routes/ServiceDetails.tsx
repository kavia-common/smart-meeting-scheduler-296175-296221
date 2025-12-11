import React, { useState } from 'react';
import Card from '../components/Card.tsx';
import Input from '../components/Input.tsx';
import TextArea from '../components/TextArea.tsx';
import Button from '../components/Button.tsx';
import { useCase } from '../context/CaseContext.tsx';

// PUBLIC_INTERFACE
export default function ServiceDetails() {
  /** Service details including scheduling and instructions. */
  const { state, dispatch } = useCase();
  const [local, setLocal] = useState(state.service);
  const [saved, setSaved] = useState(false);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLocal(prev => ({ ...prev, [name]: value }));
  };

  const save = () => {
    dispatch({ type: 'SET_SERVICE', payload: local });
    setSaved(true);
    setTimeout(() => setSaved(false), 1200);
  };

  return (
    <Card title="Service Details" subtitle="Schedule and location settings.">
      <div className="form-row">
        <Input label="Service Date" name="date" value={local.date} onChange={change} placeholder="YYYY-MM-DD" />
        <Input label="Service Time" name="time" value={local.time} onChange={change} placeholder="HH:MM" />
      </div>
      <div className="form-row">
        <Input label="Location" name="location" value={local.location} onChange={change} placeholder="Address or venue" />
        <Input label="Chapel" name="chapel" value={local.chapel} onChange={change} placeholder="Chapel name" />
      </div>
      <TextArea label="Instructions" name="instructions" value={local.instructions} onChange={change} placeholder="Any ceremony instructions..." />
      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
        <Button onClick={save}>Save</Button>
        {saved && <span className="badge success" role="status">Saved</span>}
      </div>
    </Card>
  );
}
