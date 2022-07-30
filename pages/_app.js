import "../styles/globals.css";
import { createContext } from "react";
import { useState } from "react";

export const quantityContext = createContext();

function MyApp({ Component, pageProps }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [priceValue, setPriceValue] = useState([]);
  const [getCategory, setGetCategory] = useState("");
  const [getSingleProduct, setGetSingleProduct] = useState({});

  return (
    <quantityContext.Provider
      value={{
        selectedProducts,
        setSelectedProducts,
        priceValue,
        setPriceValue,
        getCategory,
        setGetCategory,
        getSingleProduct,
        setGetSingleProduct,
      }}
    >
      <Component {...pageProps} />
    </quantityContext.Provider>
  );
}

export default MyApp;
