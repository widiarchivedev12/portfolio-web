import { getPortfolioBySlug, PORTFOLIOS } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { SectionAnimate } from "@/components/section-animate";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return PORTFOLIOS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  if (!project) notFound();

  const galleryImages = project.images.slice(1);

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-12 bg-background pt-24 pb-20">
      <SectionAnimate>
        {/* Back navigation */}
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <span aria-hidden="true">←</span>
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {project.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            {project.tech.join(" · ")}
          </p>
        </div>
      </SectionAnimate>

      {/* Cover image */}
      <SectionAnimate delay={0.1}>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-12">
          <Image
            src={project.image}
            alt={`${project.title} cover screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
            className="object-cover"
            priority
          />
        </div>
      </SectionAnimate>

      {/* Description + links */}
      <SectionAnimate delay={0.15}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          <div className="lg:col-span-2">
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:pt-1">
            {project.github && (
              <Button asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </Link>
              </Button>
            )}
            {project.site && (
              <Button asChild variant={project.github ? "outline" : "default"}>
                <Link href={project.site} target="_blank" rel="noopener noreferrer">
                  Visit Live Site
                </Link>
              </Button>
            )}
          </div>
        </div>
      </SectionAnimate>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <SectionAnimate delay={0.2}>
          <section aria-label="Project screenshots">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {galleryImages.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-video rounded-lg overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 2}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 600px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </SectionAnimate>
      )}
    </main>
  );
}
