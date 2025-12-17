import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Prymter helped us automate repetitive tasks, allowing us to focus on strategic projects andbetter results",
      author: "Lucas Harris",
      role: "CEO & Founder"
    },
    {
      id: 2,
      rating: 5,
      text: "Prymter helped us automate repetitive tasks, allowing us to focus on strategic projects andbetter results",
      author: "Lucas Harris",
      role: "CEO & Founder"
    },
    {
      id: 3,
      rating: 5,
      text: "Prymter helped us automate repetitive tasks, allowing us to focus on strategic projects andbetter results",
      author: "Lucas Harris",
      role: "CEO & Founder"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Our Clients</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              What our clients say
            </h1>
          </div>
          <div className="hidden md:block text-right max-w-xs">
            <p className="text-sm text-gray-600">
              Real stories from brands that use Prymter to scale faster and achieve measurable results.
            </p>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-8 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}