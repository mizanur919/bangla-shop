import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { quantityContext } from "../../../../../pages/_app";

const ViewCart = () => {
  const { selectedProducts, setSelectedProducts } = useContext(quantityContext);
  console.log("Selected Products:", selectedProducts);
  return (
    <div className="container my-8">
      <h1 className="text-center text-3xl mb-8">Shopping Cart</h1>
      <div className="w-full md:w-1/2 mx-auto h-[300px] overflow-y-scroll">
        {selectedProducts.map((item) => {
          return (
            <div key={item.id}>
              <div className="flex justify-between items-center pt-6 w-full mx-auto">
                <div className="flex just items-center">
                  <Image
                    src={item.thumbnailImage}
                    width={40}
                    height={40}
                    alt={item.title}
                  />
                  <div className="flex flex-col ml-3">
                    <span className="md:text-md font-medium">{item.title}</span>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="pr-8 ">
                    <span className="text-xs font-medium">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
              <hr className="w-1/2 text-gray-two mx-auto my-4" />
            </div>
          );
        })}
      </div>
      <div className="bg-green-two text-center w-[250px] smd:w-[300px] text-white p-2 rounded-md mx-auto mt-4">
        <div>
          <Link href={"/checkout"}>
            <a>Proceed To Checkout</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
