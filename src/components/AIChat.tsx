import { useServerFn } from "@tanstack/react-start";
import { useEffect, useRef, useState } from "react";

import { askDentalAssistant } from "@/lib/ai-assistant.functions";

type ChatMessage = { role: "user" | "assistant"; content: string };

const STARTER: ChatMessage = {
  role: "assistant",
  content:
    "Hi, I'm your SmileCraft AI Dental Assistant. Describe your symptoms (e.g. *\"I feel a sharp pain when drinking cold water\"*) and I'll explain possible causes.",
};

function renderMarkdown(text: string) {
  // Minimal markdown: **bold** and line breaks
  const html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br/>");
  return { __html: html };
}

export function AIChat() {
  const ask = useServerFn(askDentalAssistant);
  const [messages, setMessages] = useState<ChatMessage[]>([STARTER]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const next: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const result = await ask({
        data: { messages: next.filter((m) => m.role !== "assistant" || m !== STARTER) },
      });
      setMessages((prev) => [...prev, { role: "assistant", content: result.reply }]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unable to reach the assistant.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  const examples = [
    "I have tooth pain when drinking cold water.",
    "My gums bleed when I brush.",
    "I think I have a cavity — what should I do?",
  ];

  return (
    <div className="flex h-[400px] flex-col rounded-2xl border border-zinc-900/5 bg-white sm:h-[520px]">
      <div className="flex items-center gap-3 border-b border-zinc-900/5 px-5 py-4">
        <div className="relative size-9 rounded-full bg-brand grid place-items-center">
          <span className="text-xs font-semibold text-white">AI</span>
          <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-white bg-green-500" />
        </div>
        <div>
          <p className="text-sm font-semibold">Dental Assistant</p>
          <p className="text-xs text-muted-foreground">Online · AI-powered dental triage</p>
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`size-7 shrink-0 rounded-full grid place-items-center text-[10px] font-semibold ${
                m.role === "user"
                  ? "bg-zinc-900 text-white"
                  : "bg-brand/10 text-brand"
              }`}
            >
              {m.role === "user" ? "You" : "AI"}
            </div>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.role === "user"
                  ? "rounded-tr-none bg-zinc-900 text-white"
                  : "rounded-tl-none border border-brand/10 bg-brand/5 text-ink"
              }`}
              dangerouslySetInnerHTML={renderMarkdown(m.content)}
            />
          </div>
        ))}

        {loading && (
          <div className="flex items-start gap-3">
            <div className="size-7 shrink-0 rounded-full bg-brand/10 grid place-items-center text-[10px] font-semibold text-brand">
              AI
            </div>
            <div className="flex items-center gap-1 rounded-2xl rounded-tl-none border border-brand/10 bg-brand/5 px-4 py-3">
              <span className="size-1.5 animate-bounce rounded-full bg-brand [animation-delay:-0.3s]" />
              <span className="size-1.5 animate-bounce rounded-full bg-brand [animation-delay:-0.15s]" />
              <span className="size-1.5 animate-bounce rounded-full bg-brand" />
            </div>
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-destructive/20 bg-destructive/5 px-3 py-2 text-xs text-destructive">
            {error}
          </div>
        )}

        <div ref={endRef} />
      </div>

      {messages.length <= 1 && (
        <div className="border-t border-zinc-900/5 px-5 py-3">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Try asking
          </p>
          <div className="flex flex-wrap gap-2">
            {examples.map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => setInput(ex)}
                className="rounded-full border border-zinc-900/10 bg-white px-3 py-1.5 text-xs text-ink transition-colors hover:border-brand/30 hover:bg-brand/5"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-zinc-900/5 p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your dental concern…"
          className="flex-1 rounded-full border border-zinc-900/10 bg-surface px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand/40"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          Send
        </button>
      </form>
    </div>
  );
}
