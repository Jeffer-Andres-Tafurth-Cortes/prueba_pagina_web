import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CallToAction from "../components/CallToAction";
import TopBar from "../components/TopBar";

export const metadata = {
  title: "Pravice Abogados | Asesoría y representación legal",
  description:
    "Pravice Abogados es una firma especializada en asesoría y representación legal para personas y empresas. Defensa jurídica estratégica, experiencia y compromiso.",
  keywords: [
    "abogados",
    "firma de abogados",
    "asesoría legal",
    "representación legal",
    "derecho laboral",
    "derecho civil",
    "abogados para empresas",
  ],
  authors: [{ name: "Pravice Abogados" }],
  creator: "Pravice Abogados",
  metadataBase: new URL("https://www.tudominio.com"), // cámbialo
  openGraph: {
    title: "Pravice Abogados | Asesoría legal profesional",
    description:
      "Abogados especializados en asesoría y representación legal. Protegemos tus derechos con estrategia y experiencia.",
    url: "https://www.tudominio.com",
    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
