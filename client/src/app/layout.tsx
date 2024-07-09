import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/authContext";
import { AdminProvider } from "./context/adminContext";
import { FeedProvider } from "./context/feedContext";
import "./globals.css";
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
          <AdminProvider>
            <FeedProvider>
              <Toaster richColors position="top-right" expand={true} />
              {children}
            </FeedProvider>
          </AdminProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

