import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Efaz Tajwar</h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Managing Director & Digital Creator specializing in personal branding and strategic leadership. Let's transform your vision into reality.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/efaztajwar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/efaztajwar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://euroitechnology.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#insights" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-300">
                <Mail size={20} className="flex-shrink-0 mt-0.5" />
                <span>contact@efaztajwar.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <Phone size={20} className="flex-shrink-0 mt-0.5" />
                <span>+880 123 456 7890</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <span>Tejgaon, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Efaz Tajwar. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="https://euroitechnology.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                euroitechnology.com
              </a>
              <a href="https://euromarblegranite.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                euromarblegranite.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
