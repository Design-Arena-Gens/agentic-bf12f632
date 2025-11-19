import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata = {
  title: "Kabut Rimba | Petualangan Misterius",
  description:
    "Sebuah pengalaman visual tentang petualang yang menembus hutan berkabut menuju gerbang batu kuno."
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
