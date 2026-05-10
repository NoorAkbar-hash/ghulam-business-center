/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import BusinessCenter from './pages/BusinessCenter';
import PremiumOffice from './pages/workspace/PremiumOffice';
import DedicatedOffice from './pages/workspace/DedicatedOffice';
import FlexiDesk from './pages/workspace/FlexiDesk';
import VirtualOffice from './pages/workspace/VirtualOffice';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

// Placeholders for remaining routes
const ConferenceRoom = () => <div className="pt-20">Conference Room Page</div>;
const CoworkingSpace = () => <div className="pt-20">Coworking Space Page</div>;
const MeetingRooms = () => <div className="pt-20">Meeting Rooms Page</div>;

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Toaster position="top-right" />
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
      </Router>
    </HelmetProvider>
  );
}
