import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      text: "This product has completely transformed how we work. The efficiency gains have been remarkable, and our team couldn't be happier.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      text: "I've tried many similar solutions, but this one stands out for its intuitive design and powerful features. Absolutely worth the investment.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      text: "The customer support is exceptional, and the platform has exceeded all our expectations. I highly recommend it to any growing business.",
      rating: 4
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-orange-50 to-pink-50 py-5 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 text-orange-900">
          Testimontials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src="/api/placeholder/64/64"
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-orange-200"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-orange-900">{testimonial.name}</h3>
                  <p className="text-pink-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i}
                    className="w-5 h-5 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;