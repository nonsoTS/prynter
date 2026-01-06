import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import Button from "./Button";
import { useInView } from "react-intersection-observer";

export default function ContactForm() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div id="contact" className="min-h-screen p-8 pt-20 lg:pt-30">
      <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left Section */}
        <div
          className={`animate__animated ${
            inView ? "animate__fadeInLeft animate__slow" : "opacity-0"
          }`}
        >
          <SectionHeader
            content="Contact and Support"
            classes={"mx-auto lg:mx-0"}
          />

          <p className="text-5xl font-semibold text-gray-900 mb-4">
            Get in touch
          </p>

          <p className="text-gray-600 mb-8">
            Got questions? we’ve got answers. Learn more about Pryntar and how
            it can transform your business.
          </p>

          {/* Contact Info Box */}
          <div className="bg-black text-white rounded-3xl p-8">
            <div className="mb-6">
              <div className="text-gray-400 text-sm mb-2">Email</div>
              <div className="text-white">Janedoe@gmail.com</div>
              <div className="border-b border-gray-800 mt-4"></div>
            </div>

            <div className="mb-6">
              <div className="text-gray-400 text-sm mb-2">Chat with us</div>
              <div className="text-white">Janedoe@gmail.com</div>
              <div className="border-b border-gray-800 mt-4"></div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div
          className={`animate__animated ${
            inView ? "animate__fadeInRight animate__slow" : "opacity-0"
          } bg-[#E5E5E5] p-4 rounded-2xl`}
        >
          <div className="space-y-6">
            <div>
              <label className="block text-[#343330C7] text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Janedoe@gmail.com"
                className="w-full px-4 py-3 bg-white border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-[#343330C7] text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Janedoe@gmail.com"
                className="w-full px-4 py-3 bg-white border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-[#343330C7] text-sm mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject (Optional)"
                className="w-full px-4 py-3 bg-white border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-[#343330C7] text-sm mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message..."
                rows={6}
                className="w-full px-4 py-3 bg-white border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              ></textarea>
            </div>

            <Button
              styles="w-full! mt-4"
              buttonStyles="w-full!"
              handleClick={handleSubmit}
            >
              Send The Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
