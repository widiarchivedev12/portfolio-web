import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.SITE_URL ?? "http://localhost:3000";
const DESCRIPTION =
  "Fullstack Developer from Banyuwangi. Builds web, mobile, and AI apps with React, Next.js, Laravel, Flutter, and RAG pipelines using Vercel AI SDK and pgvector.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Widi Diky – Fullstack & Mobile Developer",
    template: "%s | Widi Diky",
  },
  description: DESCRIPTION,
  keywords: [
    "Widi Diky",
    "Fullstack Developer",
    "Mobile Developer",
    "WordPress Developer",
    "AI Developer",
    "React",
    "Next.js",
    "Flutter",
    "Laravel",
    "TypeScript",
    "JavaScript",
    "Svelte",
    "Python",
    "Vercel AI SDK",
    "RAG",
    "pgvector",
    "Groq",
    "Faust.js",
    "Sanity CMS",
    "Headless WordPress",
    "Supabase",
    "Web Developer Indonesia",
    "Banyuwangi",
  ],
  authors: [{ name: "Widi Diky", url: "https://github.com/widiarchivedev12" }],
  creator: "Widi Diky",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Widi Diky",
    title: "Widi Diky – Fullstack & Mobile Developer",
    description: DESCRIPTION,
    images: [
      {
        url: "/bg.webp",
        width: 1200,
        height: 630,
        alt: "Widi Diky – Fullstack & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Widi Diky – Fullstack & Mobile Developer",
    description: DESCRIPTION,
    images: ["/bg.webp"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Widi Diky Kurniawan",
  url: SITE_URL,
  image: `${SITE_URL}/bg.webp`,
  jobTitle: ["Fullstack Developer", "Mobile Developer"],
  description: DESCRIPTION,
  sameAs: [
    "https://github.com/widiarchivedev12",
    "https://github.com/callmeeve",
    "https://www.linkedin.com/in/wididiky/",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "STIKOM PGRI Banyuwangi",
  },
  award: "1st Place, Mobile Programming – Indoneris National IT Competition 2023",
  knowsAbout: [
    "React", "Next.js", "TypeScript", "JavaScript", "Svelte",
    "Tailwind CSS", "Flutter", "React Native",
    "Laravel", "Express.js", "Python", "FastAPI", "Hono",
    "PostgreSQL", "MySQL", "Supabase", "Firebase", "Prisma",
    "WordPress", "Faust.js", "Sanity CMS", "Headless CMS",
    "Vercel AI SDK", "Groq", "Gemini", "pgvector", "RAG",
    "Git", "Vercel",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
