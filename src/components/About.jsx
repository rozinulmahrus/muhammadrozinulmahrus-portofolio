import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Tentang Saya</h2>
      <div className="bg-surface p-8 rounded-xl border border-surfaceHighlight hover:border-accentSecondary/50 transition-colors">
        <p className="text-textMuted leading-relaxed mb-6 text-left md:text-center text-lg">
          Saya adalah lulusan baru (Fresh Graduate) IT dengan minat besar dalam membangun antarmuka web modern yang tidak hanya terlihat bagus, tetapi juga berperforma tinggi dan <span className="text-accentPrimary">mudah diakses (accessible)</span>.
        </p>
        <p className="text-textMuted leading-relaxed mb-6 text-left md:text-center text-lg">
          Selama masa studi, saya memfokuskan diri pada ekosistem JavaScript, khususnya <span className="text-white font-semibold">React</span> dan <span className="text-white font-semibold">Node.js</span>. Saya percaya bahwa kode yang baik adalah kode yang menyelesaikan masalah nyata dengan cara yang bersih dan dapat dikembangkan.
        </p>
        <p className="text-textMuted leading-relaxed text-left md:text-center text-lg">
          Saya sedang mencari peluang untuk bergabung dengan tim *engineering* yang dinamis, baik di Startup maupun Corporate, di mana saya bisa berkontribusi sekaligus terus belajar praktik terbaik dalam *software development*.
        </p>
      </div>
    </section>
  );
};

export default About;
