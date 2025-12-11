import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Header() {
  /** Top header with dynamic title and quick actions. */
  const { pathname } = useLocation();
  const nav = useNavigate();

  const title = (() => {
    if (pathname.startsWith('/dashboard/case-information')) return 'Case Information';
    if (pathname.startsWith('/dashboard/service-details')) return 'Service Details';
    if (pathname.startsWith('/dashboard/family-contacts')) return 'Family Contacts';
    if (pathname.startsWith('/dashboard/obituary-notes')) return 'Obituary Notes';
    if (pathname.startsWith('/dashboard/draft-obituary')) return 'Draft Obituary';
    if (pathname.startsWith('/dashboard/action-items')) return 'Action Items';
    if (pathname.startsWith('/dashboard/follow-up-email')) return 'Follow Up Email';
    if (pathname.startsWith('/dashboard/transcript-viewer')) return 'Transcript Viewer';
    if (pathname.startsWith('/dashboard/compliance-check')) return 'Compliance Check';
    if (pathname.startsWith('/dashboard')) return 'Case Dashboard';
    if (pathname.startsWith('/processing')) return 'Processing';
    if (pathname.startsWith('/final-review')) return 'Final Review';
    if (pathname.startsWith('/submission-success')) return 'Submission Success';
    return 'Upload Recording';
  })();

  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="page-title">{title}</h1>
        <div className="page-actions">
          <button className="btn ghost" onClick={() => nav('/dashboard/compliance-check')}>Compliance</button>
          <button className="btn secondary" onClick={() => nav('/final-review')}>Review</button>
          <button className="btn" onClick={() => nav('/upload')}>New Upload</button>
        </div>
      </div>
    </header>
  );
}
