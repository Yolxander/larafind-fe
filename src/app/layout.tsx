import { Inter } from 'next/font/google'
import './globals.css'
import './cyberpunk.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {ThemeProvider} from "next-themes";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Laravel Packages Discovery',
  description: 'Discover and explore Laravel packages with AI-powered recommendations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

