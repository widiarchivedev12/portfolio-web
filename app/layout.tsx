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

const SITE_URL = "https://wididiky.vercel.app/";
const DESCRIPTION =
  "Full-Stack and Mobile Developer with 4+ years of experience building web, mobile, and WordPress solutions. Skilled in React.js, Next.js, Laravel, Flutter, and headless CMS with Faust.js and Sanity.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Widi Diky – Full-Stack & Mobile Developer",
    template: "%s | Widi Diky",
  },
  description: DESCRIPTION,
  keywords: [
    "Widi Diky",
    "Full-Stack Developer",
    "Mobile Developer",
    "WordPress Developer",
    "React.js",
    "Next.js",
    "Flutter",
    "Laravel",
    "TypeScript",
    "JavaScript",
    "Faust.js",
    "Sanity CMS",
    "Headless WordPress",
    "Web Developer",
    "Indonesia",
  ],
  authors: [{ name: "Widi Diky", url: "https://github.com/wididikyy" }],
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
    title: "Widi Diky – Full-Stack & Mobile Developer",
    description: DESCRIPTION,
    images: [
      {
        url: "/bg.webp",
        width: 1200,
        height: 600,
        alt: "Widi Diky – Full-Stack & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Widi Diky – Full-Stack & Mobile Developer",
    description: DESCRIPTION,
    creator: "@wididikyy",
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
  name: "Widi Diky",
  url: "https://wididiky.vercel.app/",
  image: "https://wididiky.vercel.app/bg.webp",
  jobTitle: ["Full-Stack Developer", "Mobile Developer"],
  description:
    "Full-Stack and Mobile Developer with 4+ years of experience building web, mobile, and WordPress solutions. Skilled in React.js, Next.js, Laravel, Flutter, and headless CMS with Faust.js and Sanity.",
  sameAs: [
    "https://github.com/wididikyy",
    "https://github.com/callmeeve",
    "https://www.linkedin.com/in/wididiky/",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Flutter",
    "React Native",
    "Laravel",
    "WordPress",
    "Faust.js",
    "Sanity CMS",
    "Headless CMS",
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
