
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, AlertTriangle } from 'lucide-react';

const InteractiveMap = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const districts = [
    { name: 'Kigali', risk: 'high', count: 23, x: 50, y: 60 },
    { name: 'Northern', risk: 'medium', count: 15, x: 45, y: 25 },
    { name: 'Southern', risk: 'high', count: 19, x: 40, y: 80 },
    { name: 'Eastern', risk: 'low', count: 8, x: 75, y: 55 },
    { name: 'Western', risk: 'medium', count: 12, x: 15, y: 50 }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-red-500 border-red-600';
      case 'medium': return 'bg-yellow-500 border-yellow-600';
      case 'low': return 'bg-green-500 border-green-600';
      default: return 'bg-gray-500 border-gray-600';
    }
  };

  const getRiskTextColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Card className="border-pink-200">
      <CardHeader>
        <CardTitle className="flex items-center">
          <MapPin className="h-5 w-5 mr-2 text-pink-600" />
          High-Risk Pregnancy Clusters - Rwanda
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-8 h-96 overflow-hidden">
          {/* Rwanda outline representation */}
          <div className="absolute inset-4 bg-green-200 rounded-lg opacity-50 border-2 border-green-300"></div>
          
          {/* District markers */}
          {districts.map((district, index) => (
            <div
              key={index}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110 ${
                selectedDistrict === district.name ? 'scale-125' : ''
              }`}
              style={{ left: `${district.x}%`, top: `${district.y}%` }}
              onClick={() => setSelectedDistrict(selectedDistrict === district.name ? null : district.name)}
            >
              <div className={`w-6 h-6 rounded-full border-2 ${getRiskColor(district.risk)} shadow-lg flex items-center justify-center`}>
                <span className="text-xs font-bold text-white">{district.count}</span>
              </div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs whitespace-nowrap">
                {district.name}
              </div>
            </div>
          ))}

          {/* Legend */}
          <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-md">
            <div className="text-xs font-semibold mb-2">Risk Levels</div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-xs">High Risk</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-xs">Medium Risk</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs">Low Risk</span>
              </div>
            </div>
          </div>
        </div>

        {/* District Details */}
        {selectedDistrict && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            {districts
              .filter(d => d.name === selectedDistrict)
              .map((district, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{district.name} District</h3>
                    <div className={`flex items-center space-x-1 ${getRiskTextColor(district.risk)}`}>
                      <AlertTriangle className="h-4 w-4" />
                      <span className="text-sm font-medium capitalize">{district.risk} Risk</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">High-Risk Cases:</span>
                      <span className="font-semibold ml-2">{district.count}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Last Updated:</span>
                      <span className="ml-2">Today</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          {districts.map((district, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-sm font-medium text-gray-700">{district.name}</div>
              <div className={`text-lg font-bold ${getRiskTextColor(district.risk)}`}>{district.count}</div>
              <div className="text-xs text-gray-500 capitalize">{district.risk} Risk</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveMap;
