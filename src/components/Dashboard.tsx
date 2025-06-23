
import React from 'react';
import { 
  Heart, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  Calendar,
  MapPin,
  Baby,
  Activity,
  Bell,
  Map
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DashboardProps {
  onPatientSelect?: (patient: any) => void;
}

const Dashboard = ({ onPatientSelect }: DashboardProps) => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-rose-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Mama Mwiza Dashboard</h1>
          <p className="text-lg text-gray-600">Comprehensive maternal health monitoring system for Rwanda</p>
        </div>

        {/* Dashboard Overview Stats */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-pink-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Pregnant Women Registered</CardTitle>
                <Users className="h-4 w-4 text-pink-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">1,247</div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +23% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-pink-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">High-Risk Women Flagged</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">89</div>
                <p className="text-xs text-red-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +7 new this month
                </p>
              </CardContent>
            </Card>

            <Card className="border-pink-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Alerts Pending Follow-up</CardTitle>
                <Bell className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">34</div>
                <p className="text-xs text-orange-600 flex items-center mt-1">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Requires attention
                </p>
              </CardContent>
            </Card>

            <Card className="border-pink-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Upcoming Deliveries (7 Days)</CardTitle>
                <Baby className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">18</div>
                <p className="text-xs text-purple-600 flex items-center mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  Next week
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* District Risk Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">District Risk Overview - Rwanda</h2>
          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Map className="h-5 w-5 mr-2 text-pink-600" />
                High-Risk Pregnancy Clusters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <MapPin className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Map Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  Visual representation of high-risk pregnancy clusters across Rwanda districts
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-sm font-medium text-gray-700">Kigali</div>
                    <div className="text-lg font-bold text-red-600">23</div>
                    <div className="text-xs text-gray-500">High Risk</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-sm font-medium text-gray-700">Northern</div>
                    <div className="text-lg font-bold text-yellow-600">15</div>
                    <div className="text-xs text-gray-500">Medium Risk</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-sm font-medium text-gray-700">Southern</div>
                    <div className="text-lg font-bold text-red-600">19</div>
                    <div className="text-xs text-gray-500">High Risk</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-sm font-medium text-gray-700">Eastern</div>
                    <div className="text-lg font-bold text-green-600">8</div>
                    <div className="text-xs text-gray-500">Low Risk</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="text-lg">Recent Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Severe Anemia Alert</p>
                    <p className="text-xs text-gray-600">Fatuma M. - Hemoglobin 6.2 g/dL</p>
                  </div>
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Missed Check-in</p>
                    <p className="text-xs text-gray-600">Amina H. - 2 weeks overdue</p>
                  </div>
                  <Bell className="h-4 w-4 text-orange-600" />
                </div>
              </div>
              <Button className="w-full mt-4 bg-pink-600 hover:bg-pink-700" size="sm">
                View All Alerts
              </Button>
            </CardContent>
          </Card>

          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="text-lg">This Week's Deliveries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Grace K.</p>
                    <p className="text-xs text-gray-600">Due: June 25, 2024</p>
                  </div>
                  <Baby className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Sarah N.</p>
                    <p className="text-xs text-gray-600">Due: June 27, 2024</p>
                  </div>
                  <Baby className="h-4 w-4 text-purple-600" />
                </div>
              </div>
              <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700" size="sm">
                View Delivery Schedule
              </Button>
            </CardContent>
          </Card>

          <Card className="border-pink-200">
            <CardHeader>
              <CardTitle className="text-lg">System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">SMS Service</span>
                  <span className="text-green-600 text-xs">●  Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">USSD Gateway</span>
                  <span className="text-green-600 text-xs">●  Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database</span>
                  <span className="text-green-600 text-xs">●  Connected</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Last Backup</span>
                  <span className="text-gray-600 text-xs">2 hours ago</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700" size="sm">
                System Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
