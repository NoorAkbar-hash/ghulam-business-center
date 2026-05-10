/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const BusinessCenter = lazy(() => import('./pages/BusinessCenter'));
const PremiumOffice = lazy(() => import('./pages/workspace/PremiumOffice'));
const DedicatedOffice = lazy(() => import('./pages/workspace/DedicatedOffice'));
const FlexiDesk = lazy(() => import('./pages/workspace/FlexiDesk'));
const VirtualOffice = lazy(() => import('./pages/workspace/VirtualOffice'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));

// Simple loading fallback
const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-brand-navy">
    <div className="w-12 h-12 border-4 border-white/10 border-t-brand-gold rounded-full animate-spin"></div>
  </div>
);

// Placeholders for remaining routes
const ConferenceRoom = () => <div className="pt-20">Conference Room Page</div>;
const CoworkingSpace = () => <div className="pt-20">Coworking Space Page</div>;
const MeetingRooms = () => <div className="pt-20">Meeting Rooms Page</div>;

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Toaster position="top-right" />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business-center" element={<BusinessCenter />} />
            <Route path="/business-center/premium-office" element={<PremiumOffice />} />
            <Route path="/business-center/dedicated-office" element={<DedicatedOffice />} />
            <Route path="/business-center/flexi-desk" element={<FlexiDesk />} />
            <Route path="/business-center/virtual-office" element={<VirtualOffice />} />
            <Route path="/business-center/conference-room" element={<ConferenceRoom />} />
            <Route path="/business-center/coworking-space" element={<CoworkingSpace />} />
            <Route path="/business-center/meeting-rooms" element={<MeetingRooms />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}
