import { useInView } from "react-intersection-observer";
import { Printer, Gift, Shirt } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} id="services" className="min-h-screen p-8 pt-20 lg:pt-30">
      {/* Header */}
      <div
        className={`animate__animated ${
          inView ? "animate__fadeInRight animate__slow" : "opacity-0"
        } max-w-7xl mx-auto mb-12`}
      >
        <SectionHeader content="Services" classes={"mx-auto"} />

        <p className="text-3xl lg:text-6xl font-bold lg:font-semibold text-center mb-4">
          360 Printing & Branding
          <br />
          Solutions Tailored For You.
        </p>

        <p className="text-xs lg:text-base text-center text-gray-600">
          Explore the key features that drive our partners growth, day after
          day.
        </p>
      </div>

      {/* Cards Grid */}
      <div
        className={`animate__animated ${
          inView ? "animate__fadeInLeft animate__slow" : "opacity-0"
        } mx-auto grid grid-cols-1 md:grid-cols-3 gap-6`}
      >
        <div className="flex flex-col justify-between items-stretch bg-[#E5E5E5] rounded-3xl p-4 shadow-sm">
          <div>
            <Printer className="w-6 h-6 mb-2" />

            <p className="text-xl font-bold mb-2">
              Print and Production Services
            </p>
            <p className="text-gray-600 mb-6">
              Precision printing solutions at any scale.
            </p>
          </div>

          <div className="space-y-3 mt-6">
            <div className="bg-gray-50 rounded-full p-2 flex items-center justify-between">
              <div className="w-full flex flex-row justify-between items-center gap-x-1">
                <div className="flex flex-row justify-center items-center w-12 h-12 bg-gray-300 rounded-full p-2 shrink-0">
                  <img src="/images/image-5.svg" alt="" />
                </div>
                <div>
                  <p className="font-medium text-[12px] mb-1">
                    Marketing & Corporate Assets
                  </p>
                  <p className="text-[10px] text-[#343330C7] flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full shrink-0"></span>
                    Business cards, brochures, flyers, posters
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center w-12 h-12 bg-gray-300 rounded-full p-2 shrink-0">
                  <Printer color={"#FF3700"} className="m-0" />
                </div>
              </div>
            </div>

            <div className="bg-black rounded-full p-2 flex items-center justify-between">
              <div className="w-full flex flex-row justify-between items-center gap-x-1">
                <div className="flex flex-row justify-center items-center w-12 h-12 rounded-full p-2">
                  <img src="/images/image-7.svg" alt="" />
                </div>
                <div>
                  <p className="font-medium text-[12px] mb-1 text-white">
                    Large format & Outdoor Branding
                  </p>
                  <p className="text-[10px] text-[#D9D9D9EB] flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full shrink-0"></span>
                    Banners, backdrops, billboards, wall wraps
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center w-12 h-12 rounded-full p-2">
                  <Printer color={"#FF3700"} className="m-0" />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-full p-2 flex items-center justify-between">
              <div className="w-full flex flex-row justify-between items-center gap-x-1">
                <div className="flex flex-row justify-center items-center w-12 h-12 bg-gray-300 rounded-full p-2 shrink-0">
                  <img src="/images/image-8.svg" alt="" />
                </div>
                <div>
                  <p className="font-medium text-[12px] mb-1">
                    Packaging & Custom Print
                  </p>
                  <p className="text-[10px] text-[#343330C7] flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full shrink-0"></span>
                    Custom packaging, stickers, QR codes, tags
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center w-12 h-12 bg-gray-300 rounded-full p-2 shrink-0">
                  <Printer color={"#FF3700"} className="m-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-stretch bg-[#E5E5E5] rounded-3xl p-4 shadow-sm">
          <div>
            <Gift className="w-6 h-6 mb-2" />

            <p className="text-xl font-bold mb-2">
              Events, Campaigns and Branding
            </p>
            <p className="text-gray-600 mb-6">
              Transforming spaces, stages, and stories into unforgettable
              branded moments
            </p>
          </div>

          <div className="space-y-3 mt-6">
            <div className="bg-gray-50 rounded-full p-2 flex items-center justify-between">
              <div className="w-full flex flex-row justify-between items-center gap-x-1">
                <div className="flex flex-row justify-center items-center w-12 h-12 bg-gray-300 rounded-full p-2 shrink-0">
                  <img src="/images/image-5.svg" alt="" />
                </div>
                <div>
                  <p className="font-medium text-[12px] mb-1">
                    Event Brand Production
                  </p>
                  <p className="text-[10px] text-[#343330C7] flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full shrink-0"></span>
                    Stage backdrops, media walls, props.
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center w-12 h-12 bg-gray-300 rounded-full p-2 shrink-0">
                  <Gift color={"#FF3700"} className="m-0" />
                </div>
              </div>
            </div>

            <div className="bg-black rounded-full p-2 flex items-center justify-between">
              <div className="w-full flex flex-row justify-between items-center gap-x-1">
                <div className="flex flex-row justify-center items-center w-12 h-12 rounded-full p-2">
                  <img src="/images/image-7.svg" alt="" />
                </div>
                <div>
                  <p className="font-medium text-[12px] mb-1 text-white">
                    Corporate & Campaign Activations
                  </p>
                  <p className="text-[10px] text-[#D9D9D9EB] flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full shrink-0"></span>
                    Press events, summits, tradefairs, roadshows,
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center w-12 h-12 rounded-full p-2">
                  <Gift color={"#FF3700"} className="m-0" />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-full p-2 flex items-center justify-between">
              <div className="w-full flex flex-row justify-between items-center gap-x-1">
                <div className="flex flex-row justify-center items-center w-12 h-12 bg-gray-300 rounded-full p-2 shrink-0">
                  <img src="/images/image-8.svg" alt="" />
                </div>
                <div>
                  <p className="font-medium text-[12px] mb-1">
                    Promotional & Launch Materials
                  </p>
                  <p className="text-[10px] text-[#343330C7] flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full shrink-0"></span>
                    Product launch kits, experiential branding
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center w-12 h-12 bg-gray-300 rounded-full p-2 shrink-0">
                  <Gift color={"#FF3700"} className="m-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-stretch bg-[#E5E5E5] rounded-3xl p-4 shadow-sm">
          <div>
            <Shirt className="w-6 h-6 mb-2" />

            <p className="text-xl font-bold mb-2">
              Custom Merch, Apparel and Swags
            </p>
            <p className="text-gray-600 mb-6">
              Premium merchandise designed to make teams, customers, and
              communities feel connected.
            </p>
          </div>

          <div className="self-end space-y-3 mt-6">
            <div className="bg-gray-50 rounded-full p-2 flex items-center justify-between">
              <div className="w-full flex flex-row justify-between items-center gap-x-1">
                <div className="flex flex-row justify-center items-center w-12 h-12 bg-gray-300 rounded-full p-2 shrink-0">
                  <img src="/images/image-5.svg" alt="" />
                </div>
                <div>
                  <p className="font-medium text-[12px] mb-1">
                    Apparel & Wearables
                  </p>
                  <p className="text-[10px] text-[#343330C7] flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full shrink-0"></span>
                    Branded T-shirts, hoodies, uniforms, jerseys
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center w-12 h-12 bg-gray-300 rounded-full p-2 shrink-0">
                  <Shirt color={"#FF3700"} className="m-0" />
                </div>
              </div>
            </div>

            <div className="bg-black rounded-full p-2 flex items-center justify-between">
              <div className="w-full flex flex-row justify-between items-center gap-x-1">
                <div className="flex flex-row justify-center items-center w-12 h-12 rounded-full p-2">
                  <img src="/images/image-7.svg" alt="" />
                </div>
                <div>
                  <p className="font-medium text-[12px] mb-1 text-white">
                    Corporate & PR Gifts
                  </p>
                  <p className="text-[10px] text-[#D9D9D9EB] flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full shrink-0"></span>
                    Notebooks, pens, mugs, tech accessories
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center w-12 h-12 rounded-full p-2">
                  <Shirt color={"#FF3700"} className="m-0" />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-full p-2 flex items-center justify-between">
              <div className="w-full flex flex-row justify-between items-center gap-x-1">
                <div className="flex flex-row justify-center items-center w-12 h-12 bg-gray-300 rounded-full p-2 shrink-0">
                  <img src="/images/image-8.svg" alt="" />
                </div>
                <div>
                  <p className="font-medium text-[12px] mb-1">
                    Full Swag Box Production
                  </p>
                  <p className="text-[10px] text-[#343330C7] flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full shrink-0"></span>
                    Onboarding boxes, event packs, investor kits, team merch
                    bundles
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center w-12 h-12 bg-gray-300 rounded-full p-2 shrink-0">
                  <Shirt color={"#FF3700"} className="m-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
