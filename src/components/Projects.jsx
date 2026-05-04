import React from 'react';

const projects = [
  {
    title: 'Sistem Manajemen Tugas (TaskFlow)',
    description: 'Dibangun untuk mengatasi inefisiensi pelacakan tugas harian. Menggunakan React untuk UI interaktif dan Node.js/MySQL untuk backend. Mereduksi waktu pencarian tugas sebesar 30%.',
    tech: ['React', 'Node.js', 'Tailwind', 'MySQL'],
    github: '#',
    demo: '#'
  },
  {
    title: 'E-Commerce Dashboard Analytics',
    description: 'Dashboard admin untuk memantau performa penjualan secara real-time. Memiliki fitur filter rentang waktu dan eksport data. Menangani state kompleks menggunakan React Hooks.',
    tech: ['React', 'Chart.js', 'Tailwind', 'REST API'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Aplikasi Rekam Medis Ringan',
    description: 'Solusi digitalisasi rekam medis untuk klinik skala kecil dengan fokus pada keamanan data dan UI mobile-friendly yang mudah digunakan oleh staf medis.',
    tech: ['React', 'Express', 'MySQL', 'Tailwind'],
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="h-px bg-surfaceHighlight flex-1"></div>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <article key={index} className="flex flex-col md:flex-row gap-8 items-center bg-surface p-6 rounded-xl border border-surfaceHighlight hover:border-accentPrimary transition-colors group">
            {/* Image Thumbnail */}
            <div className="w-full md:w-5/12 aspect-video bg-[#1a1a1a] rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-accentPrimary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
              {/* Placeholder image representation */}
              <div className="w-full h-full flex flex-col items-center justify-center border border-dashed border-surfaceHighlight p-4">
                <span className="font-mono text-textMuted text-sm mb-2">{project.title}</span>
                <span className="text-xs text-textMuted bg-background px-2 py-1 rounded">Screenshot Placeholder</span>
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-7/12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 hover:text-accentPrimary transition-colors">
                <a href={project.demo}>{project.title}</a>
              </h3>
              <p className="text-textMuted mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <ul className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, i) => (
                  <li key={i} className="text-xs font-mono text-accentSecondary bg-accentSecondary/10 px-3 py-1 rounded-full border border-accentSecondary/20">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <a href={project.github} className="flex items-center gap-2 text-sm font-semibold hover:text-accentPrimary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  GitHub
                </a>
                <a href={project.demo} className="flex items-center gap-2 text-sm font-semibold hover:text-accentPrimary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
