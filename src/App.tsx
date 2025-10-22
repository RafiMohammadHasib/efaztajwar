import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Activities from './components/Activities';
import Insights from './components/Insights';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <Activities />
      <Insights />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
