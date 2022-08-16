import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";

import navHead from "../assets/hd-4k.svg";
import Sbasement from "../assets/Sbasement.svg";
import Lbasement from "../assets/Lbasement.svg";
import { Cart } from "./cart/Cart";
import { ShopContext } from "../context/shopContext";

export const Navbar = () => {
  const [showCart, setShowCart] = useState<boolean>(false);

  const { state } = useContext(ShopContext);

  const handleShow = () => {
    setShowCart(!showCart);
  };

  const totalProducts = state.cart.reduce((a, b) => a + b.quantity, 0);

  return (
    <div className="fixed cursor-crosshair w-full py-3 z-50 backdrop-blur-lg  bg-black/80 md:mb-20 border-b-2 ">
      <div className="flex justify-between px-4 items-center">
        <Link href="/">
          <div className=" md:hidden">
            <h1 className="text-4xl">b.</h1>
          </div>
        </Link>
        <Link href="/">
          <div className="hidden md:block text-4xl">
            <h1>basement</h1>
          </div>
        </Link>
        <Link href="/notfound">
          <div className="hidden md:block">
            <Image src={navHead} />
          </div>
        </Link>
        <button
          onClick={handleShow}
          className="font-bold w-[10.5rem] text-xl outline-2  uppercase py-2 cursor-crosshair  rounded-full border-solid border-2 hover:text-orange transition-all duration-300"
        >
          Cart ( {totalProducts > 9 ? `+9` : totalProducts} )
        </button>
        {showCart ? (
          <div className="absolute w-full h-screen bg-black/80 top-[0rem] right-[.02rem]">
            <Cart handleShow={handleShow} showCart={showCart} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
