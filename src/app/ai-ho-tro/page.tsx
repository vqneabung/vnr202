"use client";

import AIHero from "@/components/ai-ho-tro/AIHero";
import Chatbot from "@/components/ai-ho-tro/Chatbot";
import AIInfo from "@/components/ai-ho-tro/AIInfo";

export default function AIHoTroPage() {
  return (
    <div className="min-h-screen bg-[var(--antique-parchment)]">
      <AIHero />
      <Chatbot />
      <AIInfo />
    </div>
  );
}
