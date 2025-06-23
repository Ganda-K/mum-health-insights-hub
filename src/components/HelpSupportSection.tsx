
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, Phone, Mail, FileText, MessageSquare, Video } from 'lucide-react';

const HelpSupportSection = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Help & Support</h1>
        <p className="text-lg text-gray-600">Get assistance with Mama Mwiza system</p>
      </div>

      {/* Quick Contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-pink-200">
          <CardHeader className="text-center">
            <Phone className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <CardTitle className="text-lg">Emergency Hotline</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-2xl font-bold text-green-600">114</p>
            <p className="text-sm text-gray-600">24/7 Emergency Support</p>
          </CardContent>
        </Card>

        <Card className="border-pink-200">
          <CardHeader className="text-center">
            <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <CardTitle className="text-lg">Technical Support</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm font-medium">support@mamamwiza.rw</p>
            <p className="text-sm text-gray-600">Response within 4 hours</p>
          </CardContent>
        </Card>

        <Card className="border-pink-200">
          <CardHeader className="text-center">
            <Video className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <CardTitle className="text-lg">Training</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Schedule Training
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Help Resources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Documentation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="font-medium text-sm">User Manual</div>
                <div className="text-xs text-gray-600">Complete guide to using Mama Mwiza</div>
              </div>
              <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="font-medium text-sm">Quick Start Guide</div>
                <div className="text-xs text-gray-600">Get started in 5 minutes</div>
              </div>
              <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="font-medium text-sm">FAQ</div>
                <div className="text-xs text-gray-600">Frequently asked questions</div>
              </div>
              <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="font-medium text-sm">Troubleshooting</div>
                <div className="text-xs text-gray-600">Common issues and solutions</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5" />
              <span>Recent Support Tickets</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium text-sm">SMS Gateway Issue</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Resolved</span>
                </div>
                <p className="text-xs text-gray-600">Ticket #1234 - Resolved 2 days ago</p>
              </div>
              
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium text-sm">Report Generation</span>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">In Progress</span>
                </div>
                <p className="text-xs text-gray-600">Ticket #1235 - Opened yesterday</p>
              </div>
            </div>
            <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
              Submit New Ticket
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default HelpSupportSection;
