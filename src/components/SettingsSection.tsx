
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, User, Bell, Shield, Database, Globe } from 'lucide-react';

const SettingsSection = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-lg text-gray-600">Configure your Mama Mwiza system preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Profile Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue="Dr. Sarah Uwimana"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Healthcare Provider</option>
                  <option>Administrator</option>
                  <option>Supervisor</option>
                </select>
              </div>
              <Button className="bg-pink-600 hover:bg-pink-700">Update Profile</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Notification Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">High-risk alerts</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Daily summaries</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Appointment reminders</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">System updates</span>
                <input type="checkbox" className="rounded" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Security</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button variant="outline" className="w-full">Change Password</Button>
              <Button variant="outline" className="w-full">Two-Factor Authentication</Button>
              <Button variant="outline" className="w-full">Session Management</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-5 w-5" />
              <span>System Configuration</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Default Language</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Kinyarwanda</option>
                  <option>English</option>
                  <option>French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>CAT (Central Africa Time)</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default SettingsSection;
