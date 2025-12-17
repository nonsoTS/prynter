import { MessageSquare, Headphones, TrendingUp } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Experiences = () => {
  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <SectionHeader content="Services" classes={"mx-auto"} />
        
        <p className="text-6xl font-semibold text-center mb-4">
          AI experiences that solve<br />real problems
        </p>
        
        <p className="text-center text-gray-600">
          Explore the key features that drive our partners growth, day after day.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 - AI-Powered Chatbots */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
            <MessageSquare className="w-6 h-6" />
          </div>
          
          <h3 className="text-xl font-bold mb-2">AI-Powered Chatbots</h3>
          <p className="text-gray-600 mb-6">
            We build custom AI chat solutions for instant support and sales.
          </p>
          
          {/* Tags */}
          <div className="flex gap-2 mb-8">
            <span className="px-3 py-1 bg-red-50 text-red-500 text-xs font-medium rounded-full border border-red-200">
              PLAN
            </span>
            <span className="px-3 py-1 bg-red-50 text-red-500 text-xs font-medium rounded-full border border-red-200">
              ANALYZE
            </span>
            <span className="px-3 py-1 bg-red-50 text-red-500 text-xs font-medium rounded-full border border-red-200">
              FORECAST
            </span>
          </div>
          
          {/* Chat Interface */}
          <div className="space-y-4">
            <p className="text-sm text-gray-500 mb-4">
              Automate support. Engage. Convert. Rep
            </p>
            
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-black rounded-xl"></div>
              <div className="w-10 h-10 bg-black rounded-xl"></div>
              <div className="w-10 h-10 bg-black rounded-xl"></div>
              <div className="flex-1"></div>
              <div className="w-10 h-10 bg-black rounded-xl"></div>
              <div className="w-10 h-10 bg-black rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Card 2 - Voice Assistants */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
            <Headphones className="w-6 h-6" />
          </div>
          
          <h3 className="text-xl font-bold mb-2">Voice Assistants</h3>
          <p className="text-gray-600 mb-6">
            We build smart voice solutions for effortless control and better access
          </p>
          
          {/* Voice Call Items */}
          <div className="space-y-3 mt-12">
            <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-medium text-sm">Potential Buyer</p>
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    INCOMING CALL
                  </p>
                </div>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <div className="w-4 h-4 text-red-500">🎤</div>
              </div>
            </div>

            <div className="bg-black rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                <div>
                  <p className="font-medium text-sm text-white">Potential Buyer</p>
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    INCOMING CALL
                  </p>
                </div>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 text-red-500">🎤</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-medium text-sm">Potential Buyer</p>
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    INCOMING CALL
                  </p>
                </div>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <div className="w-4 h-4 text-red-500">🎤</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Analytics Chart */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6" />
          </div>
          
          <h3 className="text-xl font-bold mb-2">AI-Powered Chatbots</h3>
          <p className="text-gray-600 mb-6">
            We build custom AI chat solutions for instant support and sales.
          </p>
          
          {/* Chart */}
          <div className="mt-12">
            <div className="h-48 relative">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400">
                <span>60%</span>
                <span>50%</span>
                <span>40%</span>
                <span>30%</span>
                <span>20%</span>
                <span>10%</span>
                <span>0%</span>
              </div>
              
              {/* Chart bars */}
              <div className="ml-12 h-full flex items-end justify-between gap-4 border-b border-l border-gray-200">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gradient-to-t from-red-500 to-red-300 rounded-t-lg" style={{height: '45%'}}></div>
                  <span className="text-xs text-red-500 font-medium mt-2">JAN</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gradient-to-t from-red-500 to-red-300 rounded-t-lg" style={{height: '55%'}}></div>
                  <span className="text-xs text-red-500 font-medium mt-2">FEB</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gradient-to-t from-red-500 to-red-300 rounded-t-lg" style={{height: '35%'}}></div>
                  <span className="text-xs text-red-500 font-medium mt-2">MAR</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-black rounded-t-lg" style={{height: '75%'}}></div>
                  <span className="text-xs font-medium mt-2">APR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;