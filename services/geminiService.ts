
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getMusicalMood = async (description: string) => {
  if (!API_KEY) return "AI Key not configured.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Suggest a musical mood and instrumentation for this scene/feeling: "${description}". Keep it artistic and professional, like Julian Thorne's style.`,
    config: {
      temperature: 0.8,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          mood: { type: Type.STRING },
          instrumentation: { type: Type.STRING },
          advice: { type: Type.STRING }
        },
        required: ["mood", "instrumentation", "advice"]
      }
    }
  });

  return JSON.parse(response.text || "{}");
};
