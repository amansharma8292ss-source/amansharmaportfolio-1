import { createFileRoute } from "@tanstack/react-router";

const INTRO_TEXT =
  "Hi! I am Aman Sharma. I'm a Data Analyst based in Lisbon, Portugal, specializing in Power BI dashboards, SQL, and Excel automation. I turn raw data into actionable business insights — and I'm currently open to full-time roles and freelance projects across Portugal, Luxembourg, and Switzerland.";

// Cache the generated audio so identical text is synthesized only once.
let cachedAudio: ArrayBuffer | null = null;

async function generateIntroAudio(): Promise<ArrayBuffer> {
  if (cachedAudio) return cachedAudio;

  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("Voice service is not configured");

  const response = await fetch("https://ai.gateway.lovable.dev/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini-tts",
      input: INTRO_TEXT,
      voice: "ash",
      instructions:
        "Speak like a friendly, confident young man in his early twenties. Warm, energetic, natural conversational tone — like introducing yourself to a new colleague. Not deep, not formal, no radio-announcer voice.",
      response_format: "mp3",
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Voice generation failed [${response.status}]: ${body}`);
  }

  cachedAudio = await response.arrayBuffer();
  return cachedAudio;
}

export const Route = createFileRoute("/api/public/intro-audio")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const audio = await generateIntroAudio();
          return new Response(audio, {
            headers: {
              "Content-Type": "audio/mpeg",
              "Cache-Control": "public, max-age=86400",
            },
          });
        } catch (err) {
          const message = err instanceof Error ? err.message : "Unknown error";
          return new Response(JSON.stringify({ error: message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
