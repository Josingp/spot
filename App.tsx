
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { PartnerPage } from './pages/PartnerPage';
import { TrainerPromoPage } from './pages/TrainerPromoPage';
import { UserApp } from './pages/UserApp';
import { AdminApp } from './pages/AdminApp';
import { LoginPage } from './pages/LoginPage';
import { IRPage } from './pages/IRPage';
import { NFCSimulationPage } from './pages/NFCSimulationPage'; 
import { UserRole } from './types';
import { DataStore } from './utils/dataStore';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App: React.FC = () => {
  // Global Auth State
  const [role, setRole] = useState<UserRole>(UserRole.GUEST);

  // Check for session on mount
  useEffect(() => {
    const session = DataStore.getSession();
    if (session) {
      setRole(session.role);
    }
  }, []);

  const handleLogin = (newRole: UserRole) => {
    setRole(newRole);
  };

  const handleLogout = () => {
    DataStore.clearSession();
    setRole(UserRole.GUEST);
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout role={role} onLogout={handleLogout}>
              <LandingPage />
            </Layout>
          } 
        />
        <Route 
          path="/login" 
          element={
            <Layout role={UserRole.GUEST} onLogout={handleLogout}>
              <LoginPage onLogin={handleLogin} />
            </Layout>
          } 
        />
        <Route 
          path="/partner" 
          element={
            <Layout role={role} onLogout={handleLogout}>
              <PartnerPage />
            </Layout>
          } 
        />
        <Route 
          path="/trainer-promo" 
          element={
            <Layout role={role} onLogout={handleLogout}>
              <TrainerPromoPage />
            </Layout>
          } 
        />
        <Route 
          path="/ir" 
          element={
            <Layout role={role} onLogout={handleLogout}>
              <IRPage />
            </Layout>
          } 
        />
        {/* Standalone Route for NFC Simulation */}
        <Route 
          path="/nfc-simulation" 
          element={<NFCSimulationPage />} 
        />
        <Route 
          path="/user/*" 
          element={
            role === UserRole.USER || role === UserRole.ADMIN ? ( // Admin can also view user app
              <Layout role={role} onLogout={handleLogout}>
                <UserApp />
              </Layout>
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        <Route 
          path="/admin/*" 
          element={
            role === UserRole.ADMIN ? (
              <Layout role={role} onLogout={handleLogout}>
                <AdminApp />
              </Layout>
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;