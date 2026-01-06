import SectionHeader from "./SectionHeader";
import Button from "./Button";
import { useInView } from "react-intersection-observer";

const Pricing = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="pricing" className="min-h-screen py-16 px-4 pt-20 lg:pt-30">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`animate__animated ${
            inView ? "animate__fadeInRight animate__slow" : "opacity-0"
          } text-center mb-12`}
        >
          <SectionHeader content="Our Pricing" classes={"mx-auto"} />

          <p className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Flexible Pricing
          </p>
          <p className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Tailored To Your Needs
          </p>
          <p className="text-gray-600 text-lg">
            Explpore flexible pricing for your brand
          </p>
        </div>

        <div
          className={`animate__animated ${
            inView ? "animate__fadeInLeft animate__slow" : "opacity-0"
          } grid grid-cols-1 lg:grid-cols-3 gap-6`}
        >
          <div className="bg-black text-white rounded-3xl p-2 transition duration-700 ease-in-out shadow-2xl/30 hover:shadow-2xl/80 hover:-translate-y-4">
            <div className="bg-[#E5E5E5] text-black rounded-3xl p-3">
              <div className="bg-black text-white rounded-3xl px-3 py-6 space-y-2">
                <p className="font-semibold text-lg">Elite Package</p>
                <p className="text-xs">For formal and informal events</p>
              </div>

              <div className="mt-3 p-3 space-y-2">
                <p className="font-semibold text-lg">Subscribe</p>
                <p className="text-sm font-medium text-[#343330C7]">
                  For events, campaigns, ceremonies, launches, and celebrations
                </p>

                <Button
                  link="#contact"
                  styles="w-full! mt-4"
                  buttonStyles="w-full!"
                >
                  Get a quote
                </Button>
              </div>
            </div>
            <div className="p-3 mt-3">
              <p className="font-semibold text-lg mb-2">Features:</p>
              <ul className="list-image-[url(/images/Check-white.svg)] list-inside space-y-2 text-sm">
                <li>End-to-end event branding</li>
                <li>End-to-end production support</li>
                <li>Dedicated event production coordination</li>
                <li>Bundled pricing for multiple event assets</li>
                <li>Rapid turnaround and deadline-driven execution</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#E5E5E5] rounded-3xl p-2 transition duration-700 ease-in-out shadow-2xl/30 hover:shadow-2xl/80 hover:-translate-y-4">
            <div className="bg-black text-white rounded-3xl p-3">
              <div className="bg-[#E5E5E5] text-black rounded-3xl px-3 py-6 space-y-2">
                <p className="font-semibold text-lg">Pro Package</p>
                <p className="text-xs">For corporate and large organizations</p>
              </div>

              <div className="mt-3 p-3 space-y-2">
                <p className="font-semibold text-lg">Subscribe</p>
                <p className="text-sm font-medium">
                  For Large organizations that require scale across teams or
                  subsidiaries
                </p>

                <Button
                  link="#contact"
                  styles="w-full! mt-4"
                  buttonStyles="w-full!"
                >
                  Get a quote
                </Button>
              </div>
            </div>
            <div className="p-3 mt-3">
              <p className="font-semibold text-lg mb-2">Features:</p>
              <ul className="list-image-[url(/images/Check.svg)] list-inside space-y-2 text-sm">
                <li>Three + solutions across teams</li>
                <li>End-to-end production support</li>
                <li>Dedicated event production coordination</li>
                <li>Bundled pricing for multiple event assets</li>
                <li>Rapid turnaround and deadline-driven execution</li>
              </ul>
            </div>
          </div>

          <div className="bg-black text-white rounded-3xl p-2 transition duration-700 ease-in-out shadow-2xl/30 hover:shadow-2xl/80 hover:-translate-y-4">
            <div className="bg-[#E5E5E5] text-black rounded-3xl p-3">
              <div className="relative bg-black text-white rounded-3xl px-3 py-6 space-y-2">
                <p className="font-semibold text-lg">Enterprise Package</p>
                <p className="text-xs">For startups and SMEs</p>

                <span className="absolute top-3 right-3 rounded-full bg-[#FF3700] text-white text-[10px] py-1 px-2">
                  POPULAR
                </span>
              </div>

              <div className="mt-3 p-3 space-y-2">
                <p className="font-semibold text-lg">Subscribe</p>
                <p className="text-sm font-medium text-[#343330C7]">
                  For events, campaigns, ceremonies, launches, and celebrations
                </p>

                <Button
                  link="#contact"
                  styles="w-full! mt-4"
                  buttonStyles="w-full!"
                >
                  Get a quote
                </Button>
              </div>
            </div>
            <div className="p-3 mt-3">
              <p className="font-semibold text-lg mb-2">Features:</p>
              <ul className="list-image-[url(/images/Check-white.svg)] list-inside space-y-2 text-sm">
                <li>End-to-end event branding</li>
                <li>End-to-end production support</li>
                <li>Dedicated event production coordination</li>
                <li>Bundled pricing for multiple event assets</li>
                <li>Rapid turnaround and deadline-driven execution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
