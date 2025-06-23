
import React, { useState } from 'react';
import Navigation from './Navigation';
import Dashboard from './Dashboard';
import PatientProfile from './PatientProfile';
import PlaceholderSection from './PlaceholderSection';
import MessagesSection from './MessagesSection';
import AppointmentsSection from './AppointmentsSection';
import SettingsSection from './SettingsSection';
import HelpSupportSection from './HelpSupportSection';
import HighRiskSection from './HighRiskSection';

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientSelect = (patient: any) => {
    setSelectedPatient(patient);
  };

  const handleBackToDashboard = () => {
    setSelectedPatient(null);
  };

  const renderContent = () => {
    if (selectedPatient) {
      return (
        <PatientProfile 
          patient={selectedPatient} 
          onBack={handleBackToDashboard}
        />
      );
    }

    switch (activeSection) {
      case 'dashboard':
        return <Dashboard onPatientSelect={handlePatientSelect} />;
      case 'mothers':
        return <Dashboard onPatientSelect={handlePatientSelect} />;
      case 'messages':
        return <MessagesSection />;
      case 'appointments':
        return <AppointmentsSection />;
      case 'settings':
        return <SettingsSection />;
      case 'help':
        return <HelpSupportSection />;
      case 'highrisk':
        return <HighRiskSection />;
      default:
        return <Dashboard onPatientSelect={handlePatientSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <div className="pt-0">
        {renderContent()}
      </div>
    </div>
  );
};

export default MainLayout;
