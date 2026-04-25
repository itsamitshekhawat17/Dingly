import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/providers/theme-providers"
import { Toaster } from "sonner";
import { Plus } from "lucide-react";

const jakarta = Plus_Jakarta_Sans({ subsets : ['latin']})
export const metadata: Metadata = {
  title: "Dingly",
  description: "Instagram DMs and Comments Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={jakarta.className}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider afterSignOutUrl="/">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
