"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function HeroSection() {
  return (
    <section className="relative flex items-end mt-4 md:mt-8 mb-8 md:mb-10 rounded-lg overflow-hidden min-h-[44vh] md:min-h-[58vh]">
      <Image
        src="/bg.webp"
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />

      <div className="relative z-10 p-5 sm:p-8 md:p-10">
        <motion.div
          className="flex items-center gap-2 mb-3 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="size-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
          Banyuwangi, East Java
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          Full-Stack & Mobile Developer.
        </motion.h1>
        <motion.p
          className="mt-3 text-muted-foreground"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
        >
          <Link
            href="https://github.com/widiarchivedev12"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors duration-200"
          >
            GitHub
          </Link>
          {" · "}
          <Link
            href="https://www.linkedin.com/in/wididiky/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors duration-200"
          >
            LinkedIn
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
