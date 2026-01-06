import { useInView } from "react-intersection-observer";

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <footer
      ref={ref}
      className={`animate__animated ${
        inView ? "animate__fadeInUp animate__slow" : "opacity-0"
      } bg-[#E5E5E5] py-12 px-6`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Newsletter Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Join 5k+ Readers
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Get 1 actionable AI tip every Saturday. All in under 4 minutes
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <button className="bg-gray-900 text-white px-4 py-2 rounded-r hover:bg-gray-800 transition-colors cursor-pointer">
                →
              </button>
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#whyUs"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Why Us
                </a>
              </li>
              <li>
                <a
                  href="#clients"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Terms of service
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Socials</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 flex items-center"
                >
                  <span className="mr-2">
                    <img
                      src="/images/XLogo.svg"
                      className="w-6 h-6"
                      alt="X(twitter)"
                    />
                  </span>{" "}
                  X(twitter)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 flex items-center"
                >
                  <span className="mr-2">
                    <img
                      src="/images/InstagramLogo.svg"
                      className="w-6 h-6"
                      alt="Instagram"
                    />
                  </span>{" "}
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 flex items-center"
                >
                  <span className="mr-2">
                    <img
                      src="/images/LinkedinLogo.svg"
                      className="w-6 h-6"
                      alt="LinkedIn"
                    />
                  </span>{" "}
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-600">
            &copy;2025 Pryntar. Designed by Doreen
          </p>
        </div>
      </div>
    </footer>
  );
}
