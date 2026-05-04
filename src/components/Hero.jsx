import React, { useState } from 'react';

const Hero = () => {
  const [isCodeView, setIsCodeView] = useState(false);

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <p className="text-accentPrimary font-mono mb-4 text-sm md:text-base">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          M. Rozinul Mahrus.
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-textMuted mb-6">
          I build scalable web apps.
        </h2>
        <p className="text-textMuted max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
          I'm a Full-Stack Developer specializing in React and Node.js. 
          Currently focused on building accessible, human-centered products for startups and corporate environments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#projects" className="px-6 py-3 bg-accentPrimary hover:bg-emerald-600 text-background font-semibold rounded-md transition-all duration-300 transform hover:-translate-y-1">
            Lihat Project
          </a>
          <a href="/cv.pdf" className="px-6 py-3 border border-textMuted hover:border-accentSecondary hover:text-accentSecondary font-semibold rounded-md transition-all duration-300">
            Download CV
          </a>
        </div>
      </div>

      {/* Unique Element: The Toggle Card */}
      <div className="flex-1 w-full max-w-md perspective-1000">
        <div className="flex justify-end mb-2">
          <button 
            onClick={() => setIsCodeView(!isCodeView)}
            className="text-xs font-mono text-textMuted hover:text-accentPrimary flex items-center gap-2 transition-colors bg-surface px-3 py-1 rounded-full border border-surfaceHighlight"
          >
            <span className="text-accentPrimary">&lt;&gt;</span> 
            {isCodeView ? 'View Design' : 'View as Code'}
          </button>
        </div>
        
        {/* Card Container */}
        <div className={`relative w-full aspect-square rounded-xl transition-all duration-700 transform-style-3d ${isCodeView ? 'rotate-y-180' : ''}`}>
          
          {/* Front: Design View */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-surface border border-surfaceHighlight rounded-xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-accentPrimary to-accentSecondary mb-6 p-1">
              <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                 <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-accentPrimary to-accentSecondary">RM</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Rozinul Mahrus</h3>
            <p className="text-accentPrimary font-mono text-sm mb-4">Full-Stack Developer</p>
            <div className="flex gap-4 text-textMuted">
              <span className="px-3 py-1 bg-background rounded-full text-xs border border-surfaceHighlight">React</span>
              <span className="px-3 py-1 bg-background rounded-full text-xs border border-surfaceHighlight">Node.js</span>
            </div>
          </div>

          {/* Back: Code View */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#1e1e1e] border border-surfaceHighlight rounded-xl overflow-hidden shadow-2xl flex flex-col text-left">
            <div className="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-xs font-mono text-gray-400">Profile.jsx</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed overflow-auto">
              <span className="text-pink-400">const</span> <span className="text-blue-400">Developer</span> <span className="text-pink-400">=</span> <span className="text-yellow-200">{'{'}</span><br/>
              &nbsp;&nbsp;name: <span className="text-green-300">'M. Rozinul Mahrus'</span>,<br/>
              &nbsp;&nbsp;role: <span className="text-green-300">'Full-Stack Developer'</span>,<br/>
              &nbsp;&nbsp;skills: [<span className="text-green-300">'React'</span>, <span className="text-green-300">'Node.js'</span>, <span className="text-green-300">'Tailwind'</span>],<br/>
              &nbsp;&nbsp;hardWorker: <span className="text-blue-300">true</span>,<br/>
              &nbsp;&nbsp;problemSolver: <span className="text-blue-300">true</span><br/>
              <span className="text-yellow-200">{'}'}</span>;<br/><br/>
              <span className="text-pink-400">export default</span> <span className="text-blue-400">Developer</span>;
            </div>
          </div>

        </div>
      </div>
      
      {/* CSS for 3D flip effect injected locally for simplicity */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </section>
  );
};

export default Hero;
