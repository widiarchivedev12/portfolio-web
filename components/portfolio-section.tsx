import { Portfolio, PortfolioGrid } from "@/components/portfolio-grid";

const PORTFOLIOS: Portfolio[] = [
  {
    title: "Pasio AI",
    description:
      "Adaptive AI-powered assessment mobile app that determines user passion, learning styles, and career potential through personalized questionnaires powered by Google Gemini. Supports essay and multiple-choice modes with accessibility features. Built with React Native (Expo) and TypeScript.",
    image: "/pasio-ai.svg",
    github: "https://github.com/wididikyy/pasio-ai",
  },
  {
    title: "Monetra",
    description:
      "Offline-first personal finance app with income/expense tracking, budget management, spending reports, and AI-powered financial insights via Groq. Built with React Native, Expo, and SQLite.",
    image: "/monetra.webp",
    github: "https://github.com/wididikyy/monetra",
  },
  {
    title: "Banana88 Trans",
    description:
      "Transportation and tourism booking website for a Banyuwangi company operating since 2013, offering car rentals, tour packages, and travel services. Built with headless WordPress and Next.js.",
    image: "/banana88trans.webp",
    site: "https://banana88trans.com/",
  },
];

export function PortfolioSection() {
  return (
    <section className="mb-8 md:mb-14">
      <div className="py-6 md:py-10">
        <h3 className="mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">Portfolio Showcase</h3>
        <PortfolioGrid items={PORTFOLIOS} />
      </div>
    </section>
  );
}
