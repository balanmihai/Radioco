import Navbar from "@/components/Navbar";
import { cn, constructMetadata } from "@/lib/utils";
import "./globals.css";
import Footer from "@/components/Footer";
import SideLinks from "@/components/SideLinks";
// import { ThemeProvider } from "@/components/theme-provider"
// import { ModeToggle } from "@/components/theme-toggler"

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("relative h-full font-sans antialiased")}>
        <main className="relative bg-gray-100 flex flex-col min-h-screen ">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
          <Footer />
          <SideLinks />
        </main>
      </body>
    </html>
  );
}
