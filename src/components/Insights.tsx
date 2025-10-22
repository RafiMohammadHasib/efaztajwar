import { ArrowRight, Calendar } from 'lucide-react';

const insights = [
  {
    title: 'Insights & Strategies for Building Your Personal Brand',
    excerpt: 'Discover the fundamental principles that separate successful personal brands from the rest.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 15, 2025',
    readTime: '5 min read',
  },
  {
    title: 'Optimizing Your LinkedIn Profile in 2025',
    excerpt: 'Learn the latest techniques to make your LinkedIn profile stand out and attract opportunities.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 10, 2025',
    readTime: '7 min read',
  },
  {
    title: 'Why Content is the Currency of Personal Branding',
    excerpt: 'Understanding how strategic content creation builds authority and drives engagement.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 5, 2025',
    readTime: '6 min read',
  },
];

export default function Insights() {
  return (
    <div id="insights" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Insights & Strategies for Building
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Your Personal Brand
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights and proven strategies to accelerate your brand growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-white/40"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium text-slate-900 border border-white/60">
                  {insight.readTime}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar size={16} />
                  <span>{insight.date}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {insight.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {insight.excerpt}
                </p>

                <button className="flex items-center space-x-2 text-blue-600 font-semibold group-hover:space-x-3 transition-all">
                  <span>Read More</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#insights" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 inline-flex items-center space-x-2">
            <span>View All Insights</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
