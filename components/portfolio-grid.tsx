"use client";

import type { PortfolioItem } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {items.map((item, index) => (
        <motion.article
          key={item.slug}
          variants={cardVariants}
          className="group flex flex-col"
        >
          <Link
            href={`/portfolio/${item.slug}`}
            className="relative block aspect-video overflow-hidden rounded-xl bg-muted"
            aria-label={item.title}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized={item.image.endsWith(".svg")}
              priority={index === 0}
            />
            <span className="absolute top-2.5 left-2.5 font-mono text-[11px] font-semibold leading-none bg-background/85 backdrop-blur-sm text-foreground px-2 py-1 rounded-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
          </Link>

          <div className="mt-4 flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <h4 className="font-semibold leading-snug">{item.title}</h4>
              <Link
                href={`/portfolio/${item.slug}`}
                aria-label={`View ${item.title}`}
                tabIndex={-1}
                className="shrink-0 text-muted-foreground hover:text-foreground transition-colors mt-0.5"
              >
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
              {item.description}
            </p>
            {(item.github || item.site) && (
              <div className="flex gap-4 mt-3 pt-3 border-t border-border text-sm">
                {item.github && (
                  <Link
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub
                  </Link>
                )}
                {item.site && (
                  <Link
                    href={item.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Live Site
                  </Link>
                )}
              </div>
            )}
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
