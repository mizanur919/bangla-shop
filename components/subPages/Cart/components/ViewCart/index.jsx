import Image from "next/image";
import React, { useContext } from "react";
import { quantityContext } from "../../../../../pages/_app";

const ViewCart = () => {
  const { selectedProducts, setSelectedProducts } = useContext(quantityContext);
  console.log(selectedProducts);
  return (
    <div className="container my-8">
      <h1 className="text-center text-3xl mb-8">View Cart</h1>
      <div>
        {selectedProducts.map((item) => {
          return (
            <div key={item.id} className="mb-4 w-96 mx-auto">
              <div className="flex flex-row gap-10 items-center">
                <div>
                  <Image
                    src={item.thumbnailImage}
                    width={80}
                    height={80}
                    alt={item.title}
                  />
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.category}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewCart;
