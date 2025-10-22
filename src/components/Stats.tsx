import { TrendingUp, Users, Award, Briefcase } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: '100+', label: 'Projects Delivered' },
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: Award, value: '4+', label: 'Years Experience' },
  { icon: Briefcase, value: '200+', label: 'Success Stories' },
];

export default function Stats() {
  return (
    <div className="relative -mt-16 z-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/60 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-transform border border-white/60">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
