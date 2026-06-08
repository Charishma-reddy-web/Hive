import { Sora } from "next/font/google";
import "./globals.css";

const siteFont = Sora({
  subsets: ["latin"],
  variable: "--font-site",
  display: "swap"
});

export const metadata = {
  title: "NurtureHive",
  description: "AI-native growth intelligence website built in Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={siteFont.variable}>
        {children}
      </body>
    </html>
  );
}
