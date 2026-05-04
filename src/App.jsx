import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-textMain selection:bg-accentPrimary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
