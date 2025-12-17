import { Target, TrendingUp } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Solutions() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <SectionHeader content="About Us" />

          <div className="flex items-start justify-between">
            <h1 className="text-5xl font-bold">
              Next-gen <span className="text-gray-500">AI solutions</span>
            </h1>
            <div className="text-right text-sm text-gray-600 max-w-xs mt-2">
              Deep Technical expertise + fast execution<br />
              so you move with confidence and impact
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Mission/Vision Card */}
          <div className="bg-black text-white p-8 rounded-3xl">
            <div className="mb-8">
              <Target className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We give start-ups and forward thinking teams the expertise and product strategy they need to launch faster and smarter
              </p>
            </div>
            <div>
              <TrendingUp className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We give start-ups and forward thinking teams the expertise and product strategy they need to launch faster and smarter
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl">
              <div className="text-5xl font-bold mb-4">155+</div>
              <div className="text-sm text-gray-600">Happy clients worldwide</div>
            </div>
            <div className="bg-white p-8 rounded-3xl">
              <div className="text-5xl font-bold mb-4">300+</div>
              <div className="text-sm text-gray-600">Hours saved per month</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl">
              <div className="text-5xl font-bold mb-4">55%</div>
              <div className="text-sm text-gray-600">Reduction in manual work</div>
            </div>
            <div className="bg-white p-8 rounded-3xl">
              <div className="text-5xl font-bold mb-4">45%</div>
              <div className="text-sm text-gray-600">Increase in productivity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}