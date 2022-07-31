import Image from "next/image";
import { AiFillStar, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { GoGitCompare } from "react-icons/go";

const ProductPopup = ({ visible, onClose, singleProductData }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-0 flex justify-center items-center z-50 overflow-y-scroll overflow-x-scroll">
      <div className="relative max-w-screen-2xl mx-auto p-7 bg-white rounded-md mt-[700px] lg:my-0">
        <button
          onClick={onClose}
          className="bg-red-400 p-3 text-white absolute top-5 right-5 rounded-md hover:bg-red-500"
        >
          Close
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <div className="text-center lg:text-left mb-10 mt-14 lg:mb-0">
            <Image
              src={singleProductData?.thumbnailImage}
              width={600}
              height={600}
              alt="Product image"
            />
          </div>

          <div>
            <div className="status flex gap-12 items-center text-base mb-2">
              <p className="text-gray-four uppercase font-normal">Status</p>
              <p className="font-semibold text-green-two">In Stock</p>
            </div>
            <h1 className="text-gray-one text-[28px] font-medium">
              {singleProductData?.title}
            </h1>
            <div className="flex flex-row items-center mt-3">
              <AiFillStar color="#FABE50" />
              <AiFillStar color="#FABE50" />
              <AiFillStar color="#FABE50" />
              <AiFillStar color="#FABE50" />
              <AiFillStar color="#FABE50" />
              <span className="ml-2 text-sm font-normal text-gray-five">
                10 reviews
              </span>
            </div>

            <div className="price mt-8 flex flex-row items-center gap-6">
              <h3 className="text-gray-one text-2xl md:text-4xl font-semibold">
                ${singleProductData?.price}
              </h3>
              <p className="line-through font-normal text-xl md:text-3xl text-gray-three">
                ${singleProductData?.previousPrice}
              </p>
              <p className="font-normal text-base text-gray-three">
                (+15% Val Included)
              </p>
            </div>
            <p className="text-base text-gray-five font-semibold mt-5">
              12 products sold in last 12 hours
            </p>

            <div className="border border-gray-six my-8"></div>

            <div className="product-count flex flex-row justify-center sm:justify-between items-center gap-10 flex-wrap">
              <div>
                <p className="text-base text-gray-five font-semibold uppercase">
                  Quantity
                </p>
              </div>
              <div className="flex flex-row items-center gap-5">
                <button className="text-2xl font-thin w-12 h-12 lg:w-14 lg:h-14 border-2 border-gray-six rounded-full hover:bg-gray-seven hover:transition-all">
                  -
                </button>
                <button className="text-xl font-semibold w-12 h-12 lg:w-14 lg:h-14 bg-gray-seven rounded-full cursor-default">
                  1
                </button>
                <button className="text-2xl font-thin w-12 h-12 lg:w-14 lg:h-14 border-2  border-gray-six rounded-full hover:bg-gray-seven hover:transition-all">
                  +
                </button>
              </div>
              <div>
                <p>Only 0 item left</p>
              </div>
            </div>

            <div className="add-to-card mt-7">
              <button className="w-full bg-green-two rounded-full py-2 smd:py-3 lg:py-5 text-md text-white font-light tracking-wide border-2 border-green-two hover:border-2 hover:border-green-two hover:bg-white hover:text-green-two hover:transition-all">
                Add to card
              </button>
            </div>

            <div className="add-to-card mt-4">
              <button className="w-full bg-gray-seven rounded-full py-2 smd:py-3 lg:py-5 text-lg text-gray-five font-semibold tracking-wide hover:bg-slate-100">
                Buy Now
              </button>
            </div>

            <div className="mt-8 flex flex-row justify-evenly sm:justify-between">
              <div className="wishlist flex flex-row items-center gap-3 cursor-pointer text-base font-normal">
                <AiOutlineHeart className="text-2xl text-gray-five font-bold" />
                <p className="hidden sm:block">Add to Wishlist</p>
              </div>
              <div className="compare flex flex-row items-center gap-3 cursor-pointer">
                <GoGitCompare className="text-2xl text-gray-five font-bold" />
                <p className="hidden sm:block">Add to Compare</p>
              </div>
              <div className="share flex flex-row items-center gap-3 cursor-pointer">
                <AiOutlineShareAlt className="text-2xl text-gray-five font-bold" />
                <p className="hidden sm:block">Share</p>
              </div>
            </div>

            <div className="border border-gray-six my-8"></div>

            <div className="flex flex-row gap-y-10 gap-x-10">
              <div>
                <p className="text-gray-four font-semibold text-base">SKU</p>
                <p className="my-5 text-gray-four font-semibold text-base">
                  Category
                </p>
                <p className="text-gray-four font-semibold text-base">Tags</p>
              </div>
              <div>
                <p className="text-gray-five font-semibold text-base">
                  {singleProductData?.sku}
                </p>
                <p className="my-5 text-gray-five font-semibold text-base">
                  {singleProductData?.category}
                </p>
                <p className="text-gray-five font-semibold text-base">
                  {singleProductData?.tags.join(", ")}
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
