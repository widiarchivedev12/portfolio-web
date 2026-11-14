import { PORTFOLIOS } from "@/lib/portfolio-data";
import { PortfolioGrid } from "@/components/portfolio-grid";

export function PortfolioSection() {
  return (
    <section className="mb-8 md:mb-14">
      <div className="py-6 md:py-10">
        <div className="flex items-baseline justify-between mb-8 pb-5 border-b border-border">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
            Portfolio
          </h3>
          <span className="text-sm text-muted-foreground font-mono tabular-nums">
            {String(PORTFOLIOS.length).padStart(2, "0")} projects
          </span>
        </div>
        <PortfolioGrid items={PORTFOLIOS} />
      </div>
    </section>
  );
}
