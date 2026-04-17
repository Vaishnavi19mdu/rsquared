/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { UserRole } from './types';
import DashboardLayout from './layouts/DashboardLayout';
import AdminDashboard from './pages/AdminDashboard';
import StaffDashboard from './pages/StaffDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import SettingsPage from './pages/SettingsPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

type AppState = 'landing' | 'login' | 'signup' | 'dashboard';

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [role, setRole] = useState<UserRole>('ADMIN');
  const [activeTab, setActiveTab] = useState<string>('overview');

  const handleAuthSuccess = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setAppState('dashboard');
    setActiveTab('overview');
  };

  const handleSignOut = () => {
    setAppState('landing');
  };

  if (appState === 'landing') {
    return <LandingPage onNavigate={setAppState} />;
  }

  if (appState === 'login') {
    return <LoginPage onNavigate={setAppState} onAuthSuccess={handleAuthSuccess} />;
  }

  if (appState === 'signup') {
    return <SignUpPage onNavigate={setAppState} onAuthSuccess={handleAuthSuccess} />;
  }

  const renderDashboard = () => {
    if (activeTab === 'settings') {
      // Pass role so SettingsPage can gate system-level info to admin only
      return <SettingsPage role={role} />;
    }

    switch (role) {
      case 'ADMIN':
        return <AdminDashboard activeTab={activeTab} />;
      case 'STAFF':
        return <StaffDashboard activeTab={activeTab} />;
      case 'CUSTOMER':
        return <CustomerDashboard activeTab={activeTab} />;
      default:
        return <AdminDashboard activeTab={activeTab} />;
    }
  };

  return (
    <DashboardLayout
      role={role}
      setRole={setRole}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      onSignOut={handleSignOut}
    >
      {renderDashboard()}
    </DashboardLayout>
  );
}