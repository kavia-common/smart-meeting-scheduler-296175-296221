import React, { useState } from 'react';
import Card from '../components/Card.tsx';
import Input from '../components/Input.tsx';
import TextArea from '../components/TextArea.tsx';
import Button from '../components/Button.tsx';
import { useCase } from '../context/CaseContext.tsx';

// PUBLIC_INTERFACE
export default function CaseInformation() {
  /** Editable case information saved to local context. */
  const { state, dispatch } = useCase();
  const [local, setLocal] = useState(state.info);
  const [saved, setSaved] = useState(false);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLocal(prev => ({ ...prev, [name]: value }));
  };

  const save = () => {
    dispatch({ type: 'SET_INFO', payload: local });
    setSaved(true);
    setTimeout(() => setSaved(false), 1200);
  };

  return (
    <Card title="Case Information" subtitle="Basic personal details.">
      <div className="form-row">
        <Input label="Deceased Name" name="deceasedName" value={local.deceasedName} onChange={change} placeholder="Full name" />
        <Input label="Service Type" name="serviceType" value={local.serviceType} onChange={change} placeholder="e.g., Memorial" />
      </div>
      <div className="form-row">
        <Input label="Date of Birth" name="dob" value={local.dob} onChange={change} placeholder="YYYY-MM-DD" />
        <Input label="Date of Death" name="dod" value={local.dod} onChange={change} placeholder="YYYY-MM-DD" />
      </div>
      <div className="form-row">
        <Input label="Service Preference" name="servicePreference" value={local.servicePreference} onChange={change} placeholder="Burial, Cremation..." />
        <div />
      </div>
      <TextArea label="Additional Attributes" name="additional" value={local.additional} onChange={change} placeholder="Any special notes..." />
      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
        <Button onClick={save}>Save</Button>
        {saved && <span className="badge success" role="status">Saved</span>}
      </div>
    </Card>
  );
}
