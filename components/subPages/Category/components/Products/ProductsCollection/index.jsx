import { useContext, useEffect, useState } from "react";
import { quantityContext } from "../../../../../../pages/_app";
import ProductCard from "../../../../../reusable/ProductCard";

const ProductsCollection = ({ products }) => {
  const [visible, setVisible] = useState(3);
  const { priceValue, getCategory, setProductCount } =
    useContext(quantityContext);
  const categoryData = products.filter(
    (product) => product.category === getCategory
  );
  const handleLoadMore = () => {
    setVisible(visible + 3);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {!getCategory ? (
          <>
            {priceValue.length === 0 ? (
              <>
                {products.slice(0, visible).map((product) => {
                  return <ProductCard key={product.id} {...product} />;
                })}
              </>
            ) : (
              <>
                {products
                  .filter((product) => {
                    return (
                      product.price > priceValue[0] &&
                      product.price < priceValue[1]
                    );
                  })
                  .map((product) => {
                    return <ProductCard key={product.id} {...product} />;
                  })}
              </>
            )}
          </>
        ) : (
          <>
            {priceValue.length === 0 ? (
              <>
                {categoryData.map((product) => {
                  return <ProductCard key={product.id} {...product} />;
                })}
              </>
            ) : (
              <>
                {categoryData
                  .filter((product) => {
                    return (
                      product.price > priceValue[0] &&
                      product.price < priceValue[1]
                    );
                  })
                  .map((product) => {
                    return <ProductCard key={product.id} {...product} />;
                  })}
              </>
            )}
          </>
        )}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => handleLoadMore()}
          className="bg-green-two px-10 smd:px-14 py-3 smd:py-4 text-white text-center font-medium text-lg border-2 rounded-full mt-10 transition hover:transition-all hover:border-2 hover:border-green-two hover:text-green-two hover:bg-white"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default ProductsCollection;
