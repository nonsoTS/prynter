import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useInView } from "react-intersection-observer";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const faqs = [
    {
      question: "01/ How fast is your turnaround time?",
      answer:
        "The membership gives you unlimited access, regular updates, priority, support, and expert resources to guide your business goals",
    },
    {
      question: "02/ Do you offer design services?",
      answer:
        "The membership gives you unlimited access, regular updates, priority, support, and expert resources to guide your business goals",
    },
    {
      question:
        "03/ Do you provide installation for branded spaces and events?",
      answer:
        "The membership gives you unlimited access, regular updates, priority, support, and expert resources to guide your business goals",
    },
    {
      question: "04/ What file formats do you accept?",
      answer:
        "The membership gives you unlimited access, regular updates, priority, support, and expert resources to guide your business goals",
    },
    {
      question: "05/ Can you handle regional or global deliveries?",
      answer:
        "The membership gives you unlimited access, regular updates, priority, support, and expert resources to guide your business goals",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="min-h-screen p-8 pt-20 lg:pt-30">
      <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left side - Header */}
        <div
          className={`animate__animated ${
            inView ? "animate__fadeInLeft animate__slow" : "opacity-0"
          } flex flex-col justify-start pt-8`}
        >
          <SectionHeader content="FAQs" classes={"mx-auto lg:mx-0"} />

          <p className="text-5xl lg:text-6xl font-semibold text-gray-900 mb-4 text-center lg:text-left">
            Need answers?
          </p>
          <p className="text-gray-600 text-sm lg:text-lg mr-0 lg:mr-6 text-center lg:text-left">
            Got questions? we’ve got answers. Learn more about Pryntar and how
            it can transform your business.
          </p>
        </div>

        {/* Right side - Accordion */}
        <div
          className={`animate__animated ${
            inView ? "animate__fadeInRight animate__slow" : "opacity-0"
          } space-y-4`}
        >
          {faqs.map((faq, index: number) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 cursor-pointer transition duration-700 ease-in-out"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <div className="shrink-0 ml-4 w-6 h-6 bg-gray-900 rounded flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-white" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
