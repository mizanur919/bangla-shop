import "../styles/globals.css";
import { createContext } from "react";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "../store/index";
export const quantityContext = createContext();

function MyApp({ Component, pageProps }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [priceValue, setPriceValue] = useState([]);
  const [productCount, setProductCount] = useState([]);
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
        productCount,
        setProductCount,
      }}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </quantityContext.Provider>
  );
}

export default MyApp;
