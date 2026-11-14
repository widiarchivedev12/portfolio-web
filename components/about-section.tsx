"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.25, 0.1, 0.25, 1] as const;
const inView = { once: true, amount: 0.1 };

const FACTS = [
  { label: "Experience", value: "Since 2022" },
  { label: "Workplaces", value: "3 Companies" },
  { label: "Education", value: "S1 Informatika" },
  { label: "Achievement", value: "1st — Indoneris 2023" },
] as const;

export function AboutSection() {
  return (
    <section className="mb-8 md:mb-14">
      <div className="py-6 md:py-10">
        <motion.h3
          className="mb-8 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.5, ease }}
        >
          About Me
        </motion.h3>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-14 items-start">
          <motion.div
            className="flex flex-row lg:flex-col gap-4 items-start"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inView}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
          >
            <Image
              src="/avatar.webp"
              alt="Widi Diky"
              width={72}
              height={72}
              className="shrink-0 rounded-full object-cover bg-accent"
            />
            <div>
              <p className="font-semibold text-lg leading-tight">Widi Diky</p>
              <p className="text-sm text-muted-foreground mt-1">Fullstack Developer</p>
              <p className="text-sm text-muted-foreground">Banyuwangi, East Java</p>
            </div>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.5, ease, delay: 0.15 }}
          >
            Fullstack Developer with a Bachelor&apos;s in Informatics Engineering
            from STIKOM PGRI Banyuwangi, working professionally since 2022 in
            frontend, mobile, and fullstack development. Proficient in React,
            Next.js, Laravel, and Flutter; experienced in building custom
            WordPress plugins and headless CMS architecture with Faust.js and
            Sanity. Recent work includes AI web applications built on RAG
            pipelines using Vercel AI SDK, Groq, Gemini embeddings, and
            pgvector. Projects span HRMS, IPTV apps for Android TV, and
            AI-powered tools for law and academic research.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.5, ease, delay: 0.25 }}
        >
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {fact.label}
              </p>
              <p className="text-sm font-medium mt-1.5">{fact.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
