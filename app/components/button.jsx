import React from "react";
import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export default function Button(props) {
  const { text, dark, full } = props;

  return (
    <button
      className={
        "border border-solid rounded-full overflow-hidden duration-200 hover:opacity-60 border-indigo-600 " +
        (dark ? "text-white bg-indigo-600 " : "text-indigo-600 ") +
        (full ? "grid items-center w-full" : "")
      }
    >
      <p className={"px-6 sm:px-10 white whitespace-nowrap py-2 sm:py-3"}>
        <p className={fugaz.className}>{text}</p>
      </p>
    </button>
  );
}
