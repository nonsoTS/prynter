import {
  Target,
  Globe,
  BookOpen,
  Zap,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import Button from "./Button";

export default function Hero() {
  const features = [
    {
      icon: Target,
      title: "Precision",
      arrow: "→",
      subtitle: "Creativity",
      description: "Where Precision meets creativity",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Globe,
      title: "Production",
      arrow: "→",
      subtitle: "Global Standards",
      description: "Production built on global standards",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: BookOpen,
      title: "Branding",
      arrow: "→",
      subtitle: "Identity",
      description: "Storytelling that aligns with your brand voice",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Zap,
      title: "Fast",
      arrow: "→",
      subtitle: "Flawless Quality",
      description: "Fast turnaround. Flawless quality",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: TrendingUp,
      title: "Scale",
      arrow: "→",
      subtitle: "Limitless",
      description: "Scale without limits, effortlessly",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Lightbulb,
      title: "Ideas",
      arrow: "→",
      subtitle: "Experience",
      description: "Where ideas become tangible experience",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="relative w-full">
        {/* Feature Cards */}
        <div className="relative w-full h-[75vh] flex flex-col items-center justify-start overflow-hidden">
          <div className="w-full lg:w-1/2 space-y-4 scroll-up">
            {[...features, ...features, ...features].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-2 pr-5 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-between group cursor-pointer border-4 border-gray-200 hover:border-gray-300 rounded-full"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`bg-gray-200 w-14 h-14 rounded-full flex items-center justify-center`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">
                        {feature.title}
                      </span>
                      <span className="text-gray-400 font-light">
                        {feature.arrow}
                      </span>
                      <span className="font-semibold text-gray-900">
                        {feature.subtitle}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="rotate-90">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="5" cy="12" r="1" fill="currentColor" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                    <circle cx="19" cy="12" r="1" fill="currentColor" />
                    <circle cx="5" cy="6" r="1" fill="currentColor" />
                    <circle cx="12" cy="6" r="1" fill="currentColor" />
                    <circle cx="19" cy="6" r="1" fill="currentColor" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 right-0 left-0 bg-[#f0f0f0] add-box-shadow p-4 text-center">
          <p className="text-5xl md:text-6xl font-semibold text-gray-900 mb-4 leading-tight">
            Merch, events and
            <br />
            Prints made memorable
          </p>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We bring your ideas to life with precision, speed and excellence.
          </p>
          <div className="relative flex gap-4 justify-center">
            <Button>Request a Quote</Button>
            <Button>Explore Our Services</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
