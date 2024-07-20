import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const keywords = "Thermofisher, Thermofisherscientific, thermo fisher scientific company, thermo fisher fisher scientific, thermo fisher scientific thermo fisher scientific, xrf analyzer, xrf machine, xrf spectrometer, xrf analyzer price, Olympus, olympus camera, Niton, DXL 800, XL2 100";

export const metadata = {
  title: "XRF Analyzer Middle East",
  description: keywords,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={keywords} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
