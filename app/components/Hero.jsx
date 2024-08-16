import React from "react";
import { Fugaz_One } from "next/font/google";
const fugas = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export default function Hero() {
  return (
    <div className="py-10 sm:py-14 md:py-20 ">
      <h1
        className={
          "text-5xl sm:text-6xl md:text-7xl text-center " + fugas.className
        }
      >
        <span>Moody</span> helps you Track your <span>Daily!</span> Moods
      </h1>
    </div>
  );
}
