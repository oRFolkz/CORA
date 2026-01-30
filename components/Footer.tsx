
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="atendimento" className="w-full">
      {/* Editorial Mission Section - Sharp Luxury Redesign */}
      <div className="flex flex-col lg:flex-row w-full bg-[#e3e1d2]">
        <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] overflow-hidden order-2 lg:order-1">
          <img
            alt="Grupo de mulheres profissionais sorridentes vestindo uniformes Cora"
            className="absolute inset-0 w-full h-full object-cover object-center grayscale-[0.2] transition-transform duration-[4000ms] hover:scale-105"
            src="https://cdn.shopify.com/s/files/1/0654/6138/7478/files/footer-img.webp"
          />
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute inset-10 border border-white/20 pointer-events-none hidden lg:block"></div>
        </div>

        <div className="w-full lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center text-[#171212] order-1 lg:order-2">
          <div className="max-w-xl">
            <span className="text-[14px] font-bold uppercase tracking-[0.5em] text-[#8b434f] block mb-8">Nossa Missão Editorial</span>

            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl mb-12 leading-[0.95] tracking-tighter uppercase">
              Roupas para <br /> trabalhar. <br />
              Um <span className="text-[#8b434f] italic font-normal">propósito</span> para <br /> vestir.
            </h2>

            <div className="w-16 h-px bg-[#8b434f]/30 mb-12"></div>

            <div className="space-y-8 text-[16px] lg:text-[18px] font-sans font-light leading-relaxed opacity-80 border-l border-[#8b434f]/20 pl-8">
              <p>
                A Cora é uma marca criada para enaltecer profissionais que fazem do cuidado o seu ofício. Pensamos cada detalhe com atenção à estética, à funcionalidade e ao conforto, porque acreditamos que vestir-se bem é parte do reconhecimento.
              </p>
              <p>
                Com mais de 20 anos de experiência na moda, nosso propósito é valorizar quem transforma rotina em excelência e contribuir para a redução do descarte têxtil no meio ambiente.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links/Contact Section - Refined */}
      <div className="bg-[#e3e1d2] pb-20 px-6 lg:px-20 pt-16 border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-16">

          {/* Contact Info */}
          <div className="text-[#171212] flex flex-col gap-8 text-[16px] font-medium w-full md:w-auto">
            <div className="flex items-center gap-6 group">
              <i className="ph-light ph-map-pin text-2xl text-[#8b434f]"></i>
              <span className="tracking-widest uppercase font-sans font-bold text-[14px] group-hover:text-[#8b434f] transition-colors">Base em São Paulo</span>
            </div>
            <div className="flex items-center gap-6 group">
              <i className="ph-light ph-storefront text-2xl text-[#8b434f]"></i>
              <span className="tracking-widest uppercase font-sans font-bold text-[14px] group-hover:text-[#8b434f] transition-colors">Loja Própria</span>
            </div>
            <div className="flex items-start gap-6 group">
              <i className="ph-light ph-chat-circle text-2xl text-[#8b434f] mt-1"></i>
              <div className="flex flex-col">
                <span className="uppercase text-[14px] font-bold tracking-widest mb-1">Agende sua visita via WhatsApp</span>
                <span className="font-display italic text-xl lg:text-2xl text-[#171212] group-hover:text-[#8b434f] transition-colors">+55 11 94249-8914</span>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <i className="ph-light ph-globe text-2xl text-[#8b434f]"></i>
              <span className="tracking-widest uppercase font-sans font-bold text-[14px]">
                Site: <a className="hover:text-[#8b434f] transition-colors" href="https://usecora.co/" target="_blank" rel="noreferrer">www.usecora.co</a>
              </span>
            </div>
          </div>

          {/* Branding & Social */}
          <div className="flex flex-col items-center justify-center text-[#171212]">
            <div className="mb-10">
              <img
                src="https://cdn.shopify.com/s/files/1/0654/6138/7478/files/UNICA-PRINCIPAL.webp"
                alt="Unica Branding"
                className="h-14 lg:h-16 w-auto object-contain opacity-90"
              />
            </div>

            <div className="flex items-center gap-10">
              {[
                { icon: 'ph-light ph-whatsapp-logo', link: 'https://api.whatsapp.com/send/?phone=5511942498914&text=Oi%2C+vim+da+loja+online+da+Unica.+Quero+saber+mais+sobre+roupas+para+o+setor+de+beleza%21&type=phone_number&app_absent=0' },
                { icon: 'ph-light ph-globe', link: 'https://usecora.co/' },
                { icon: 'ph-light ph-instagram-logo', link: 'https://www.instagram.com/useunicaoficial' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  aria-label="Social Link"
                  className="w-12 h-12 flex items-center justify-center border border-[#171212]/20 rounded-full hover:border-[#8b434f] hover:text-[#8b434f] bg-transparent transition-all duration-500 text-[#171212]/60"
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={`${social.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Credits Bar - Sharp High Contrast */}
      <div className="bg-[#8b434f] py-6">
        <div className="w-full text-center">
          <p className="text-white/80 text-[14px] font-bold tracking-[0.5em] uppercase font-sans">
            Feito por: <span className="text-white">nexgenius</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
