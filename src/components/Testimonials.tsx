import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rafi Md. Hasib',
    role: 'CEO, Grand Trend Agency',
    image: '/rafi-md-hasib.jpg',
    text: "Before working with Efaz Sir, I struggled with my personal brand. His strategic approach helped me clarify my message and expand my network exponentially. Best investment I've made!",
    rating: 5,
  },
  {
    name: 'Md. Shakil Mahmud',
    role: 'Entrepreneur & Speaker, MSM WEB',
    image: '/md-shakil-mahmud.jpg',
    text: "Efaz Sir's coaching transformed how I present myself online. Within 3 months, my LinkedIn engagement increased 300% and I landed multiple speaking opportunities.",
    rating: 5,
  },
  {
    name: 'Mohammad Hossain Jony',
    role: 'Managing Director, Rahman Regnum Resources',
    image: '/md-jony-sikder.jpg',
    text: "I used to feel invisible in my industry. Efaz helped me discover my unique voice and craft compelling content. Now I'm regularly featured in industry publications!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">My Clients</span> Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from people who transformed their brands with strategic guidance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div className="absolute top-8 right-8 text-blue-100">
                <Quote size={48} fill="currentColor" />
              </div>

              <div className="relative">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/60">
            <div className="flex -space-x-2">
              {testimonials.map((t, i) => (
                <img
                  key={i}
                  src={t.image}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-slate-900">
              <span className="font-bold">200+</span> professionals transformed their brands
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
