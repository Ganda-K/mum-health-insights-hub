
import React from 'react';
import { 
  ArrowLeft, 
  Heart, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Baby, 
  Activity, 
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  FileText,
  Bell
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const PatientProfile = ({ patient, onBack }) => {
  const getRiskColor = (status) => {
    switch (status) {
      case 'High': return 'text-red-600 bg-red-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
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

  const getSymptomSeverity = (symptom) => {
    switch (symptom) {
      case 'Severe': return 'text-red-600 bg-red-100';
      case 'Moderate': return 'text-yellow-600 bg-yellow-100';
      case 'Mild': return 'text-blue-600 bg-blue-100';
      case 'None': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  // Generate risk score trend data
  const riskTrendData = [
    { month: 'Jan', score: 45 },
    { month: 'Feb', score: 52 },
    { month: 'Mar', score: 48 },
    { month: 'Apr', score: 63 },
    { month: 'May', score: 58 },
    { month: 'Jun', score: patient.riskScore },
  ];

  const getSuggestedActions = (riskStatus) => {
    switch (riskStatus) {
      case 'High':
        return [
          'Schedule immediate follow-up visit within 1 week',
          'Encourage facility delivery with skilled attendant',
          'Monitor hemoglobin levels weekly',
          'Provide iron supplementation',
          'Nutritional counseling recommended'
        ];
      case 'Medium':
        return [
          'Schedule follow-up visit within 2 weeks',
          'Continue routine antenatal care',
          'Monitor symptoms closely',
          'Provide health education on danger signs'
        ];
      case 'Low':
        return [
          'Continue routine antenatal care',
          'Maintain healthy lifestyle',
          'Regular check-ins via SMS/USSD'
        ];
      default:
        return ['Assessment needed'];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-pink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Dashboard</span>
              </Button>
              <div className="h-6 w-px bg-gray-300 mx-4"></div>
              <div className="p-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">MumHealth</h1>
                <p className="text-sm text-gray-600">Patient Profile</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-gray-600" />
              <div className="h-8 w-8 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-pink-600">{patient.name.charAt(0)}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Personal Info Header */}
        <div className="mb-8">
          <Card className="border-pink-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-6 mb-6">
                <div className="h-20 w-20 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{patient.name.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{patient.name}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>Age {patient.age}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{patient.village}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{patient.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Due: {patient.dueDate}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={getRiskBadgeColor(patient.currentRiskStatus)} className="mb-2">
                    {patient.currentRiskStatus} Risk
                  </Badge>
                  <div className="text-sm text-gray-600">
                    Risk Score: {patient.riskScore}/100
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pregnancy Details */}
            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Baby className="h-5 w-5 text-pink-600" />
                  <span>Pregnancy Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Due Date</h4>
                    <p className="text-gray-700">{patient.dueDate}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {Math.ceil((new Date(patient.dueDate) - new Date()) / (1000 * 60 * 60 * 24))} days remaining
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Previous Births</h4>
                    <p className="text-gray-700">{patient.previousBirths}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {patient.previousBirths === 0 ? 'First pregnancy' : `${patient.previousBirths} previous birth(s)`}
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Hemoglobin Level</h4>
                    <p className="text-gray-700">{patient.hemoglobin} g/dL</p>
                    <p className="text-sm text-red-600 mt-1">{patient.anemiaStatus}</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Risk Factors</h4>
                    <div className="space-y-1">
                      {patient.riskFactors.map((factor, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <AlertTriangle className="h-3 w-3 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Symptom History Timeline */}
            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-blue-600" />
                  <span>Symptom History Timeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {patient.symptoms.map((entry, index) => (
                    <div key={index} className="border-l-4 border-pink-200 pl-6 pb-4 relative">
                      <div className="absolute left-0 top-0 w-3 h-3 bg-pink-400 rounded-full transform -translate-x-2"></div>
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium text-gray-900">{entry.date}</h4>
                        <Badge variant="outline" className="text-xs">
                          {index === 0 ? 'Latest' : `${index + 1} month(s) ago`}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="text-center">
                          <div className="text-xs text-gray-600 mb-1">Fatigue</div>
                          <Badge className={`text-xs ${getSymptomSeverity(entry.fatigue)}`}>
                            {entry.fatigue}
                          </Badge>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-600 mb-1">Dizziness</div>
                          <Badge className={`text-xs ${getSymptomSeverity(entry.dizziness)}`}>
                            {entry.dizziness}
                          </Badge>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-600 mb-1">Bleeding</div>
                          <Badge className={`text-xs ${getSymptomSeverity(entry.bleeding)}`}>
                            {entry.bleeding}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Risk Score Trend */}
            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span>Risk Score Trend</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Current Risk Score</span>
                    <span className="text-lg font-bold text-gray-900">{patient.riskScore}/100</span>
                  </div>
                  <Progress value={patient.riskScore} className="h-3" />
                </div>
                
                <div className="grid grid-cols-6 gap-2 mb-4">
                  {riskTrendData.map((data, index) => (
                    <div key={index} className="text-center">
                      <div className="h-20 bg-gray-100 rounded mb-2 flex items-end justify-center p-1">
                        <div 
                          className="bg-pink-400 rounded-sm w-full transition-all duration-300"
                          style={{ height: `${(data.score / 100) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-600">{data.month}</div>
                      <div className="text-xs font-medium text-gray-900">{data.score}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-red-500" />
                    <span className="text-red-600">Risk increasing</span>
                  </div>
                  <div className="text-gray-400">•</div>
                  <div className="text-gray-600">Monitor closely</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Current Risk Status */}
            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <span>Current Risk Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`p-4 rounded-lg ${getRiskColor(patient.currentRiskStatus)} mb-4`}>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">{patient.currentRiskStatus}</div>
                    <div className="text-sm">Risk Level</div>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Last Assessment:</span>
                    <div className="text-gray-600">{patient.lastCheckIn}</div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Next Check-in:</span>
                    <div className="text-gray-600">2024-07-20</div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Response Rate:</span>
                    <div className="text-green-600">95% (19/20 responses)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alerts and Recommendations */}
            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-purple-600" />
                  <span>Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {getSuggestedActions(patient.currentRiskStatus).map((action, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{action}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 space-y-2">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">
                    Schedule Follow-up Visit
                  </Button>
                  <Button variant="outline" className="w-full border-pink-300 text-pink-600 hover:bg-pink-50">
                    Send SMS Reminder
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Patient
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Bell className="h-4 w-4 mr-2" />
                  Send Alert
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Update Records
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Visit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientProfile;
