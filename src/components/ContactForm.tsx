import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-gray-600 text-sm">Contact & Support</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Get in touch
          </h1>
          
          <p className="text-gray-600 mb-8">
            Got questions? we've got answers. Learn more about Althor and how it can transform your business.
          </p>

          {/* Contact Info Box */}
          <div className="bg-black text-white rounded-3xl p-8">
            <div className="mb-6">
              <div className="text-gray-400 text-sm mb-2">Email</div>
              <div className="text-white">Janedoe@gmail.com</div>
              <div className="border-b border-gray-800 mt-4"></div>
            </div>

            <div className="mb-6">
              <div className="text-gray-400 text-sm mb-2">Address</div>
              <div className="text-white">Janedoe@gmail.com</div>
              <div className="border-b border-gray-800 mt-4"></div>
            </div>

            <div>
              <div className="text-gray-400 text-sm mb-2">Phone Number</div>
              <div className="text-white">Janedoe@gmail.com</div>
              <div className="border-b border-gray-800 mt-4"></div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div>
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm mb-2">
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
              <label className="block text-gray-700 text-sm mb-2">
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
              <label className="block text-gray-700 text-sm mb-2">
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
              <label className="block text-gray-700 text-sm mb-2">
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

            <button
              onClick={handleSubmit}
              className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Send The Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}