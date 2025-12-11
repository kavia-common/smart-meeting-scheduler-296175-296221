import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/theme.css';
import { CaseProvider } from './context/CaseContext.tsx';

// Layout and shared components
import Sidebar from './components/Sidebar.tsx';
import Header from './components/Header.tsx';

// Routes (screens)
import Upload from './routes/Upload.tsx';
import Processing from './routes/Processing.tsx';
import Dashboard from './routes/Dashboard.tsx';
import CaseInformation from './routes/CaseInformation.tsx';
import ServiceDetails from './routes/ServiceDetails.tsx';
import FamilyContacts from './routes/FamilyContacts.tsx';
import ObituaryNotes from './routes/ObituaryNotes.tsx';
import DraftObituary from './routes/DraftObituary.tsx';
import ActionItems from './routes/ActionItems.tsx';
import FollowUpEmail from './routes/FollowUpEmail.tsx';
import TranscriptViewer from './routes/TranscriptViewer.tsx';
import ComplianceCheck from './routes/ComplianceCheck.tsx';
import FinalReview from './routes/FinalReview.tsx';
import SubmissionSuccess from './routes/SubmissionSuccess.tsx';

// PUBLIC_INTERFACE
function App() {
  /** Root app wiring Router, Layout, and Case state context. */
  return (
    <CaseProvider>
      <BrowserRouter>
        <div className="app-root">
          <Sidebar />
          <main className="content-area" role="main">
            <Header />
            <div className="page-container">
              <Routes>
                <Route path="/" element={<Navigate to="/upload" replace />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/processing" element={<Processing />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/case-information" element={<CaseInformation />} />
                <Route path="/dashboard/service-details" element={<ServiceDetails />} />
                <Route path="/dashboard/family-contacts" element={<FamilyContacts />} />
                <Route path="/dashboard/obituary-notes" element={<ObituaryNotes />} />
                <Route path="/dashboard/draft-obituary" element={<DraftObituary />} />
                <Route path="/dashboard/action-items" element={<ActionItems />} />
                <Route path="/dashboard/follow-up-email" element={<FollowUpEmail />} />
                <Route path="/dashboard/transcript-viewer" element={<TranscriptViewer />} />
                <Route path="/dashboard/compliance-check" element={<ComplianceCheck />} />
                <Route path="/final-review" element={<FinalReview />} />
                <Route path="/submission-success" element={<SubmissionSuccess />} />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </CaseProvider>
  );
}

export default App;
