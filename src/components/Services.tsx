import { Compass, Target, Linkedin, Eye, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Brand Discovery Session',
    description: 'Uncover your unique value proposition and define your brand identity with strategic clarity.',
    color: 'from-blue-600 to-cyan-600',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Target,
    title: 'Brand Coaching Program',
    description: 'Transform your brand with personalized guidance and proven strategies for sustainable growth.',
    color: 'from-slate-700 to-slate-900',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn & Social Profile Makeover',
    description: 'Optimize your digital presence to attract opportunities and build meaningful connections.',
    color: 'from-blue-700 to-blue-900',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Eye,
    title: 'Content & Visibility Coaching',
    description: 'Create compelling content that resonates with your audience and amplifies your message.',
    color: 'from-cyan-600 to-blue-600',
    image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Branding Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored solutions to elevate your brand and accelerate your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/40"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>

                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ArrowRight className="text-white" size={16} />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/90 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 inline-flex items-center space-x-2">
            <span>View All Services</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
