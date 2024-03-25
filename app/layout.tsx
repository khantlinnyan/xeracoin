import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/navigation/Nav";
import { TotalCoinsProvider } from "@/context/TotalCoinContext";
import { Toaster, toast } from "sonner";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XERA Coin",
  description: "xeracoin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-zinc-100 `}>
        <TotalCoinsProvider>
          <main>
            <Toaster position="top-center" richColors />
            {children}
          </main>
          <Nav />
        </TotalCoinsProvider>
      </body>
    </html>
  );
}
