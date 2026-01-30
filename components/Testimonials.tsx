
import React from 'react';
import { TESTIMONIALS, COLORS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-28" style={{ backgroundColor: COLORS.taupe }}>
      <div className="container mx-auto px-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white text-center italic mb-24 uppercase tracking-widest">
          O QUE ESTÃO DIZENDO SOBRE A <span className="text-white font-bold">CORA.CO</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Video Section */}
          <div className="lg:col-span-1 sticky top-36">
            <div className="relative rounded-sm overflow-hidden shadow-2xl border-white/20 border">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
              >
                <source src="https://cdn.shopify.com/videos/c/o/v/543c3f7fe5ae4d4cb415305ad329650f.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full cursor-pointer hover:bg-white/40 transition-all">
                <span className="text-white text-2xl">🔊</span>
              </div>
            </div>
          </div>

          {/* Quotes Grid */}
          <div className="lg:col-span-2 space-y-20">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-5/12 aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border-[8px] border-white/10">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="w-full md:w-7/12">
                  <div className="mb-6">
                    <h3 className="text-5xl font-playfair italic text-white mb-2 leading-none uppercase tracking-tighter">
                      {t.name}
                    </h3>
                    <div className="flex flex-col">
                      <span className="font-montserrat font-bold text-white text-base uppercase tracking-[0.2em]">{t.role}</span>
                      <span className="text-white/70 text-base uppercase font-bold tracking-[0.3em] mt-1">{t.location}</span>
                    </div>
                  </div>
                  <p className="text-3xl font-playfair text-white italic leading-relaxed border-l-[1px] pl-10 border-white/30">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;