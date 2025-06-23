
import React from 'react';
import { 
  Home, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  Bell,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'mothers', label: 'Mothers', icon: Users },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/066eada5-d0e8-4f96-b5cf-2afe6f9f8f45.png" 
              alt="Mama Mwiza Logo" 
              className="h-8 w-8"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Mama Mwiza</h1>
              <p className="text-sm text-gray-600">Maternal Health Monitoring</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onSectionChange(item.id)}
                  className={`flex items-center space-x-2 ${
                    activeSection === item.id 
                      ? 'bg-pink-600 text-white hover:bg-pink-700' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </Button>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5 text-gray-600" />
            <div className="h-8 w-8 bg-pink-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-pink-600">A</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
