import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import UserTypeModal from "./components/ui/UserTypeModal";
import { AuthProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AmpedUp - Find and Book Live Music",
  description: "Connect with local venues and artists. Book performances or discover upcoming live music events near you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full flex flex-col`}>
        <AuthProvider>
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
          <UserTypeModal />
        </AuthProvider>
      </body>
    </html>
  );
}
