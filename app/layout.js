import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
//Fonts
const open_sans = Open_Sans({ subsets: ["latin"] });
const fugas = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export const metadata = {
  title: "Moody Buddy",
  description: "Track Your Daily Mood !",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center  gap-4">
      <h1 className={"text-gradient text-base sm:text-2xl " + fugas.className}>
        Moody
      </h1>
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center ">
      <p className={"text-indigo-500 " + fugas.className}>Created with 👍</p>
    </footer>
  );

  return (
    <html lang="en">
      <body
        className={
          "w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800" +
          open_sans.className
        }
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
