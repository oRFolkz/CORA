
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getStylingRecommendation(profession: string, preferences: string) {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Com base na profissão ${profession} e na preferência ${preferences}, sugira qual modelo da Cora (Alina, Vênus, Minerva, Sabrina, Flávia, Cássia) é o mais indicado. Responda em Português de forma curta e elegante, destacando benefícios profissionais como praticidade e estilo.`,
    config: {
      temperature: 0.7,
      maxOutputTokens: 200,
      thinkingConfig: { thinkingBudget: 0 }
    },
  });

  return response.text;
}
