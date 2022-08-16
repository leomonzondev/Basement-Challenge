import Link from "next/link";
import React from "react";
import { Lines } from "../src/components/Lines";

const Custom404 = () => {
  const text = "text-[10rem] font-bold tracking-[.75rem]";

  return (
    <div className="bg-orange overflow-hidden flex h-[100vh] flex-col justify-end leading-[11rem]">
      <div className="h-full  w-full pt-80 pointer-events-none">
        <Lines />
      </div>
      <div className="px-6">
        <div className="flex ">
          <h1 className={`${text}`}>ERROR #404</h1>
          <Link href={"/"}>
            <button className="ml-10  text-black text-[2.86rem]  ">
              🡒 GET ME HOME
            </button>
          </Link>
        </div>
        <h1 className={`${text}`}>PAGE NOT FOUND</h1>
      </div>
    </div>
  );
};

export default Custom404;
