import { Fugaz_One, Inter } from "next/font/google";
import "./globals.css";
//Fonts
const inter = Inter({ subsets: ["latin"] });
const fugas = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export const metadata = {
  title: "Moody Buddy",
  description: "Track Your Daily Mood !",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center  gap-4">
      <h1 className={"text-gradient text-base sm:text-lg " + fugas.className}>
        Moody
      </h1>
    </header>
  );

  const footer = <footer className="p-4 sm:p-8">footer</footer>;

  return (
    <html lang="en">
      <body
        className={
          "w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col " +
          inter.className
        }
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
