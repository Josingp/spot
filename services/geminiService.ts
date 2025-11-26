import { GoogleGenAI, Type } from "@google/genai";

// Safely access API KEY to prevent runtime crashes in browser environments
const getApiKey = () => {
  try {
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {
    console.warn("Failed to access process.env");
  }
  return '';
};

const apiKey = getApiKey();
const ai = new GoogleGenAI({ apiKey });

export interface Recommendation {
  category: string;
  reasoning: string;
  durationSuggestion: number; // Changed to number to accept 30
}

export const getWorkoutRecommendation = async (userInput: string): Promise<Recommendation | null> => {
  try {
    if (!apiKey) {
      console.warn("No API Key provided for Gemini");
      return {
        category: "머신 사용법/자세 교정",
        reasoning: "API 키가 설정되지 않아 기본 추천을 제공합니다. 트레이너가 해당 기구로 이동하여 올바른 사용법과 자극점을 잡아드립니다.",
        durationSuggestion: 30
      };
    }

    const model = ai.models;
    
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: `사용자가 제휴 헬스장(Spot Fitness Gym) 내에서 키오스크나 앱을 통해 트레이너를 자신의 위치(기구)로 부르려고 합니다. 
      사용자 요청: "${userInput}". 
      
      Spot Fitness Care의 30분 현장 포인트 레슨을 추천해주세요.
      
      상황: 사용자는 지금 헬스장에 있고, 특정 부위 운동을 원하거나 특정 기구 사용법을 모릅니다.
      
      추천 가이드라인:
      1. 만약 사용자가 "등 운동", "하체" 등 부위를 언급하면 -> "등(Back) 집중 패키지", "하체(Legs) 라인" 등으로 카테고리를 잡으세요.
      2. 만약 사용자가 "랫 풀 다운", "스쿼트" 등 특정 기구를 언급하면 -> "랫 풀 다운 핀포인트 티칭", "스쿼트 자세 교정" 등으로 구체적인 종목명을 카테고리로 잡으세요.
      3. 통증을 호소하면 "거북목 케어", "허리 통증 케어" 등을 추천하세요.
      4. 기본 추천 시간은 30분입니다.

      가능한 예시 카테고리: [기구 사용법 티칭, 3대 운동 자세 교정, 등(Back) 집중 패키지, 하체(Legs) 라인, 랫 풀 다운, 스쿼트, 벤치 프레스, 거북목/어깨 통증 케어].`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            category: { type: Type.STRING, description: "Specific workout name or body part package" },
            reasoning: { type: Type.STRING, description: "Short explanation why this helps (Korean), emphasizing immediate in-gym assistance." },
            durationSuggestion: { type: Type.INTEGER, description: "Recommended duration in minutes (Default 30)" }
          },
          required: ["category", "reasoning", "durationSuggestion"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as Recommendation;
    }
    return null;

  } catch (error) {
    console.error("Gemini AI Error:", error);
    return null;
  }
};