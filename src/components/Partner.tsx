import { X, Check } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Partner() {
  const perks = {
    others: [
      "Inconsistent Quality",
      "Delayed Fulfillment",
      "Fragmented Execution",
      "Rigid & Inflated Pricing",
      "Poor communication",
      "Poor communication",
    ],
    ours: [
      "Multidisciplinary Specialist Team",
      "Precision-Led Execution",
      "Deep Industry Experience",
      "Unwavering Brand Consistency",
      "Expert Material Selection",
      "Quality-First Supervision",
    ],
    us: [
      " Global-Grade Quality",
      "Fast Turnaround & On-Time Delivery",
      "End-to-End Execution",
      "Cost-Effective for Any Scale",
      "Dedicated Support & Project Management",
      "Customization Without Limits",
    ],
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <SectionHeader content="Why Us?" classes={"mx-auto"} />

          <p className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Why we’re the
            <br />
            right print partners
          </p>
          <p className="text-gray-600 text-sm">
            From automation to analytics we bring
            <br />
            your vision to life with custom AI
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="bg-[#E5E5E5] grid grid-cols-1 md:grid-cols-3 gap-6 p-3 rounded-3xl">
          {/* First Column - Other Agencies */}
          <div className="rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-8">Other Companies</h3>
            <div className="space-y-4">
              {perks.others.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Column - Other Agencies */}
          <div className="rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-8">Our Expertise</h3>
            <div className="space-y-4">
              {perks.ours.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Third Column - Working with Us */}
          <div className="bg-black rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-white mb-8">
              Working with Us
            </h3>
            <div className="space-y-4">
              {perks.us.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
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
