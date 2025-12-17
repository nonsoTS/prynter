import { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const features = [
    'Three + solutions across teams',
    'Three + solutions across teams',
    'Three + solutions across teams',
    'Three + solutions across teams',
    'Three + solutions across teams'
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="text-sm text-gray-600">Our Pricing</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Flexible plans
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            for everyone
          </h2>
          <p className="text-gray-600 text-lg">
            Explore the key features that drive our partners growth, day after day.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly (-20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Subscribe Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="mb-8">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <path strokeWidth="2" d="M12 8v8m4-4H8"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Subscribe</h3>
              <p className="text-gray-600 text-sm">Pick a plan that fits your workflow</p>
            </div>
            <div className="h-24 flex items-center justify-center border-t border-gray-100">
              <span className="text-2xl text-orange-500 font-bold">|</span>
            </div>
          </div>

          {/* Pro Card */}
          <div className="bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <span className="text-white text-sm font-medium">Pro</span>
            </div>
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-white mb-6">NGN 799</h3>
              <p className="text-gray-400 text-sm mb-8">Ideal for growing teams</p>
              <button className="w-full bg-white text-gray-900 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Choose Pro
              </button>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-white font-medium mb-4">Features:</h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enterprise Card */}
          <div className="bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-500">
            <div className="flex items-center justify-between mb-6">
              <span className="text-white text-sm font-medium">Enterprise</span>
              <span className="bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                Popular
              </span>
            </div>
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-white mb-6">NGN 999</h3>
              <p className="text-gray-400 text-sm mb-8">For Larger Organizations</p>
              <button className="w-full bg-white text-gray-900 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Choose Enterprise
              </button>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-white font-medium mb-4">Features:</h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Left Sidebar Items */}
        <div className="hidden md:block left-8 top-1/2 -translate-y-1/2 space-y-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm w-48">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Build</h3>
            <p className="text-gray-600 text-xs">Pick a plan that fits your workflow</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm w-48">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M3 13h8m0 0V5m0 8l-4-4m4 4l4-4M13 11l4 4m0 0l4-4m-4 4v8"/>
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Test and optimise</h3>
            <p className="text-gray-600 text-xs">Pick a plan that fits your workflow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;