import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { AuthProvider } from "./context/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Ranks",
  description: "Development by Holberton C22",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-Expletus">
        <AuthProvider>
          <Toaster richColors position="top-right" expand={true} />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

