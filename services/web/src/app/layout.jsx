import Footer from './components/footer'
import { Toaster } from "@/components/ui/sonner"
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "./components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pics by Tori | Victoria Gonzales Photography",
  description: "A captivating photo gallery by Victoria Gonzales, showcasing her expertise in portrait, event, and nature photography.",
  keywords: [
    "Photography",
    "Victoria Gonzales",
    "Photo Gallery",
    "Portrait Photography",
    "Event Photography",
    "Graduation & Senior Portraits",
    "Pet & Animal Photography",
    "Corporate & Commercial Photography",
    "Engagement & Couples Photography",
    "Product Photography",
    "Individual & Family Portraits"
  ],
  authors: [{ name: "Victoria Gonzales", url: "https://www.instagram.com/picsbytori_/" }],
  creator: "Victoria Gonzales",
  publisher: "Pics by Tori",
  robots: "index, follow", // Tells search engines to index and follow links
  alternates: {
    canonical: "https://picsbytori.com", // Preferred URL for SEO
  },
  openGraph: {
    title: "Pics by Tori | Victoria Gonzales Photography",
    description: "Explore stunning photography by Victoria Gonzales, including portraits, events, and nature shots.",
    url: "https://picsbytori.com",
    siteName: "Pics by Tori",
    images: [
      {
        url: "https://picsbytori.com/favicon.ico", // Replace with your Open Graph image
        width: 1200,
        height: 630,
        alt: "Pics by Tori - Victoria Gonzales Photography",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Pics by Tori | Victoria Gonzales Photography",
  //   description: "A beautiful gallery of Victoria Gonzales' finest photography work.",
  //   site: "@yourTwitterHandle", // Replace with your Twitter handle
  //   creator: "@yourTwitterHandle",
  //   images: ["https://picsbytori.com/favicon.ico"], // Same as Open Graph image
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`} >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Toaster position="top-center" richColors />
        <Footer />
      </body>
    </html>
  );
}
