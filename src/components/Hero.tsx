import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <nav className="fixed top-4 left-4 right-4 z-50 px-6 py-4 bg-slate-900/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-3xl tracking-tight">
            Efaz Tajwar
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">About</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">Services</a>
            <a href="#insights" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">Blog</a>
            <a href="https://wa.me/+8801339844255" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-6 py-2 rounded-full font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              Book a Consultation
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-white/10 py-4 px-6 rounded-b-2xl mt-2">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2">About</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2">Services</a>
              <a href="#insights" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2">Blog</a>
              <a href="https://wa.me/+8801339844255" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-6 py-2 rounded-full font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white transition-all duration-300 hover:scale-105 text-center">
                Book a Consultation
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block animate-fade-in-up">
              <span className="text-sm font-medium text-gray-300 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Managing Director of Euro Marble and Granite Ltd. & Euro IT
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in-up animation-delay-200">
              You're More Than a Brand.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-cyan-400 hover:to-blue-400 transition-all duration-500">
                You're a Movement.
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-xl animate-fade-in-up animation-delay-400">
              Transform your vision into reality with strategic leadership and innovative digital solutions that drive meaningful impact.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
              <a href="#about" className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:shadow-2xl relative overflow-hidden">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in-up animation-delay-400">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-500"></div>
              <img
                src="/474620451_122098027730749911_8460352468314959962_n.jpg"
                alt="Efaz Tajwar"
                className="relative w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">ET</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Efaz Tajwar</p>
                  <p className="text-sm text-gray-600">Managing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
