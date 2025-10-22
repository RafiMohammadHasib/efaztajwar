import { MapPin, GraduationCap, Home, Link as LinkIcon, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Efaz Tajwar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your strategic partner in digital transformation and business excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/499713655_122134492178749911_392058730984465029_n.jpg"
                alt="About Efaz"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 shadow-xl">
              <p className="text-white font-bold text-lg">4 Years</p>
              <p className="text-blue-100 text-sm">Industry Experience</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              As the Managing Director of Euro Marble and Granite Ltd. and Euro IT, I specialize in helping ambitious professionals and businesses build powerful brands that resonate with their audience and drive sustainable growth.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With 4 years of experience in strategic leadership and digital innovation, I've helped numerous clients transform their vision into reality through tailored solutions and proven methodologies.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <GraduationCap className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-slate-900">Education</p>
                  <p className="text-sm text-gray-600">Monash University Malaysia</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <Home className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-slate-900">Based In</p>
                  <p className="text-sm text-gray-600">Tejgaon</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-slate-900">From</p>
                  <p className="text-sm text-gray-600">Nawabganj, Dhaka</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <LinkIcon className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-slate-900">Companies</p>
                  <div className="space-y-1">
                    <a href="https://euromarbleandgranite.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-700 block">euromarbleandgranite.com</a>
                    <a href="https://euroitechnology.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-700 block">euroitechnology.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-6">
              <p className="text-sm font-semibold text-slate-900">Connect with me:</p>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/efaz.tajwar.7" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Facebook className="text-blue-600" size={20} />
                </a>
                <a href="https://www.instagram.com/efaz_tajwar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Instagram className="text-blue-600" size={20} />
                </a>
                <a href="https://www.linkedin.com/in/efaz-tajwar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Linkedin className="text-blue-600" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
