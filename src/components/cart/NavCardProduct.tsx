import Image from "next/image";
import React, { useContext, useEffect } from "react";

import { IProduct } from "../../interfaces/products";
import { ShopContext } from "../../context/shopContext";
import { TYPES } from "../../context/shopReducer";

type productType = {
  product: IProduct;
};

export const NavCardProduct = ({ product }: productType) => {
  const sizes = ["S", "M", "L", "XL"];

  const { state, dispatch } = useContext(ShopContext);

  const handleRemove = () => {
    dispatch({ type: TYPES.CART_REMOVE, product: product });
  };

  //Hnadle Qty to dispatch if subs action subs if plus plus action
  const handleQuantity = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { name } = e.target as HTMLInputElement;
    e.preventDefault();
    if (name === "subs" && product.quantity > 1) {
      dispatch({
        type: TYPES.CART_ADD,
        product: { ...product, quantity: product.quantity - 1 },
      });
    }
    if (name === "plus" && product.quantity < 20) {
      dispatch({
        type: TYPES.CART_ADD,
        product: { ...product, quantity: product.quantity + 1 },
      });
    }
  };

  return (
    <div className="flex border-2 border-solid border-white ">
      <div className="md:px-4 px-2 md:pt-4 md:pb-6">
        <div className="flex  justify-center items-center bg-gradient-to-t  from-gray-100  select-none md:px-4">
          {product.image?.src ? (
            <Image src={product.image.src} width={280} height={320} />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex justify-between flex-col  w-full">
        <div className="pt-2">
          <div className="flex justify-between">
            <h1 className="md:font-extrabold text-2xl md:text-5xl">
              {product.title}
            </h1>
            <button
              className="md:text-3xl cursor-crosshair  md:font-extrabold pr-5 hover:text-orange transition-all duration-200"
              onClick={handleRemove}
            >
              X
            </button>
          </div>
          <h2 className="md:font-extrabold text-lg md:text-3xl text-gray-200">
            {product.description}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <h2 className="font-extrabold text-xl md:text-3xl ">QUANTITY:</h2>
          <div className="flex w-16 md:w-24 h-8 md:h-10 py-2 md:font-extrabold items-center justify-around border-2 rounded-full">
            <button
              className="btn-quantity"
              name="subs"
              onClick={(e) => handleQuantity(e)}
            >
              -
            </button>
            <p className="text-xl md:text-3xl">{product.quantity}</p>
            <button
              className="btn-quantity"
              name="plus"
              onClick={(e) => handleQuantity(e)}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className="flex gap-2 font-extrabold items-center">
            <h2 className=" text-xl md:text-3xl">SIZE:</h2>
            <form className="flex  ">
              {sizes.map((size) => {
                const id = Math.random();
                return [
                  <label
                    htmlFor={size + id}
                    className="h-full cursor-pointer select-none"
                  >
                    <input
                      type="radio"
                      name="filterTable"
                      id={size + id}
                      className="peer hidden"
                    />
                    <div className="text-2xl flex items-center justify-center md:text-3xl text-center w-9 h-9 md:w-12 md:h-12 white  peer-checked:outline-2 peer-checked:outline peer-checked:rounded-full peer-checked:outline-white">
                      {size}
                    </div>
                  </label>,
                ];
              })}
            </form>
          </div>
          <div className="font-bold text-xl md:text-5xl md:p-5">
            ${product.price * product.quantity}
          </div>
        </div>
      </div>
    </div>
  );
};
