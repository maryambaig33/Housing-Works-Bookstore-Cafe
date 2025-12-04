import { GoogleGenAI, Type } from "@google/genai";
import { BookPairing } from "../types";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export const getLiteraryPairings = async (
  mood: string,
  genre: string
): Promise<BookPairing[]> => {
  if (!apiKey) {
    console.warn("API Key is missing. Returning mock data.");
    return MOCK_PAIRINGS;
  }

  const prompt = `
    You are an expert bookseller and barista at the Housing Works Bookstore Cafe in NYC. 
    The user is in the mood for: "${mood}" and enjoys the genre: "${genre}".
    
    Recommend 3 distinct books that fit this vibe. 
    For each book, suggest a specific drink pairing from a classic cafe menu (e.g., Cortado, Earl Grey Tea, Pinot Noir, Hot Cider) that complements the reading experience.
    Explain why the drink matches the book.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              bookTitle: { type: Type.STRING },
              author: { type: Type.STRING },
              description: { type: Type.STRING },
              drinkPairing: { type: Type.STRING },
              drinkReason: { type: Type.STRING },
            },
            required: ["bookTitle", "author", "description", "drinkPairing", "drinkReason"],
          },
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as BookPairing[];
    }
    throw new Error("No response text");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return MOCK_PAIRINGS;
  }
};

const MOCK_PAIRINGS: BookPairing[] = [
  {
    bookTitle: "The Secret History",
    author: "Donna Tartt",
    description: "A haunting, atmospheric novel about a group of classics students at a small college.",
    drinkPairing: "Black Coffee",
    drinkReason: "Dark, intense, and keeps you alert for the twisting plot.",
  },
  {
    bookTitle: "Just Kids",
    author: "Patti Smith",
    description: "A memoir of New York City in the late 60s and 70s.",
    drinkPairing: "House Red Wine",
    drinkReason: "Bohemian, gritty, and perfect for sipping while dreaming of art.",
  },
  {
    bookTitle: "The City We Became",
    author: "N.K. Jemisin",
    description: "A fantasy novel where New York City comes to life as an avatar.",
    drinkPairing: "Iced Matcha Latte",
    drinkReason: "Modern, vibrant, and energetic like the city itself.",
  },
];
