export type AIModel = {
    id: string;
    name: string;
    provider: "OpenAI" | "Anthropic" | "Google" | "Meta" | "Mistral" | "xAI";
    type: "Proprietary" | "Open Source";
    params: string;
    water_usage_ml: number; // ml per query (estimated)
    energy_score: number; // 1-100 (100 is best)
    grade: "A+" | "A" | "B" | "C" | "D" | "F";
    tags: string[];
};

export const models: AIModel[] = [
    {
        id: "mistral-7b",
        name: "Mistral 7B",
        provider: "Mistral",
        type: "Open Source",
        params: "7B",
        water_usage_ml: 4.5,
        energy_score: 95,
        grade: "A+",
        tags: ["Eco-Choice", "Efficient"]
    },
    {
        id: "claude-3-haiku",
        name: "Claude 3 Haiku",
        provider: "Anthropic",
        type: "Proprietary",
        params: "~20B",
        water_usage_ml: 8.2,
        energy_score: 88,
        grade: "A",
        tags: ["Fast", "Balanced"]
    },
    {
        id: "gpt-3.5-turbo",
        name: "GPT-3.5 Turbo",
        provider: "OpenAI",
        type: "Proprietary",
        params: "~175B",
        water_usage_ml: 15,
        energy_score: 72,
        grade: "B",
        tags: ["Standard"]
    },
    {
        id: "gpt-4-turbo",
        name: "GPT-4 Turbo",
        provider: "OpenAI",
        type: "Proprietary",
        params: "~1.7T",
        water_usage_ml: 45,
        energy_score: 45,
        grade: "D",
        tags: ["Heavy", "Powerful"]
    },
    {
        id: "gemini-ultra",
        name: "Gemini Ultra",
        provider: "Google",
        type: "Proprietary",
        params: "Unknown",
        water_usage_ml: 52,
        energy_score: 40,
        grade: "F",
        tags: ["Heavy"]
    }
];
