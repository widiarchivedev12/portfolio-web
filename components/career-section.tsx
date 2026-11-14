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
    period: "Aug 2020 – Aug 2024",
    description:
      "Bachelor's degree in Informatics Engineering, building a strong foundation in software development, algorithms, and systems design.",
  },
  {
    type: "work",
    status: "completed",
    title: "Mobile Developer & Frontend Developer",
    organization: "CV. Blambangan Dev · Banyuwangi, East Java",
    period: "Feb 2022 – Jul 2023",
    description:
      "Developed responsive user interfaces and cross-platform mobile applications for various client projects, implementing new features that improved user experience and app performance.",
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
    title: "Full Stack Developer",
    organization: "PT. Cahaya Solusindo · Banyuwangi, East Java",
    period: "Oct 2024 – Jun 2025",
    description:
      "Developed IPTV applications for Android/Android TV, IPTV Admin Website, Company Profile, HRMS, and Inventory Management System using Laravel, React, Next.js, and Flutter.",
  },
  {
    type: "work",
    status: "current",
    title: "Fullstack Developer",
    organization: "Jupitr Agency · Bali",
    period: "Aug 2025 – Present",
    description:
      "Developing and maintaining WordPress websites for clients, building custom plugins and tools, and conducting R&D for headless WordPress architecture using Next.js, Faust.js, and Sanity.",
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
      <div className="md:grid md:grid-cols-2 md:gap-x-10 lg:gap-x-16 items-start py-6 md:py-10">
        <h3 className="mb-6 md:mb-0 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
          Career Journey
        </h3>
        <motion.div
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
                  key={entry.title}
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
