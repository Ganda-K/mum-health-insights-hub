
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Send, Inbox, Users, TrendingUp } from 'lucide-react';

const MessagesSection = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">SMS/USSD Messages</h1>
        <p className="text-lg text-gray-600">Manage communication with pregnant women</p>
      </div>

      {/* Message Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Messages Sent Today</CardTitle>
            <Send className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">247</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Response Rate</CardTitle>
            <Inbox className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">89%</div>
            <p className="text-xs text-green-600">Above target (85%)</p>
          </CardContent>
        </Card>

        <Card className="border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Recipients</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,156</div>
            <p className="text-xs text-purple-600">Registered mothers</p>
          </CardContent>
        </Card>

        <Card className="border-pink-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Responses</CardTitle>
            <MessageSquare className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">23</div>
            <p className="text-xs text-orange-600">Need follow-up</p>
          </CardContent>
        </Card>
      </div>

      {/* Message Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-sm">Weekly Check-in</span>
                  <span className="text-xs text-gray-500">Sent 2h ago</span>
                </div>
                <p className="text-sm text-gray-700">"Muraho! How are you feeling this week? Reply: 1-Good, 2-Tired, 3-Unwell"</p>
                <div className="mt-2 text-xs text-gray-600">Sent to 1,156 mothers • 89% responded</div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-sm">Appointment Reminder</span>
                  <span className="text-xs text-gray-500">Sent 1d ago</span>
                </div>
                <p className="text-sm text-gray-700">"Remember your clinic visit tomorrow at 9 AM. Bring your health card."</p>
                <div className="mt-2 text-xs text-gray-600">Sent to 45 mothers • 91% responded</div>
              </div>
            </div>
            <Button className="w-full mt-4 bg-pink-600 hover:bg-pink-700">
              View All Messages
            </Button>
          </CardContent>
        </Card>

        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle>Message Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <div className="font-medium text-sm mb-1">Health Check Template</div>
                <div className="text-xs text-gray-600">"How are you feeling? Any concerns?"</div>
              </div>
              <div className="p-3 border rounded-lg">
                <div className="font-medium text-sm mb-1">Appointment Reminder</div>
                <div className="text-xs text-gray-600">"Don't forget your clinic visit..."</div>
              </div>
              <div className="p-3 border rounded-lg">
                <div className="font-medium text-sm mb-1">Emergency Alert</div>
                <div className="text-xs text-gray-600">"Please visit the clinic immediately..."</div>
              </div>
            </div>
            <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
              Create Template
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default MessagesSection;
