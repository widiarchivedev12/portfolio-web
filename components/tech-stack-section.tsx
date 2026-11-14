"use client";

import { motion } from "framer-motion";
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siSvelte,
  siHtml5,
  siCss,
  siTailwindcss,
  siBootstrap,
  siFlutter,
  siLaravel,
  siExpress,
  siPython,
  siWordpress,
  siSanity,
  siPostgresql,
  siMysql,
  siSupabase,
  siFirebase,
  siPrisma,
  siGit,
  siVercel,
  siVitest,
} from "simple-icons";

type TechItem = { name: string; iconPath?: string };
type TechCategory = { label: string; items: TechItem[] };

const TECH_CATEGORIES: TechCategory[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", iconPath: siReact.path },
      { name: "Next.js", iconPath: siNextdotjs.path },
      { name: "TypeScript", iconPath: siTypescript.path },
      { name: "JavaScript", iconPath: siJavascript.path },
      { name: "Svelte", iconPath: siSvelte.path },
      { name: "Tailwind CSS", iconPath: siTailwindcss.path },
      { name: "Bootstrap", iconPath: siBootstrap.path },
      { name: "HTML5", iconPath: siHtml5.path },
      { name: "CSS3", iconPath: siCss.path },
      { name: "Livewire" },
      { name: "Inertia.js" },
    ],
  },
  {
    label: "Mobile",
    items: [
      { name: "Flutter", iconPath: siFlutter.path },
      { name: "React Native", iconPath: siReact.path },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Laravel", iconPath: siLaravel.path },
      { name: "Express.js", iconPath: siExpress.path },
      { name: "Python", iconPath: siPython.path },
      { name: "FastAPI" },
      { name: "Hono" },
      { name: "REST API" },
    ],
  },
  {
    label: "Database & ORM",
    items: [
      { name: "PostgreSQL", iconPath: siPostgresql.path },
      { name: "MySQL", iconPath: siMysql.path },
      { name: "Supabase", iconPath: siSupabase.path },
      { name: "Firebase", iconPath: siFirebase.path },
      { name: "Prisma", iconPath: siPrisma.path },
      { name: "Drizzle ORM" },
      { name: "SQLite" },
    ],
  },
  {
    label: "AI / LLM",
    items: [
      { name: "Vercel AI SDK" },
      { name: "Groq" },
      { name: "Gemini" },
      { name: "pgvector" },
      { name: "RAG" },
    ],
  },
  {
    label: "CMS",
    items: [
      { name: "WordPress", iconPath: siWordpress.path },
      { name: "Sanity", iconPath: siSanity.path },
      { name: "Faust.js" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", iconPath: siGit.path },
      { name: "Vercel", iconPath: siVercel.path },
      { name: "Vitest", iconPath: siVitest.path },
      { name: "Playwright" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export function TechStackSection() {
  return (
    <section className="mb-8 md:mb-14">
      <div className="md:grid md:grid-cols-2 md:gap-x-10 lg:gap-x-16 items-start py-6 md:py-10">
        <h3 className="mb-6 md:mb-0 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
          Tech Stack
        </h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="divide-y divide-border"
        >
          {TECH_CATEGORIES.map((category) => (
            <motion.div
              key={category.label}
              variants={rowVariants}
              className="grid grid-cols-[6rem_1fr] gap-x-4 py-3 items-baseline"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground pt-0.5">
                {category.label}
              </span>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                {category.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 text-sm text-foreground/80"
                  >
                    {item.iconPath && (
                      <svg
                        viewBox="0 0 24 24"
                        width="12"
                        height="12"
                        fill="currentColor"
                        aria-hidden="true"
                        className="shrink-0 opacity-60"
                      >
                        <path d={item.iconPath} />
                      </svg>
                    )}
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
