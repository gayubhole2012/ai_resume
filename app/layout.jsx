import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import Header from "@/components/ui/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Ai Resume Builder",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark
    }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className}`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/*<header>*/}
            <Header />
            <main className="min-h-screen">{children}</main>
            {/*footer*/}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-grey-200"><p>Inside coder</p></div>
            </footer>
          </ThemeProvider>
        </body>
      </html >
    </ClerkProvider>
  );
}
