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

function getFallbackResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();

  if (msg.includes("emergency") || msg.includes("knocked") || msg.includes("uncontrolled bleeding") || (msg.includes("severe") && msg.includes("swelling"))) {
    return "**This sounds like a dental emergency.** Please seek immediate in-person care or visit your nearest emergency room. Once you're safe, contact SmileCraft Dental for follow-up support.";
  }

  if (msg.includes("pain") || msg.includes("hurt") || msg.includes("ache") || msg.includes("sensitive")) {
    if (msg.includes("cold") || msg.includes("hot") || msg.includes("temperature")) {
      return "Sensitivity to temperature could indicate **enamel wear**, a **small cavity**, or **gum recession**. Try using a desensitizing toothpaste and avoid extreme temperatures. **Book a checkup** at SmileCraft Dental so we can identify the cause.";
    }
    if (msg.includes("wisdom")) {
      return "Wisdom tooth pain may suggest **impaction**, **infection**, or **crowding**. Rinse with warm salt water and take over-the-counter pain relief if needed. **Schedule a consultation** at SmileCraft Dental for an evaluation and X-ray.";
    }
    if (msg.includes("constant") || msg.includes("throbbing")) {
      return "A constant throbbing pain could indicate **advanced decay** or an **infection** reaching the nerve. Rinse with warm salt water and avoid chewing on that side. **Contact SmileCraft Dental promptly** — this may need root canal therapy.";
    }
    if (msg.includes("jaw")) {
      return "Jaw pain can result from **teeth grinding**, **TMJ disorder**, or **sinus issues**. Try a warm compress and soft foods. **Book an assessment** at SmileCraft Dental to determine the underlying cause.";
    }
    return "Tooth pain can stem from **cavities**, **gum disease**, **cracked teeth**, or **sensitivity**. Rinse with warm salt water and avoid very hot or cold foods. **Schedule an appointment** at SmileCraft Dental for a thorough exam.";
  }

  if (msg.includes("bleed") || msg.includes("gum") || msg.includes("blood")) {
    return "Bleeding gums often indicate **gingivitis** or **periodontal disease**. Improve your brushing technique, floss daily, and use an antiseptic mouthwash. **Visit SmileCraft Dental** for a professional cleaning and gum assessment.";
  }

  if (msg.includes("cavity") || msg.includes("decay") || msg.includes("hole") || msg.includes("dark spot") || msg.includes("stain")) {
    return "Cavities are caused by **enamel erosion** from bacteria and acids. In early stages, fluoride treatment may help. For advanced decay, a **filling** or **crown** may be needed. **Book a consultation** at SmileCraft Dental for an exam.";
  }

  if (msg.includes("whiten") || msg.includes("yellow") || msg.includes("discolor") || msg.includes("stain")) {
    return "Tooth discoloration can be caused by **foods, drinks, tobacco**, or **natural aging**. We offer **professional whitening** that lifts 6–8 shades in a single session. **Visit SmileCraft Dental** to see which option suits you best.";
  }

  if (msg.includes("align") || msg.includes("braces") || msg.includes("straight") || msg.includes("crowd") || msg.includes("gap")) {
    return "Misaligned teeth can be corrected with **clear aligners** or **traditional braces**. SmileCraft Dental offers Invisalign-certified orthodontic treatment. **Book a smile assessment** to discuss your options and expected timeline.";
  }

  if (msg.includes("implant") || msg.includes("missing") || msg.includes("replace")) {
    return "**Dental implants** are permanent titanium posts that replace missing teeth. They look and function like natural teeth and can last a lifetime with proper care. **Schedule a consultation** at SmileCraft Dental to see if you're a candidate.";
  }

  if (msg.includes("bad breath") || msg.includes("halitosis") || msg.includes("smell")) {
    return "Persistent bad breath can result from **poor oral hygiene**, **gum disease**, **dry mouth**, or **diet**. Brush twice daily, floss, and stay hydrated. **Visit SmileCraft Dental** for a comprehensive cleaning and evaluation.";
  }

  if (msg.includes("veneers") || msg.includes("veener") || msg.includes("cosmetic")) {
    return "**Porcelain veneers** are custom shells that correct chips, gaps, and discoloration for a flawless smile. SmileCraft Dental offers hand-crafted veneers for natural-looking results. **Book a cosmetic consultation** to see your preview.";
  }

  if (msg.includes("root canal") || msg.includes("rct")) {
    return "A **root canal** removes infected pulp to save a natural tooth. Modern techniques make it nearly painless — most patients compare it to getting a filling. **Contact SmileCraft Dental** if you're experiencing persistent tooth pain.";
  }

  if (msg.includes("clean") || msg.includes("scale") || msg.includes("polish")) {
    return "**Professional cleaning** removes plaque and tartar that daily brushing misses. We recommend a cleaning every 6 months to prevent gum disease and cavities. **Book your routine visit** at SmileCraft Dental today.";
  }

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey") || msg.includes("good")) {
    return "Hello! 👋 I'm the SmileCraft Dental AI Assistant. Tell me about your dental concern — **tooth pain, bleeding gums, cosmetic questions**, or anything else — and I'll help guide you. How can I assist you today?";
  }

  return "Thank you for reaching out to SmileCraft Dental. Based on what you've described, it's best to have a **professional evaluation** for an accurate diagnosis. **Book a consultation** at SmileCraft Dental — your first visit is complimentary. In the meantime, maintain good oral hygiene and avoid any triggers that cause discomfort.";
}

export const askDentalAssistant = createServerFn({ method: "POST" })
  .validator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (key) {
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
      }
    }

    const lastUserMessage = [...data.messages].reverse().find(m => m.role === "user");
    const reply = lastUserMessage ? getFallbackResponse(lastUserMessage.content) : getFallbackResponse("");
    return { reply };
  });
