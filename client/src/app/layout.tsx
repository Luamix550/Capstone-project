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
<<<<<<< HEAD
      <body className={inter.className}>
        <AuthProvider>
          <Toaster richColors position="top-right" expand={true} />
          {children}
        </AuthProvider>
=======
      <body className="font-Expletus">
        <Toaster richColors position="top-right" expand={true} />
        {children}
>>>>>>> b106e118ee51c0d7b3a405db5e1391e19bbe4e14
      </body>
    </html>
  );
}

