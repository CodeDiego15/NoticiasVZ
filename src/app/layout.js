import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NoticiasVZ",
  description: "NoticiasVZ Información de la actualidad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fnews_2495007&psig=AOvVaw26fI-UJGYeITT4R1CZO-R-&ust=1721957487953000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjGhtuFwYcDFQAAAAAdAAAAABAO" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
