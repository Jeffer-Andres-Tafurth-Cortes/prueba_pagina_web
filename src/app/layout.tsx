import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CallToAction from "../components/CallToAction";
import TopBar from "../components/TopBar";

export const metadata = {
  title: "Asesoría en diversas áreas del derecho | Pravice Abogados",
  description: "Pravice Abogados",
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
