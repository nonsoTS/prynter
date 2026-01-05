import { Brain, Goal, Printer } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Solutions() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <SectionHeader content="About Us" classes={"mx-auto lg:mx-0"} />

          <div className="flex flex-col lg:flex-row items-start justify-between">
            <p className="text-5xl font-bold text-center lg:text-left">
              Next-gen <span className="text-[#57575A]">AI solutions</span>
            </p>
            <div className="text-center lg:text-right text-sm text-gray-600 lg:max-w-xs mt-2">
              Deep expertise + fast execution
              <br className="hidden lg:block" />
              so you move with confidence and impact
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-stretch gap-6 bg-[#E3E3E3] rounded-3xl p-2">
          {/* Mission/Vision Card */}
          <div className="bg-black text-white p-8 rounded-3xl">
            <Brain className="w-8 h-8 mb-4" />

            <h3 className="text-xl font-bold mb-3">Who We Are</h3>

            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              Pryntar is your full-stack partner specializing in high-end
              printing, bespoke merchandise, and brand kit development. We don't
              just execute orders; we power the visual identity of ambitious
              campaigns, high-stakes events, and global organizations.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed">
              We distinguish ourselves by merging craftsmanship with modern,
              cutting-edge technology. Our facility is a hub where creativity
              meets industrial precision, ensuring every asset maintains
              rigorous consistency across all mediums.
            </p>
          </div>

          <div className="bg-black text-white p-8 rounded-3xl">
            <div className="mb-8">
              <Printer className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-3">What We Do</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We bring ideas to life through premium prints, branded assets, and event merchandise. From launch to scale, Pryntar is your reliable engine for world-class results.
              </p>
            </div>
            <div>
              <Goal className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-3">How We Deliver</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                With an expert team and modern technology, we manage every project from design to delivery—ensuring precision, consistency, and speed at every stage.
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="h-full flex flex-col justify-stretch items-stretch gap-2">
            <div className="flex flex-col justify-between items-start bg-white p-8 rounded-3xl h-1/2">
              <div className="text-4xl font-bold mb-4">155+</div>
              <div className="text-sm font-bold">
                Happy clients worldwide
              </div>
            </div>
            <div className="flex flex-col justify-between items-start bg-white p-8 rounded-3xl h-1/2">
              <div className="text-4xl font-bold mb-4">45%</div>
              <div className="text-sm font-bold">Increase in productivity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
