import { createServerFn } from "@tanstack/react-start";
import { generateText } from "ai";
import { z } from "zod";

import { createLovableAiGatewayProvider } from "./ai-gateway.server";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(2000),
});

const InputSchema = z.object({
  messages: z.array(MessageSchema).min(1).max(20),
});

const SYSTEM_PROMPT = `You are the SmileCraft Dental AI Assistant — a calm, friendly, and clinically informed virtual dental triage helper.

Your job:
- Listen to a patient's dental symptom or question.
- Explain possible causes in plain, reassuring language (2–4 short sentences).
- Suggest what the patient can do at home in the meantime (1–2 tips).
- Always end by gently recommending they book an appointment with SmileCraft Dental for a proper diagnosis.

Rules:
- Never give a definitive diagnosis. Use phrases like "could indicate" or "may suggest".
- Keep replies under 120 words.
- Format using short paragraphs. Use **bold** for the most important terms.
- If the user describes a dental emergency (severe swelling, knocked-out tooth, uncontrolled bleeding), tell them to seek immediate in-person care.`;

export const askDentalAssistant = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) {
      throw new Error("Missing LOVABLE_API_KEY");
    }

    const gateway = createLovableAiGatewayProvider(key);

    try {
      const { text } = await generateText({
        model: gateway("google/gemini-3-flash-preview"),
        system: SYSTEM_PROMPT,
        messages: data.messages,
      });
      return { reply: text };
    } catch (err: unknown) {
      const e = err as { statusCode?: number; message?: string };
      if (e?.statusCode === 429) {
        throw new Error("Our AI assistant is busy right now. Please try again in a moment.");
      }
      if (e?.statusCode === 402) {
        throw new Error("AI service temporarily unavailable. Please book directly via WhatsApp.");
      }
      throw new Error(e?.message ?? "Something went wrong reaching the assistant.");
    }
  });
