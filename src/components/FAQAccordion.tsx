import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "01/ What does the membership include?",
      answer: "The membership gives you unlimited access, regular updates, priority, support, and expert resources to guide your business goals"
    },
    {
      question: "02/ What does the membership include?",
      answer: "The membership gives you unlimited access, regular updates, priority, support, and expert resources to guide your business goals"
    },
    {
      question: "03/ What does the membership include?",
      answer: "The membership gives you unlimited access, regular updates, priority, support, and expert resources to guide your business goals"
    },
    {
      question: "04/ What does the membership include?",
      answer: "The membership gives you unlimited access, regular updates, priority, support, and expert resources to guide your business goals"
    },
    {
      question: "05/ What does the membership include?",
      answer: "The membership gives you unlimited access, regular updates, priority, support, and expert resources to guide your business goals"
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left side - Header */}
        <div className="flex flex-col justify-start pt-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600">FAQs</span>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Need answers?
          </h1>
          <p className="text-gray-600 text-lg">
            Got questions? we've got answers. Learn more about Althor and how it can transform your business.
          </p>
        </div>

        {/* Right side - Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4 w-6 h-6 bg-gray-900 rounded flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-white" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}