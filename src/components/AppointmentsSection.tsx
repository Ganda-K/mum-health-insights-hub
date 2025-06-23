
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, CheckCircle, AlertCircle } from 'lucide-react';

const AppointmentsSection = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Appointments Management</h1>
        <p className="text-lg text-gray-600">Schedule and track maternal health appointments</p>
      </div>

      {/* Appointment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Today's Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">28</div>
            <p className="text-xs text-blue-600">8 AM - 5 PM</p>
          </CardContent>
        </Card>

        <Card className="border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">19</div>
            <p className="text-xs text-green-600">68% completion rate</p>
          </CardContent>
        </Card>

        <Card className="border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">No Shows</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">3</div>
            <p className="text-xs text-red-600">Need follow-up</p>
          </CardContent>
        </Card>

        <Card className="border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">This Week</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">142</div>
            <p className="text-xs text-purple-600">Scheduled appointments</p>
          </CardContent>
        </Card>
      </div>

      {/* Appointment Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">Amina Hassan</p>
                  <p className="text-xs text-gray-600">Routine Check-up • 9:00 AM</p>
                </div>
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">Fatuma Mohamed</p>
                  <p className="text-xs text-gray-600">High-risk Follow-up • 11:30 AM</p>
                </div>
                <Clock className="h-4 w-4 text-blue-600" />
              </div>

              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">Grace Uwimana</p>
                  <p className="text-xs text-gray-600">Anemia Check • 2:00 PM</p>
                </div>
                <AlertCircle className="h-4 w-4 text-yellow-600" />
              </div>
            </div>
            <Button className="w-full mt-4 bg-pink-600 hover:bg-pink-700">
              View Full Schedule
            </Button>
          </CardContent>
        </Card>

        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle>Appointment Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">Routine Check-ups</p>
                  <p className="text-xs text-gray-600">Monthly visits</p>
                </div>
                <span className="text-sm font-bold">67%</span>
              </div>
              
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">High-Risk Follow-ups</p>
                  <p className="text-xs text-gray-600">Urgent cases</p>
                </div>
                <span className="text-sm font-bold">21%</span>
              </div>

              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">Lab Results</p>
                  <p className="text-xs text-gray-600">Blood tests, etc.</p>
                </div>
                <span className="text-sm font-bold">12%</span>
              </div>
            </div>
            <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
              Schedule New Appointment
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default AppointmentsSection;
