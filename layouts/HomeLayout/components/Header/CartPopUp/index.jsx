import Image from "next/image";
import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { quantityContext } from "../../../../../pages/_app";

const CartPopUp = () => {
  const { selectedProducts, setSelectedProducts } = useContext(quantityContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="bg-gray-two w-96 h-72 absolute top-[100%] right-0 z-10 p-5 rounded-md">
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
        <button onClick={() => setIsCartOpen(!isCartOpen)} className="mb-10">
          <AiOutlineClose className="absolute top-6 right-7 text-3xl bg-gray-four p-2 rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default CartPopUp;
