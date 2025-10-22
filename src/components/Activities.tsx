import { Play, Instagram, Facebook } from 'lucide-react';

const videos = [
  {
    thumbnail: '/517388899_122145872396749911_1339317509963292009_n.jpg',
    title: 'Elon Musk- The man whose vision, idea and hardwork changed the work.',
    description: 'Watch on Facebook',
    link: 'https://www.facebook.com/reel/2203285923485223',
    platform: 'facebook',
  },
  {
    thumbnail: '/499713655_122134492178749911_392058730984465029_n.jpg',
    title: 'What is Economics of Scale business strategy ?',
    description: 'Watch on Facebook',
    link: 'https://www.facebook.com/reel/2567428213589318',
    platform: 'facebook',
  },
  {
    thumbnail: '/Screenshot 2025-10-22 140443.png',
    title: 'Digital Transformation Stories',
    description: 'Latest updates on Instagram',
    link: 'https://www.facebook.com/reel/565364049877276',
    platform: 'instagram',
  },
  {
    thumbnail: '/Screenshot 2025-10-22 135247.png',
    title: 'Behind the Scenes',
    description: 'Follow on Instagram',
    link: 'https://www.facebook.com/reel/1314377623630705',
    platform: 'instagram',
  },
];

export default function Activities() {
  return (
    <div id="activities" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Watch My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Activities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get insights from my latest speaking engagements and thought leadership
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6">
            <a
              href="https://www.facebook.com/efaztajwar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all hover:scale-105"
            >
              <Facebook size={20} />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/efaztajwar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <a
          href={videos[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
        >
          <div className="aspect-video relative">
            <img
              src={videos[0].thumbnail}
              alt={videos[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                <Play className="text-slate-900 ml-1" size={32} fill="currentColor" />
              </div>
            </div>

            <div className="absolute top-6 right-6">
              {videos[0].platform === 'facebook' ? (
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                  <Facebook size={16} />
                  <span className="text-sm font-medium">Facebook</span>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                  <Instagram size={16} />
                  <span className="text-sm font-medium">Instagram</span>
                </div>
              )}
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {videos[0].title}
              </h3>
              <p className="text-gray-200">
                {videos[0].description}
              </p>
            </div>
          </div>
        </a>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {videos.slice(1).map((video, index) => (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <div className="aspect-video relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/50 transition-colors"></div>

                <div className="absolute top-4 right-4">
                  {video.platform === 'facebook' ? (
                    <div className="bg-blue-600/90 text-white p-2 rounded-full backdrop-blur-sm">
                      <Facebook size={16} />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-full backdrop-blur-sm">
                      <Instagram size={16} />
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-slate-900 ml-0.5" size={20} fill="currentColor" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm mb-1">{video.title}</h4>
                  <p className="text-gray-200 text-xs">{video.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Follow me for more content and updates</p>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://www.facebook.com/efaztajwar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110"
            >
              <Facebook size={20} className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/efaztajwar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-110"
            >
              <Instagram size={20} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
