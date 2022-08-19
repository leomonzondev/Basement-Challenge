import "../styles/output.css";
import type { AppProps } from "next/app";
import { Navbar } from "../src/components/Navbar";
import { ShopProvider } from "../src/context/ShopProvider";
import { SnackbarProvider } from "notistack";
import { useContext, useState } from "react";
import { Bought } from "../src/components/cart/Bought";
import { ShopContext } from "../src/context/shopContext";
import { TYPES } from "../src/context/shopReducer";

function MyApp({ Component, pageProps }: AppProps) {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [bought, setBought] = useState<boolean>(false);

  const { state, dispatch } = useContext(ShopContext);

  const handleShow = () => {
    setShowCart(!showCart);
  };

  const handleBuy = () => {
    setBought(!bought);
    setShowCart(false);
    dispatch({ type: TYPES.CART_ADD, product: {} });
  };

  const navProps = {
    handleBuy,
    setShowCart,
    showCart,
    handleShow,
  };

  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <ShopProvider>
          <div className="absolute z-[60]">
            {bought && <Bought setBought={setBought} />}
          </div>

          <Navbar {...navProps} />
          <div className=" cursor-crosshair">
            <Component {...pageProps} />
          </div>
        </ShopProvider>
      </SnackbarProvider>
    </>
  );
}

export default MyApp;
