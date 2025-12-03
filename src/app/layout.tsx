import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CallToAction from "../components/CallToAction";
import TopBar from "../components/TopBar";

export const metadata = {
  title: "Asesoría en diversas áreas del derecho | Pravice Abogados",
  description: "Pravice Abogados",
  keywords: [
    "recuperación de cartera",
    "cobro jurídico",
    "cobro prejurídico",
    "gestión de cobranzas",
    "recaudo de cartera",
    "recuperación de deudas",
    "asesoría legal",
    "cobranza profesional",
    "empresa de cobranza",
    "recuperación de cartera en Colombia",
  ],
  openGraph: {
    title: "Asesoría en diversas áreas del derecho | Pravice Abogados",
    description: "Recuperación de cartera rápida y efectiva.",
    url: "",
    siteName: "Pravice Abogados",
    images: [
      {
        url: "/logo-pravice.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <TopBar />
        <Navbar />
        <main style={{ padding: "80px" }}>{children}</main>
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
