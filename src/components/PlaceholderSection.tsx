
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Construction } from 'lucide-react';

interface PlaceholderSectionProps {
  title: string;
}

const PlaceholderSection = ({ title }: PlaceholderSectionProps) => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="w-full max-w-md text-center border-pink-200">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <Construction className="h-12 w-12 text-pink-600" />
            </div>
            <CardTitle className="text-2xl text-gray-900">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              This section is currently under development. Please check back later.
            </p>
            <div className="bg-pink-50 p-4 rounded-lg">
              <p className="text-sm text-pink-800">
                <strong>Mama Mwiza</strong> is continuously improving to serve mothers better.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default PlaceholderSection;
