import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://resumimintai.vercel.app"),

  title: {
    default: "ResumeMint AI - AI Resume Builder & ATS Resume Checker",
    template: "%s | ResumeMint AI",
  },

  description:
    "ResumeMint AI is a modern AI-powered resume toolkit that helps you analyze resumes, improve ATS compatibility, generate professional cover letters, and build ATS-friendly resumes effortlessly.",

  keywords: [
    "ResumeMint AI",
    "AI Resume Builder",
    "ATS Resume Checker",
    "Resume Analyzer",
    "Cover Letter Generator",
    "Resume Creator",
    "Next.js",
    "TypeScript",
    "AI Tools",
    "Career",
    "Job Application",
  ],

  authors: [
    {
      name: "Shoriful Islam",
    },
  ],

  creator: "Shoriful Islam",
  publisher: "ResumeMint AI",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "ResumeMint AI - AI Resume Builder & ATS Resume Checker",
    description:
      "Build ATS-friendly resumes, analyze your resume with AI, and generate professional cover letters in seconds.",
    url: "https://resumimintai.vercel.app",
    siteName: "ResumeMint AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ResumeMint AI",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ResumeMint AI",
    description:
      "AI-powered Resume Builder, ATS Checker, Resume Analyzer & Cover Letter Generator.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}