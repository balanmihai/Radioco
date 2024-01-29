import Navbar from "@/components/Navbar"
import Providers from "@/components/Providers"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Toaster } from "sonner"
import "./globals.css"
import Footer from "@/components/Footer"
import SideLinks from "@/components/SideLinks"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/theme-toggler"

const inter = Poppins({ subsets: ["latin"], weight: "400" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <main className="relative flex flex-col min-h-screen ">
          <Providers>
            <Navbar />
            <ModeToggle />
            <div className="flex-grow flex-1">{children}</div>
            <Footer />
            <SideLinks />
          </Providers>
        </main>
        <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
