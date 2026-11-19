import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Service from './components/Service';
import Contact from './components/Contact';

import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased bg-white text-slate-800 min-h-screen flex flex-col justify-between">
      
      {/* FLOATING NAVBAR */}
      <Navbar />
      
      {/* MAIN CONTENT SPACE */}
      <main className="flex-1">
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Testimonials />
        <Service />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
      
    </div>
  );
}