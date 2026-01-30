
import React, { useState, useEffect } from 'react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full h-[80px] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md border-b border-gray-100' : 'bg-[#e3e1d2]'}`}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-6 lg:px-12 flex flex-1 justify-center py-0">
          <div className="layout-content-container flex flex-col max-w-[1440px] flex-1">
            <div className="flex items-center justify-between whitespace-nowrap h-full">
              <div className="flex items-center z-20">
                <a href="/" className="block">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0654/6138/7478/files/UNICA-PRINCIPAL.webp"
                    alt="Unica Logo"
                    className="h-10 lg:h-12 w-auto object-contain"
                  />
                </a>
              </div>

              <div className="hidden lg:flex flex-1 justify-center gap-12 absolute inset-x-0 mx-auto w-fit">
                {['Modelos', 'Linhas', 'Diferenciais', 'Atendimento'].map((item) => (
                  <a
                    key={item}
                    className="text-[#171212] text-[16px] font-semibold hover:text-[#8b434f] transition-colors tracking-[0.15em] uppercase font-sans"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                ))}
              </div>

              <div className="flex justify-end gap-6 items-center z-20">
                <a className="hidden sm:block text-[#171212] text-[16px] font-semibold tracking-[0.15em] uppercase hover:text-[#8b434f] transition-colors font-sans" href="#">Login</a>
                <span className="hidden sm:block h-4 w-px bg-[#171212]/20"></span>
                <button className="hidden sm:flex cursor-pointer items-center justify-center text-[#171212] hover:text-[#8b434f] transition-colors">
                  <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                </button>
                <button className="lg:hidden text-[#171212]">
                  <span className="material-symbols-outlined text-3xl">menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
