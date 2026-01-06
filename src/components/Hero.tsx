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
    <div className="min-h-screen flex items-center justify-center px-2 lg:px-8">
      <div className="relative w-full">
        {/* Feature Cards */}
        <div className="relative w-full h-[90vh] lg:h-[75vh] flex flex-col items-center justify-start overflow-hidden">
          <div className="w-5/6 lg:w-1/2 space-y-4 scroll-up">
            {[...features, ...features, ...features].map((feature, index) => (
              <div
                key={index}
                className="animate__animated animate__fadeInUp bg-white p-1.5 pr-3 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-between group cursor-pointer border-2 border-gray-200 hover:border-gray-300 rounded-full"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center shrink-0`}
                  >
                    <feature.icon className={`w-4 h-4 ${feature.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="font-semibold text-gray-900 text-sm">
                        {feature.title}
                      </span>
                      <span className="text-gray-400 font-light text-sm">
                        {feature.arrow}
                      </span>
                      <span className="font-semibold text-gray-900 text-sm">
                        {feature.subtitle}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="rotate-90">
                  <svg
                    className="w-4 h-4 text-gray-400"
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
        <div className="animate__animated animate__fadeInUp absolute bottom-0 right-0 left-0 bg-[#f0f0f0] add-box-shadow p-2 lg:p-4 text-center">
          <p className="text-3xl md:text-6xl font-semibold text-gray-900 mb-4 leading-tight">
            Merch, events and
            <br />
            Prints made memorable
          </p>
          <p className="text-gray-600 mb-8 text-sm lg:text-base">
            We bring your ideas to life with precision, speed and excellence.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-center">
            <Button link="#contact" styles="w-full! lg:w-fit!" buttonStyles="w-full! lg:w-fit!">
              Request a Quote
            </Button>
            <Button link="#services" styles="w-full! lg:w-fit!" buttonStyles="w-full! lg:w-fit!">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
