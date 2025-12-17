import { X, Check } from 'lucide-react';

export default function Partner() {
  const features = [
    "Three + solutions across teams",
    "Three + solutions across teams",
    "Three + solutions across teams",
    "Three + solutions across teams",
    "Three + solutions across teams"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="text-sm font-medium text-gray-600">Why Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Why we're the<br />right AI partner
          </h1>
          <p className="text-gray-600 text-sm">
            From automation to analytics we bring<br />your vision to life with custom AI
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Column - Other Agencies */}
          <div className="bg-gray-200 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-8">Other Agencies</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Column - Other Agencies */}
          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-8">Other Agencies</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Third Column - Working with Us */}
          <div className="bg-black rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-white mb-8">Working with Us</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}