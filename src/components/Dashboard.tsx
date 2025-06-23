
import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  Calendar,
  MapPin,
  Phone,
  Baby,
  Activity,
  FileText,
  Bell
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import PatientProfile from './PatientProfile';

const Dashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const patients = [
    {
      id: 1,
      name: "Amina Hassan",
      age: 24,
      village: "Kivuko",
      phone: "+255 123 456 789",
      dueDate: "2024-08-15",
      previousBirths: 1,
      hemoglobin: 10.2,
      anemiaStatus: "Mild Anemia",
      riskFactors: ["Previous complications", "Low hemoglobin"],
      currentRiskStatus: "Medium",
      riskScore: 65,
      lastCheckIn: "2024-06-20",
      symptoms: [
        { date: "2024-06-20", fatigue: "Moderate", dizziness: "Mild", bleeding: "None" },
        { date: "2024-05-20", fatigue: "Mild", dizziness: "None", bleeding: "None" },
        { date: "2024-04-20", fatigue: "Severe", dizziness: "Moderate", bleeding: "Light" }
      ]
    },
    {
      id: 2,
      name: "Fatuma Mohamed",
      age: 19,
      village: "Msimbazi",
      phone: "+255 987 654 321",
      dueDate: "2024-07-28",
      previousBirths: 0,
      hemoglobin: 8.5,
      anemiaStatus: "Moderate Anemia",
      riskFactors: ["First pregnancy", "Young age", "Severe anemia"],
      currentRiskStatus: "High",
      riskScore: 85,
      lastCheckIn: "2024-06-22",
      symptoms: [
        { date: "2024-06-22", fatigue: "Severe", dizziness: "Severe", bleeding: "None" },
        { date: "2024-05-22", fatigue: "Moderate", dizziness: "Mild", bleeding: "None" },
        { date: "2024-04-22", fatigue: "Moderate", dizziness: "Moderate", bleeding: "None" }
      ]
    }
  ];

  const getRiskColor = (status) => {
    switch (status) {
      case 'High': return 'bg-red-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getRiskBadgeColor = (status) => {
    switch (status) {
      case 'High': return 'destructive';
      case 'Medium': return 'default';
      case 'Low': return 'secondary';
      default: return 'outline';
    }
  };

  if (selectedPatient) {
    return (
      <PatientProfile 
        patient={selectedPatient} 
        onBack={() => setSelectedPatient(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-pink-200">
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
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-gray-600" />
              <div className="h-8 w-8 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-pink-600">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-pink-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Mothers</CardTitle>
              <Users className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">156</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-pink-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">High Risk Cases</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">23</div>
              <p className="text-xs text-red-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +3 new alerts
              </p>
            </CardContent>
          </Card>

          <Card className="border-pink-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Check-ins Today</CardTitle>
              <Activity className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">42</div>
              <p className="text-xs text-blue-600 flex items-center mt-1">
                <Calendar className="h-3 w-3 mr-1" />
                89% response rate
              </p>
            </CardContent>
          </Card>

          <Card className="border-pink-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Due This Month</CardTitle>
              <Baby className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">18</div>
              <p className="text-xs text-purple-600 flex items-center mt-1">
                <Calendar className="h-3 w-3 mr-1" />
                7 this week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mothers Section */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Registered Mothers</h2>
            <Button className="bg-pink-600 hover:bg-pink-700">Add New Mother</Button>
          </div>

          <div className="grid gap-6">
            {patients.map((patient) => (
              <Card key={patient.id} className="border-pink-200 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedPatient(patient)}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">{patient.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            Age {patient.age}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {patient.village}
                          </span>
                          <span className="flex items-center">
                            <Phone className="h-4 w-4 mr-1" />
                            {patient.phone}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Badge variant={getRiskBadgeColor(patient.currentRiskStatus)} className="text-xs">
                      {patient.currentRiskStatus} Risk
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-pink-50 p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Due Date</span>
                        <Calendar className="h-4 w-4 text-pink-600" />
                      </div>
                      <p className="text-sm text-gray-900">{patient.dueDate}</p>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Hemoglobin</span>
                        <Activity className="h-4 w-4 text-blue-600" />
                      </div>
                      <p className="text-sm text-gray-900">{patient.hemoglobin} g/dL</p>
                      <p className="text-xs text-red-600">{patient.anemiaStatus}</p>
                    </div>
                    
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Previous Births</span>
                        <Baby className="h-4 w-4 text-purple-600" />
                      </div>
                      <p className="text-sm text-gray-900">{patient.previousBirths}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Risk Score</span>
                      <span className="text-sm text-gray-600">{patient.riskScore}/100</span>
                    </div>
                    <Progress value={patient.riskScore} className="h-2" />
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      Last check-in: {patient.lastCheckIn}
                    </div>
                    <Button variant="outline" size="sm" className="border-pink-300 text-pink-600 hover:bg-pink-50">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
