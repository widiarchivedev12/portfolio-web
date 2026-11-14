export type PortfolioItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  tech: string[];
  github?: string;
  site?: string;
};

export const PORTFOLIOS: PortfolioItem[] = [
  {
    slug: "patungin",
    title: "Patungin",
    description:
      "Web app for split-bill and group dues management. Supports flexible expense splitting (equal, percentage, nominal, per-item) with automatic debt optimization, recurring dues with proof-of-payment uploads, and guest members without accounts. Built with Laravel 13, Blade, Alpine.js, and Tailwind CSS.",
    image: "/patungin/patungin-2-landing.png",
    images: [
      "/patungin/patungin-2-landing.png",
      "/patungin/patungin-1-grup.png",
      "/patungin/patungin-3-dashboard.png",
      "/patungin/patungin-4-catat-pengeluaran.png",
      "/patungin/patungin-5-pelunasan.png",
    ],
    tech: ["Laravel 13", "PHP 8.3", "Alpine.js v3", "Tailwind CSS v3", "SQLite"],
    github: "https://github.com/widiarchivedev12/patungin",
  },
  {
    slug: "pasalin",
    title: "Pasalin",
    description:
      "AI-powered web app that answers questions about Indonesian regulations (UU, Perda, campus rules) using Retrieval-Augmented Generation — every answer is grounded in uploaded official documents and comes with automatic article citations and verbatim quotes. Built with Next.js 16, Groq (Llama), Gemini embeddings, and pgvector.",
    image: "/pasalin/pasalin-2-beranda.png",
    images: [
      "/pasalin/pasalin-2-beranda.png",
      "/pasalin/pasalin-1-chat-sitasi.png",
    ],
    tech: ["Next.js 16", "TypeScript", "Groq", "Gemini", "pgvector", "Neon", "Drizzle ORM", "Vercel AI SDK", "Tailwind CSS v4"],
    github: "https://github.com/widiarchivedev12/pasalin",
  },
  {
    slug: "job-hunt-hub",
    title: "Job Hunt Hub",
    description:
      "Personal job search management tool that auto-ingests listings from Gmail alert emails (Glints, JobStreet) and the Careerjet API, scores them against an editable profile, and tracks applications with per-channel response time analytics. Built with Laravel 13, Livewire 4, and Flux 2.",
    image: "/jobhunthub/jobhunthub-1-dashboard.png",
    images: [
      "/jobhunthub/jobhunthub-1-dashboard.png",
      "/jobhunthub/jobhunthub-2-lowongan.png",
      "/jobhunthub/jobhunthub-3-lamaran.png",
      "/jobhunthub/jobhunthub-4-profil-pencarian.png",
      "/jobhunthub/jobhunthub-5-tambah-lamaran.png",
    ],
    tech: ["Laravel 13", "PHP 8.3", "Livewire 4", "Flux 2", "MySQL", "Bun"],
    github: "https://github.com/widiarchivedev12/job-hunt-hub",
  },
  {
    slug: "rujukin",
    title: "Rujukin",
    description:
      "AI research assistant for Indonesian students — upload PDF journals, ask questions in any language, and get answers always cited to specific pages and sections in your library. Features structured summaries, APA/IEEE/Harvard citation export, and persistent chat history. Built with Next.js 16, Supabase (pgvector), Groq, and Gemini embeddings.",
    image: "/rujukin/rujukin-3-library.png",
    images: [
      "/rujukin/rujukin-3-library.png",
      "/rujukin/rujukin-1-chat.png",
      "/rujukin/rujukin-2-detail-jurnal.png",
      "/rujukin/rujukin-4-login.png",
    ],
    tech: ["Next.js 16", "TypeScript", "Supabase", "pgvector", "Groq", "Gemini", "Vercel AI SDK", "Tailwind CSS v4"],
    github: "https://github.com/widiarchivedev12/rujukin",
  },
  {
    slug: "fiokana",
    title: "FioKana",
    description:
      "Offline-first PWA for learning hiragana and katakana with correct stroke order. Features guided practice with animations, a free-write mode with real-time per-stroke validation (order, direction, position, shape), and progress tracking with star ratings stored in IndexedDB — no backend required. Built with React, TypeScript, Vite, and Zustand.",
    image: "/fiokana/fiokana-2-beranda-tabel.png",
    images: [
      "/fiokana/fiokana-2-beranda-tabel.png",
      "/fiokana/fiokana-1-latihan-menulis.png",
    ],
    tech: ["React", "TypeScript", "Vite", "React Router", "Zustand", "Dexie", "Tailwind CSS", "Vitest"],
    github: "https://github.com/widiarchivedev12/fiokana",
  },
  {
    slug: "banana88trans",
    title: "Banana88 Trans",
    description:
      "Transportation and tourism booking website for a Banyuwangi company operating since 2013, offering car rentals, tour packages, and travel services. Built with headless WordPress and Next.js.",
    image: "/banana88trans.webp",
    images: ["/banana88trans.webp"],
    tech: ["Next.js", "WordPress (Headless)", "Faust.js"],
    site: "https://banana88trans.com/",
  },
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return PORTFOLIOS.find((p) => p.slug === slug);
}
