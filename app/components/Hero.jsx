import React from "react";
import { Fugaz_One } from "next/font/google";
import Button from "./button";
import calender from "./Calender";
const fugas = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export default function Hero() {
  return (
    <div className="py-4 md:py-10 ">
      <h1
        className={
          " text-5xl sm:text-6xl md:text-7xl text-center " + fugas.className
        }
      >
        <span className="text-gradient">Moody</span> helps you Track your{" "}
        <span className="text-gradient">Daily</span> Moods
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center  my-4 mx-auto max-w-[800px]">
        Create your mood record and see{" "}
        <span className="font-semibold">how you feel on daily</span> basis in a
        Year!
      </p>
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
        <Button text="Sign up" />
        <Button text="Login" dark />
      </div>
    </div>
  );
}
