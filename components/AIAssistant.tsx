
import React, { useState } from 'react';
import { getStylingRecommendation } from '../services/geminiService';
import { COLORS } from '../constants';

const AIAssistant: React.FC = () => {
  const [profession, setProfession] = useState('');
  const [preference, setPreference] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const rec = await getStylingRecommendation(profession, preference);
      setRecommendation(rec || "Não consegui gerar uma recomendação no momento.");
    } catch (error) {
      setRecommendation("Erro ao consultar nosso assistente de estilo.");
    }
    setLoading(false);
  };

  return (
    <div className="border rounded-sm p-12 shadow-2xl mt-24 max-w-4xl mx-auto bg-white" style={{ borderColor: `${COLORS.taupe}20` }}>
      <div className="flex items-center gap-6 mb-10">
        <div className="p-6 rounded-sm shadow-lg" style={{ backgroundColor: COLORS.primary }}>
          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div>
           <h3 className="text-4xl font-playfair font-bold uppercase tracking-tighter" style={{ color: COLORS.primary }}>Assistente de Estilo</h3>
           <span className="text-[16px] font-bold font-montserrat tracking-[0.4em] text-gray-400 uppercase">Inteligência Cora.Co</span>
        </div>
      </div>

      <p className="text-gray-500 mb-12 font-montserrat font-medium text-[18px] leading-relaxed max-w-2xl">
        Dúvida sobre qual modelo combina mais com seu dia? Nosso assistente inteligente te ajuda a escolher a peça perfeita para sua jornada profissional.
      </p>

      <form onSubmit={handleAsk} className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <div className="relative">
          <label className="absolute -top-3 left-4 bg-white px-3 text-[16px] font-bold text-gray-400 uppercase tracking-widest">Sua Profissão</label>
          <input 
            type="text" 
            placeholder="Ex: Esteticista, Dentista..." 
            className="w-full bg-white border border-gray-100 rounded-sm p-6 focus:outline-none focus:border-gray-300 font-montserrat text-[18px]"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          />
        </div>
        <div className="relative">
          <label className="absolute -top-3 left-4 bg-white px-3 text-[16px] font-bold text-gray-400 uppercase tracking-widest">Sua Preferência</label>
          <input 
            type="text" 
            placeholder="Ex: Conforto, Modernidade..." 
            className="w-full bg-white border border-gray-100 rounded-sm p-6 focus:outline-none focus:border-gray-300 font-montserrat text-[18px]"
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
            required
          />
        </div>
        <div className="md:col-span-2">
          <button 
            type="submit" 
            disabled={loading}
            className="w-full text-white font-montserrat font-bold py-6 rounded-sm transition-all disabled:opacity-50 shadow-xl hover:brightness-110 active:scale-[0.99] text-[16px] tracking-[0.2em] uppercase"
            style={{ backgroundColor: COLORS.primary }}
          >
            {loading ? 'PROCESSANDO...' : 'CONSULTAR ASSISTENTE'}
          </button>
        </div>
      </form>

      {recommendation && (
        <div className="bg-gray-50 border-l-[2px] p-10 animate-fade-in shadow-inner rounded-sm" style={{ borderColor: COLORS.primary }}>
          <p className="font-playfair text-[22px] text-gray-800 italic leading-relaxed whitespace-pre-line">
            "{recommendation}"
          </p>
          <div className="mt-8 flex justify-end">
             <span className="font-playfair font-bold text-[18px]" style={{ color: COLORS.primary }}>Cora.Co Style Guide</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;