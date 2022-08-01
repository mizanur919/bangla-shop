import Image from "next/image";
import { useContext, useState } from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { GoGitCompare } from "react-icons/go";
import { quantityContext } from "../../../../../pages/_app";

const ProductPopup = ({
  id,
  tags,
  thumbnailImage,
  title,
  rating,
  previousPrice,
  price,
  sku,
  category,
  products,
}) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const {
    selectedProducts,
    setSelectedProducts,
    getSingleProduct,
    setGetSingleProduct,
  } = useContext(quantityContext);
  const handleAdd = () => {
    const data = {
      id,
      title,
      thumbnailImage,
      rating,
      price,
      tags,
      category,
      quantity: productQuantity,
    };

    const findItem = selectedProducts?.find((item) => item?.id === id);

    if (!findItem && findItem === undefined) {
      setSelectedProducts((prevItem) => [...prevItem, data]);
    }
  };

  return (
    <div className="container flex justify-center items-center">
      <div className="relative p-3 lg:p-7 rounded-md lg:my-0 mx-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <div className="text-left mb-3 lg:mb-0">
            <Image
              src={thumbnailImage}
              width={400}
              height={400}
              alt="Product image"
            />
          </div>

          <div>
            <div className="status flex gap-12 items-center text-base mb-2">
              <p className="text-gray-four uppercase font-normal">Status</p>
              <p className="font-semibold text-green-two">In Stock</p>
            </div>
            <h1 className="text-gray-one text-2xl lg:text-[28px] font-medium">
              {title}
            </h1>
            <div className="flex flex-row items-center mt-1 lg:mt-3">
              <AiFillStar color="#FABE50" />
              <AiFillStar color="#FABE50" />
              <AiFillStar color="#FABE50" />
              <AiFillStar color="#FABE50" />
              <AiFillStar color="#FABE50" />
              <span className="ml-2 text-sm font-normal text-gray-five">
                10 reviews
              </span>
            </div>

            <div className="price mt-2 lg:mt-8 flex flex-row items-center gap-6">
              <h3 className="text-gray-one text-xl md:text-3xl lg:text-4xl font-semibold">
                ${price}
              </h3>
              <p className="line-through font-normal text-lg md:text-2xl lg:text-3xl text-gray-three">
                ${previousPrice}
              </p>
              <p className="font-normal text-xs text-gray-three">
                (+15% Val Included)
              </p>
            </div>
            <p className="text-base text-gray-five font-normal lg:font-semibold mt-3 lg:mt-5">
              12 products sold in last 12 hours
            </p>

            <div className="hidden lg:block border border-gray-six my-8"></div>

            <div className="product-count flex flex-row justify-center sm:justify-between items-center gap-4 lg:gap-10 flex-wrap mt-4 lg:mt-0">
              <div>
                <p className="text-base text-gray-five font-semibold uppercase">
                  Quantity
                </p>
              </div>
              <div className="flex flex-row items-center gap-5">
                <button
                  onClick={() => {
                    if (productQuantity >= 1) {
                      setProductQuantity((prevQ) => prevQ - 1);
                    }
                  }}
                  className="text-2xl font-thin w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 border-2 border-gray-six rounded-full hover:bg-gray-seven hover:transition-all"
                >
                  -
                </button>
                <button className="text-xl font-semibold w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gray-seven rounded-full cursor-default">
                  {productQuantity}
                </button>
                <button
                  onClick={() => setProductQuantity((prevQ) => prevQ + 1)}
                  className="text-2xl font-thin w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 border-2  border-gray-six rounded-full hover:bg-gray-seven hover:transition-all"
                >
                  +
                </button>
              </div>
              <div>
                <p>Only 0 item left</p>
              </div>
            </div>

            <div className="add-to-card mt-3 lg:mt-7">
              <button
                onClick={handleAdd}
                className="w-full bg-green-two rounded-full py py-2 smd:py-3 lg:py-5 text-md text-white font-light tracking-wide border-2 border-green-two hover:border-2 hover:border-green-two hover:bg-white hover:text-green-two hover:transition-all"
              >
                Add to card
              </button>
            </div>

            <div className="add-to-card mt-3">
              <button className="w-full bg-gray-seven rounded-full py-2 smd:py-3 lg:py-5 text-lg text-gray-five font-normal lg:font-semibold tracking-wide hover:bg-slate-100">
                Buy Now
              </button>
            </div>

            <div className="mt-5 lg:mt-8 flex flex-row justify-left gap-10 lg:gap-0 md:justify-between flex-wrap">
              <button className="wishlist flex flex-row items-center gap-3 cursor-pointer text-base font-normal">
                <AiOutlineHeart className="text-xl md:text-2xl text-gray-five font-bold" />
                <p className="hidden md:block">Add to Wishlist</p>
              </button>
              <div className="compare flex flex-row items-center gap-3 cursor-pointer">
                <GoGitCompare className="text-xl md:text-2xl text-gray-five font-bold" />
                <p className="hidden md:block">Add to Compare</p>
              </div>
              <div className="share flex flex-row items-center gap-3 cursor-pointer">
                <AiOutlineShareAlt className="text-xl md:text-2xl text-gray-five font-bold" />
                <p className="hidden md:block">Share</p>
              </div>
            </div>

            <div className="hidden lg:block border border-gray-six my-8"></div>

            <div className="flex flex-row gap-y-10 gap-x-10 mt-6 lg:mt-0">
              <div>
                <p className="text-gray-four font-semibold text-base">SKU</p>
                <p className="my-5 text-gray-four font-semibold text-base">
                  Category
                </p>
                <p className="text-gray-four font-semibold text-base">Tags</p>
              </div>
              <div>
                <p className="text-gray-five font-semibold text-base">{sku}</p>
                <p className="my-5 text-gray-five font-semibold text-base">
                  {category}
                </p>
                <p className="text-gray-five font-semibold text-base">
                  {tags?.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
