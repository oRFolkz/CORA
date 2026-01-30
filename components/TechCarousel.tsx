
import React, { useState, useEffect } from 'react';
import { TECH_FEATURES, COLORS } from '../constants';

const TechCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TECH_FEATURES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="tecnologia" className="py-28 bg-white">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair italic text-center mb-6 leading-tight uppercase tracking-tighter">
          LINHAS QUE UNEM <span className="font-bold" style={{ color: COLORS.primary }}>TECNOLOGIA</span>, <br />
          <span className="font-bold" style={{ color: COLORS.primary }}> ESTÉTICA</span> E
          <span className="font-bold" style={{ color: COLORS.primary }}> PRATICIDADE</span>
        </h2>
        <p className="text-center text-gray-500 mb-20 max-w-2xl mx-auto font-montserrat font-medium text-lg tracking-wide">
          Na Cora.Co, cada linha foi desenvolvida para atender às exigências da rotina profissional com sofisticação incomparável.
        </p>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 flex flex-col gap-12">
            <div className="border-b pb-12" style={{ borderColor: COLORS.taupe }}>
              <h3 className="text-base font-bold font-montserrat tracking-[0.3em] text-gray-400 mb-4 uppercase">Linha Exclusiva</h3>
              <h4 className="text-5xl font-playfair font-bold text-gray-900 mb-3 uppercase tracking-tighter">TOP</h4>
              <p className="text-3xl font-playfair italic font-bold mb-6" style={{ color: COLORS.primary }}>ANTIODOR</p>
              <p className="text-gray-500 text-lg font-montserrat leading-relaxed">Coleção pensada para facilitar sua vida e realçar sua beleza natural.</p>
            </div>
            <div>
              <h3 className="text-base font-bold font-montserrat tracking-[0.3em] text-gray-400 mb-4 uppercase">Conforto Diário</h3>
              <h4 className="text-5xl font-playfair font-bold text-gray-900 mb-3 uppercase tracking-tighter">TREND</h4>
              <p className="text-3xl font-playfair italic font-bold mb-6" style={{ color: COLORS.primary }}>CONFORTO</p>
              <p className="text-gray-500 text-lg font-montserrat leading-relaxed">Coleção criada para o seu bem-estar absoluto em qualquer jornada.</p>
            </div>
          </div>

          <div className="lg:w-2/3 relative overflow-hidden h-[600px] w-full group rounded-sm shadow-inner bg-gray-50">
            <div className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1) h-full" style={{ transform: `translateX(-${index * 100}%)` }}>
              {TECH_FEATURES.map((feat) => (
                <div key={feat.id} className="min-w-full h-full relative p-4">
                  <img src={feat.image} className="w-full h-full object-cover rounded-sm grayscale-[0.2] hover:grayscale-0 transition-all duration-700" alt={feat.tag} />
                  <div
                    className="absolute bottom-10 left-10 text-white py-4 px-10 rounded-sm text-base font-bold tracking-[0.3em] shadow-2xl uppercase"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    {feat.tag}
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-12 right-12 flex gap-4">
              {TECH_FEATURES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${i === index ? 'scale-150' : 'bg-gray-300'}`}
                  style={{ backgroundColor: i === index ? COLORS.primary : undefined }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCarousel;