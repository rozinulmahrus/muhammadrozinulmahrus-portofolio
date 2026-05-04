import React from 'react';

const skills = [
  { name: 'React', category: 'Frontend', color: 'text-cyan-400' },
  { name: 'Tailwind CSS', category: 'Frontend', color: 'text-cyan-300' },
  { name: 'Node.js', category: 'Backend', color: 'text-green-500' },
  { name: 'MySQL', category: 'Database', color: 'text-blue-400' },
  { name: 'JavaScript (ES6+)', category: 'Language', color: 'text-yellow-400' },
  { name: 'HTML5 & CSS3', category: 'Frontend', color: 'text-orange-500' }
];

const TechStack = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold">Tech Stack</h2>
        <div className="h-px bg-surfaceHighlight flex-1"></div>
      </div>
      
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <li key={index} className="bg-surface border border-surfaceHighlight rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-accentSecondary hover:-translate-y-1 transition-all duration-300 group cursor-default">
            <span className={`text-4xl mb-4 opacity-80 group-hover:opacity-100 ${skill.color}`}>
              {skill.name.charAt(0)}
            </span>
            <span className="font-semibold text-sm">{skill.name}</span>
            <span className="text-xs text-textMuted mt-1">{skill.category}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;
