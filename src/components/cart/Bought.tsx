import React from "react";

type boughtProps = {
  setBought: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Bought = ({ setBought }: boughtProps) => {
  return (
    <div className="fixed  z-50 w-screen h-screen flex justify-center items-center bg-black/50 backdrop-blur-xl outline outline-white ">
      <div className="bg-black outline justify-between flex-col gap-10 px-10 h-96  outline-white flex  items-center">
        <h1 className="text-3xl py-24">Thank you for your purchase {`:)`}</h1>
        <button
          onClick={() => setBought(false)}
          className="stroke text-2xl pb-16 text-black"
        >
          Continue shopping
        </button>
      </div>
    </div>
  );
};
