"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.25, 0.1, 0.25, 1] as const;
const inView = { once: true, amount: 0.15 };

export function AboutSection() {
  return (
    <section className="mb-8 md:mb-14">
      <div className="md:grid md:grid-cols-2 md:gap-x-10 lg:gap-x-16 py-6 md:py-10 items-start">
        <motion.h3
          className="mb-5 md:mb-0 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={inView}
          transition={{ duration: 0.5, ease }}
        >
          About Me
        </motion.h3>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/avatar.webp"
              alt="Widi Diky"
              width={48}
              height={48}
              className="shrink-0 object-cover rounded-full bg-accent"
            />
            <span className="font-semibold text-lg">Widi Diky</span>
          </div>
          <p className="text-base sm:text-lg leading-relaxed">
            Informatics Engineering graduate from STIKOM PGRI Banyuwangi with
            4+ years of experience as a Frontend, Mobile, and Fullstack
            Developer. Proficient in React, Next.js, Laravel, and Flutter, with
            recent expertise in WordPress development — custom plugins, themes,
            maintenance — and headless CMS architecture using Next.js, Faust.js,
            and Sanity. Built diverse projects including HRMS, Travel Booking,
            UI Library, and a University Data Recognition Website. National
            1st-place winner in Mobile Programming at the 2023 Indoneris IT
            Competition.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
