
import React, { useState } from 'react';
import Navigation from './Navigation';
import Dashboard from './Dashboard';
import PatientProfile from './PatientProfile';
import PlaceholderSection from './PlaceholderSection';

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState('mothers');
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
      case 'mothers':
        return <Dashboard onPatientSelect={handlePatientSelect} />;
      case 'dashboard':
        return <PlaceholderSection title="Dashboard Overview" />;
      case 'messages':
        return <PlaceholderSection title="SMS/USSD Messages" />;
      case 'analytics':
        return <PlaceholderSection title="Analytics & Reports" />;
      case 'settings':
        return <PlaceholderSection title="System Settings" />;
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
