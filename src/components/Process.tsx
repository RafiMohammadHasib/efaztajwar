import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Understand your goals, values & aspirations',
    description: 'Deep dive into your vision and objectives',
  },
  {
    title: 'Craft your positioning and messaging',
    description: 'Define your unique value proposition',
  },
  {
    title: 'Launch your authentic personal brand',
    description: 'Execute with precision and impact',
  },
];

export default function Process() {
  return (
    <div className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                My Coaching Process,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Simplified
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                A proven methodology designed to unlock your full potential
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="text-white" size={20} />
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#about" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all hover:scale-105 shadow-lg">
              Learn More About My Process
            </a>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/Screenshot 2025-10-22 135247.png"
                alt="Coaching Process"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl max-w-xs border border-white/40">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-400/30">
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">100%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                All our partners achieve their brand goals within 90 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
