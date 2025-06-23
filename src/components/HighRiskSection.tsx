
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, TrendingUp, Users, Clock, MapPin, Phone } from 'lucide-react';

const HighRiskSection = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">High Risk Pregnancies</h1>
        <p className="text-lg text-gray-600">Monitor and manage high-risk cases requiring immediate attention</p>
      </div>

      {/* High Risk Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Critical Cases</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">8</div>
            <p className="text-xs text-red-600">Require immediate attention</p>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">High Risk Total</CardTitle>
            <Users className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">45</div>
            <p className="text-xs text-orange-600">Active high-risk cases</p>
          </CardContent>
        </Card>

        <Card className="border-yellow-200 bg-yellow-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Weekly Increase</CardTitle>
            <TrendingUp className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">+12</div>
            <p className="text-xs text-yellow-600">New cases this week</p>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Follow-ups Due</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">23</div>
            <p className="text-xs text-blue-600">Due within 48 hours</p>
          </CardContent>
        </Card>
      </div>

      {/* Critical Cases */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="text-red-600 flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5" />
              <span>Critical Cases - Immediate Action Required</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium text-sm">Uwimana Marie, 24</div>
                    <div className="text-xs text-gray-600 flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      Gasabo District
                    </div>
                  </div>
                  <div className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">CRITICAL</div>
                </div>
                <p className="text-sm text-gray-700 mb-2">Severe preeclampsia - BP: 180/110, proteinuria 3+</p>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-xs">
                    <Phone className="h-3 w-3 mr-1" />
                    Call Now
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">View Details</Button>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium text-sm">Mukamana Grace, 19</div>
                    <div className="text-xs text-gray-600 flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      Nyarugenge District
                    </div>
                  </div>
                  <div className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">CRITICAL</div>
                </div>
                <p className="text-sm text-gray-700 mb-2">Placental abruption suspected - severe bleeding</p>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-xs">
                    <Phone className="h-3 w-3 mr-1" />
                    Call Now
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">View Details</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="text-orange-600">High Risk Cases - Monitor Closely</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                <div className="flex justify-between items-start mb-1">
                  <div className="font-medium text-sm">Bizimana Alice, 32</div>
                  <div className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">HIGH RISK</div>
                </div>
                <p className="text-xs text-gray-600">Gestational diabetes - glucose levels elevated</p>
              </div>
              
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                <div className="flex justify-between items-start mb-1">
                  <div className="font-medium text-sm">Nyiranzeyimana Sarah, 28</div>
                  <div className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">HIGH RISK</div>
                </div>
                <p className="text-xs text-gray-600">Previous C-section complications</p>
              </div>

              <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                <div className="flex justify-between items-start mb-1">
                  <div className="font-medium text-sm">Mukandayisenga Claire, 35</div>
                  <div className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">HIGH RISK</div>
                </div>
                <p className="text-xs text-gray-600">Advanced maternal age, hypertension</p>
              </div>
            </div>
            <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
              View All High Risk Cases
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default HighRiskSection;
