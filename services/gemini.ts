
import { GoogleGenAI, Type } from "@google/genai";

export async function getRecommendation(userGoal: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `El usuario busca: "${userGoal}". 
    
    Eres el CLOSER #1 de AVM Clinic. Tu objetivo es asesorar y VENDER.
    DATOS REALES DE PRECIOS:
    - Armonización Orofacial: $5.500.000 (Desde)
    - Diseño de Sonrisa: Valoración requerida (Enfoque Bespoke)
    - Mini Diseño: $1.800.000
    - Labios & Toxina: $1.140.000
    - Bioestimuladores: $2.540.000
    - Regen (Exosomas): $480.000
    - Skinboosters: $620.000
    - Sueroterapia VIP: $250.000

    ESTRATEGIA:
    - Identifica la necesidad.
    - RECOMIENDA UN COMBO (Ej: Sonrisa + Labios o Toxina + Bioestimulador).
    - Menciona el precio aproximado del plan integral.
    - Crea urgencia mencionando "Cupos Limitados en Tequendama, Cali".`,
    config: {
      systemInstruction: `Actúa como el Concierge Senior de AVM. Eres persuasivo, clínico y elegante.
      No solo des información, vende la transformación.
      Si el usuario parece internacional, menciona "Protocolo VIP de 5 días".
      Tu respuesta debe ser un plan de acción directo.`,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          mainTreatment: { type: Type.STRING, description: "Tratamiento base con su precio" },
          upsellCombo: { type: Type.STRING, description: "Combo recomendado para resultado WOW" },
          summary: { type: Type.STRING, description: "Resumen corto de su necesidad identificada" },
          totalInvestment: { type: Type.STRING, description: "Inversión estimada total" },
          whatsappMessage: { type: Type.STRING, description: "Texto pre-escrito para el botón de WhatsApp que resuma el plan" }
        },
        required: ["mainTreatment", "upsellCombo", "summary", "totalInvestment", "whatsappMessage"]
      }
    }
  });

  return JSON.parse(response.text);
}
