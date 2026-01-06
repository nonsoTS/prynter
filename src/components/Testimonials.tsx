import { Star } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useInView } from "react-intersection-observer";

export default function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Prymter helped us automate repetitive tasks, allowing us to focus on strategic projects andbetter results",
      author: " Amina Yusuf",
      role: "Event Coordinator",
      image: "user1.jpg",
    },
    {
      id: 2,
      rating: 5,
      text: "Prymter helped us automate repetitive tasks, allowing us to focus on strategic projects andbetter results",
      author: "Tunde Adeyemi",
      role: " Creative Director",
      image: "user2.jpg",
    },
    {
      id: 3,
      rating: 5,
      text: "Prymter helped us automate repetitive tasks, allowing us to focus on strategic projects andbetter results",
      author: "Olumide Balogun",
      role: "Head of Operations",
      image: "user3.jpg",
    },
  ];

  return (
    <div id="clients" className="min-h-screen py-16 px-4 pt-20 lg:pt-30">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`animate__animated ${
            inView ? "animate__fadeInRight" : "opacity-0"
          } flex justify-between items-start mb-12`}
        >
          <div>
            <SectionHeader content="Our Clients" />

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              What our clients say
            </h1>
          </div>
          <div className="hidden md:block text-right max-w-xs">
            <p className="text-sm text-gray-600">
              Real stories from brands that use Prymter to scale faster and
              achieve measurable results.
            </p>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div
          className={`animate__animated ${
            inView ? "animate__fadeInLeft" : "opacity-0"
          } grid grid-cols-1 md:grid-cols-3 gap-6`}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#E5E5E5] rounded-2xl p-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-[#F0F0F0ED] rounded-2xl p-8 mb-8">
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
                <p className="text-gray-700 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={"/images/" + testimonial.image}
                  className="object-cover object-center rounded-full w-12 h-12"
                  alt=""
                />
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
