
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { PartnerPage } from './pages/PartnerPage';
import { TrainerPromoPage } from './pages/TrainerPromoPage';
import { UserApp } from './pages/UserApp';
import { AdminApp } from './pages/AdminApp';
import { LoginPage } from './pages/LoginPage';
import { KioskPage } from './pages/KioskPage';
import { UserRole } from './types';
import { DataStore } from './utils/dataStore';

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
        {/* Kiosk Mode - No standard Layout */}
        <Route 
          path="/kiosk" 
          element={<KioskPage />} 
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
