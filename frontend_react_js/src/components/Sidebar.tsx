import React from 'react';
import { NavLink } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Sidebar() {
  /** Left navigation sidebar for app-wide routes and dashboard tabs. */
  return (
    <aside className="sidebar" aria-label="Sidebar">
      <div className="brand">
        <div className="dot" aria-hidden />
        <div>
          <div className="title">Arrangement Assistant</div>
          <div className="muted" style={{ fontSize: 12 }}>Mock UI</div>
        </div>
      </div>

      <div className="nav-group">
        <div className="muted" style={{ fontWeight: 700, margin: '8px 4px' }}>Primary</div>
        <NavLink to="/upload" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Upload Recording</NavLink>
        <NavLink to="/processing" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Processing</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Case Dashboard</NavLink>
        <NavLink to="/final-review" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Final Review</NavLink>
        <NavLink to="/submission-success" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Submission Success</NavLink>
      </div>

      <div className="nav-group">
        <div className="muted" style={{ fontWeight: 700, margin: '16px 4px 8px' }}>Dashboard Tabs</div>
        <NavLink to="/dashboard/case-information" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Case Information</NavLink>
        <NavLink to="/dashboard/service-details" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Service Details</NavLink>
        <NavLink to="/dashboard/family-contacts" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Family Contacts</NavLink>
        <NavLink to="/dashboard/obituary-notes" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Obituary Notes</NavLink>
        <NavLink to="/dashboard/draft-obituary" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Draft Obituary</NavLink>
        <NavLink to="/dashboard/action-items" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Action Items</NavLink>
        <NavLink to="/dashboard/follow-up-email" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Follow Up Email</NavLink>
        <NavLink to="/dashboard/transcript-viewer" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Transcript Viewer</NavLink>
        <NavLink to="/dashboard/compliance-check" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Compliance Check</NavLink>
      </div>
    </aside>
  );
}
