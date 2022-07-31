import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { quantityContext } from "../../../../../pages/_app";

const CheckoutDetails = () => {
  const { selectedProducts, setSelectedProducts } = useContext(quantityContext);
  const shippingCost = 10;
  let subTotal = 0;
  selectedProducts.map((product) => {
    subTotal += product.price * product.quantity;
  });

  return (
    <div className="container my-8">
      <h1 className="text-center text-3xl mb-8">Checkout</h1>
      <div className="mb-6 bg-gray-four text-white w-48 text-center p-3 text-lg">
        <Link href={"/cart"}>
          <a>Back To My Bag</a>
        </Link>
      </div>

      <div className="flex flex-col w-full px-0 mx-auto lg:flex-row">
        <div className="flex flex-col md:w-full">
          <h2 className="mb-4 font-bold md:text-xl text-heading ">
            Shipping Address
          </h2>
          <div className="justify-center w-full mx-auto">
            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <div className="block mb-3 text-md font-semibold text-gray-500">
                  First Name
                </div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 text-sm border border-gray-four rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-two focus:border-green-two"
                />
              </div>
              <div className="w-full lg:w-1/2 ">
                <div className="block mb-3 text-md font-semibold text-gray-500">
                  Last Name
                </div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 text-sm border border-gray-four rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-two focus:border-green-two"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full">
                <div className="block mb-3 text-md font-semibold text-gray-500">
                  Email
                </div>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 text-sm border border-gray-four rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-two focus:border-green-two"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full">
                <div className="block mb-3 text-md font-semibold text-gray-500">
                  Address
                </div>
                <textarea
                  className="w-full px-4 py-3 text-sm border border-gray-four rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-two focus:border-green-two"
                  cols={20}
                  rows={4}
                  placeholder="Address"
                />
              </div>
            </div>
            <div className="space-x-0 lg:flex lg:space-x-4 mt-3">
              <div className="w-full lg:w-1/2 ">
                <div className="block mb-3 text-md font-semibold text-gray-500">
                  City
                </div>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-3 text-sm border border-gray-four rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-two focus:border-green-two"
                />
              </div>
              <div className="w-full lg:w-1/2 ">
                <div className="block mb-3 text-md font-semibold text-gray-500">
                  Postcode
                </div>
                <input
                  type="text"
                  placeholder="Postcode"
                  className="w-full px-4 py-3 text-sm border border-gray-four rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-two focus:border-green-two"
                />
              </div>
            </div>
            <div className="relative pt-3 xl:pt-6">
              <div className="w-full">
                <div className="block mb-3 text-md font-semibold text-gray-500">
                  Notes(option)
                </div>
                <textarea
                  className="w-full px-4 py-3 text-sm border border-gray-four rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-two focus:border-green-two"
                  cols={20}
                  rows={4}
                  placeholder="Notes for delivery"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
          <div className="pt-12 md:pt-0 2xl:ps-4">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="mt-8">
              <div className="flex flex-col space-y-4">
                {selectedProducts.map((product) => {
                  return (
                    <div className="flex space-x-4" key={product.id}>
                      <div>
                        <Image
                          src={product.thumbnailImage}
                          width={80}
                          height={80}
                          alt={product.title}
                        />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold">{product.title}</h2>
                        <span className="text-gray-five">Price</span> $
                        {product.price * product.quantity}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
              Subtotal<span className="ml-2">${subTotal}</span>
            </div>
            <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
              Shipping Tax<span className="ml-2">${shippingCost}</span>
            </div>
            <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
              Total<span className="ml-2">${subTotal + shippingCost}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-green-two text-white w-48 text-center mx-auto p-3 text-lg">
        <Link href={"/cart"}>
          <a>Place Order</a>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutDetails;
