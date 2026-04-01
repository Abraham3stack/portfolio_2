"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348104320170"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-400 hover:bg-green-400 text-black shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.7)] transition transform hover:scale-110 animate-pulse"
    >
      <MessageCircle size={24} />
    </a>
  );
}