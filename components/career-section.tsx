"use client";

import { motion } from "framer-motion";
import {
  TimelineSteps,
  TimelineStepsConnector,
  TimelineStepsContent,
  TimelineStepsDescription,
  TimelineStepsHeader,
  TimelineStepsIcon,
  TimelineStepsItem,
  TimelineStepsTime,
  TimelineStepsTitle,
} from "@/components/ui/timeline-steps";
import {
  RiBriefcase2Line,
  RiGraduationCapLine,
  RiTrophyLine,
} from "@remixicon/react";

type CareerEntry = {
  type: "work" | "education" | "achievement";
  status: "completed" | "current" | "upcoming";
  title: string;
  organization: string;
  period: string;
  description: string;
};

const CAREER: CareerEntry[] = [
  {
    type: "education",
    status: "completed",
    title: "S1 Informatics Engineering",
    organization: "STIKOM PGRI Banyuwangi",
    period: "Sep 2020 – Feb 2024",
    description:
      "Bachelor's degree in Informatics Engineering, building a strong foundation in software development, algorithms, and systems design.",
  },
  {
    type: "work",
    status: "completed",
    title: "Mobile & Frontend Developer",
    organization: "CV. Blambangan DEV · Banyuwangi, East Java",
    period: "Feb 2022 – Jul 2023",
    description:
      "Developed mobile applications and frontend interfaces for various client projects using Flutter, React, and Next.js.",
  },
  {
    type: "achievement",
    status: "completed",
    title: "1st Place – Indoneris National IT Competition",
    organization: "Mobile Programming · National Competition",
    period: "Dec 2023",
    description:
      "Achieved first place in the Mobile Programming category at the Indoneris National IT Competition.",
  },
  {
    type: "work",
    status: "completed",
    title: "Fullstack Developer",
    organization: "PT. Cahaya Solusindo · Banyuwangi, East Java",
    period: "Oct 2024 – Jun 2025",
    description:
      "Developed an IPTV app for Android and Android TV with interactive streaming features alongside an admin website. Contributed to an HRMS system and built an inventory management system and company profile website. Stack: Laravel, React, Next.js, Flutter.",
  },
  {
    type: "work",
    status: "completed",
    title: "Fullstack Developer",
    organization: "Jupitr Agency · Bali",
    period: "Aug 2025 – Sep 2026",
    description:
      "Developed and maintained WordPress client websites including custom plugins and tools. Built an image optimization tool (compression and WebP conversion) integrated with WordPress; on one client site, over 26,000 images were converted and total media size dropped by roughly 34%. Conducted R&D for headless WordPress with Next.js, Faust.js, and Sanity.",
  },
];

const CAREER_ICON = {
  work: RiBriefcase2Line,
  education: RiGraduationCapLine,
  achievement: RiTrophyLine,
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function CareerSection() {
  return (
    <section className="mb-8 md:mb-14">
      <div className="py-6 md:py-10">
        <motion.h3
          className="mb-10 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Career Journey
        </motion.h3>
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.12 }}
        >
          <TimelineSteps>
            {CAREER.map((entry, index) => {
              const Icon = CAREER_ICON[entry.type];
              const isLast = index === CAREER.length - 1;
              return (
                <motion.div
                  key={entry.organization}
                  variants={itemVariants}
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <TimelineStepsItem status={entry.status}>
                    {!isLast && <TimelineStepsConnector status={entry.status} />}
                    <TimelineStepsHeader>
                      <TimelineStepsIcon
                        size="default"
                        variant={entry.status === "current" ? "primary" : "outline"}
                      >
                        <Icon />
                      </TimelineStepsIcon>
                      <TimelineStepsTitle>{entry.title}</TimelineStepsTitle>
                    </TimelineStepsHeader>
                    <TimelineStepsContent>
                      <TimelineStepsTime>{entry.period}</TimelineStepsTime>
                      <TimelineStepsDescription className="font-medium text-foreground/70">
                        {entry.organization}
                      </TimelineStepsDescription>
                      <TimelineStepsDescription>
                        {entry.description}
                      </TimelineStepsDescription>
                    </TimelineStepsContent>
                  </TimelineStepsItem>
                </motion.div>
              );
            })}
          </TimelineSteps>
        </motion.div>
      </div>
    </section>
  );
}
