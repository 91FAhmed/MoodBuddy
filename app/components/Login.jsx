import React, { Children } from "react";

import { Fugaz_One } from "next/font/google";
import Button from "./button";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export default function Login(props) {
  const { Children } = props;

  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={"text-4xl sm:text-5xl md:text-6xl " + fugaz.className}>
        Login | Register
      </h3>
      <p>You&#39;r One Step away</p>
      <input
        className=" w-full max-w-[400px] mx-auto px-4 py-2 outline-none border border-l-slate-500 rounded-full"
        placeholder="Email"
      />
      <input
        className=" w-full max-w-[400px] mx-auto px-4 py-2 border border-l-slate-500 outline-none  rounded-full"
        placeholder="Password"
        type="password"
      />
      <div className="max-w-[400px] w-full mx-auto">
        <Button text="Submit" full />
      </div>
    </div>
  );
}
