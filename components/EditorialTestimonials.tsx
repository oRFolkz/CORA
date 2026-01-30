
import React, { useState, useRef } from 'react';

const EditorialTestimonials: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="bg-[#e3e1d2] py-24 lg:py-32 overflow-hidden border-t border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        {/* Main Section Title - Playfair Display */}
        <div className="text-center mb-24 lg:mb-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-[#8b434f] uppercase">
            O que estão dizendo sobre a Cora
          </h2>
        </div>

        {/* 4-Column Grid for the 50/25/25 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 items-start">

          {/* Column 1 & 2: Natália Deodato (50% Width) */}
          <div className="lg:col-span-2 flex flex-col group">
            <div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-[1.3/1] overflow-hidden bg-stone-300 shadow-[0_20px_50px_rgba(0,0,0,0.1)] mb-10 sticky top-24 z-30">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000"
              >
                <source src="https://cdn.shopify.com/videos/c/o/v/543c3f7fe5ae4d4cb415305ad329650f.mp4" type="video/mp4" />
              </video>

              {/* Overlay Mute Button - Subtle Design */}
              <button
                onClick={toggleMute}
                className="absolute bottom-8 right-8 z-20 w-14 h-14 flex items-center justify-center bg-[#8b434f]/90 backdrop-blur-md rounded-full text-white hover:bg-[#8b434f] transition-all transform hover:scale-110 active:scale-95 shadow-xl"
              >
                <span className="material-symbols-outlined text-3xl">
                  {isMuted ? 'volume_off' : 'volume_up'}
                </span>
              </button>
            </div>
          </div>

          {/* Column 3: Renata (25% Width - 1:2 Aspect) */}
          <div className="lg:col-span-1 flex flex-col group">
            <div className="relative w-full aspect-[1/2] overflow-hidden mb-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] bg-stone-400">
              <img
                alt="Renata"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                src="https://cdn.shopify.com/s/files/1/0654/6138/7478/files/Depoimento2.webp?v=1758573100"
              />
            </div>
            <div className="space-y-3">
              <h4 className="font-sans font-bold text-[16px] tracking-widest text-[#8b434f] uppercase">
                Renata
              </h4>
              <p className="text-[14px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                Esteticista
              </p>
              <blockquote className="font-sans text-[16px] lg:text-[18px] leading-relaxed text-[#171212] italic pt-3 font-light">
                "Ficava com vergonha do branco transparente... agora uso a linha TOP e é <span className="font-bold text-[#8b434f]">zero transparência!</span>"
              </blockquote>
            </div>
          </div>

          {/* Column 4: Dra. Camila / Natália (25% Width - 1:2 Aspect) */}
          <div className="lg:col-span-1 flex flex-col group">
            <div className="relative w-full aspect-[1/2] overflow-hidden mb-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] bg-stone-400">
              <img
                alt="Dra. Camila"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                src="https://cdn.shopify.com/s/files/1/0654/6138/7478/files/Depoimento1.webp?v=1758202913"
              />
            </div>
            <div className="space-y-3">
              <h4 className="font-sans font-bold text-[16px] tracking-widest text-[#8b434f] uppercase">
                Natália Deodato
              </h4>
              <p className="text-[14px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                Ex-BBB e Profissional da Beleza
              </p>
              <blockquote className="font-sans text-[16px] lg:text-[18px] leading-relaxed text-[#171212] italic pt-3 font-light">
                "Quando vesti Cora pela primeira vez, me senti mais profissional. Minhas clientes elogiam até hoje."
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EditorialTestimonials;
