import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";

const DealWeekDetails = () => {
  return (
    <div>
      {/* Card Image */}
      <div className="image mb-3 relative group">
        <Link href={"/"}>
          <a className="rounded-sm">
            <Image
              src={"/images/deal-1.png"}
              width={405}
              height={450}
              alt="image one"
            />
          </a>
        </Link>
        <div className="hidden absolute top-0 left-0 bg-black opacity-60 w-full h-full group-hover:block"></div>
        <button className="hidden bg-black text-white text-base font-medium text-center rounded-md py-2 w-16 absolute top-4 left-4 group-hover:block">
          New
        </button>
        <div className="hidden group-hover:block absolute top-0 left-0 w-full h-full text-center">
          <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
            <div className="flex flex-row justify-center gap-5">
              <button className="text-2xl font-thin w-12 h-12 border-2 border-white text-white rounded-full hover:bg-gray-seven hover:text-gray-one hover:transition-all">
                -
              </button>
              <button className="text-xl font-semibold w-12 h-12 bg-gray-seven rounded-full cursor-default">
                1
              </button>
              <button className="text-2xl font-thin w-12 h-12 border-2 border-white text-white rounded-full hover:bg-gray-seven hover:text-gray-one hover:transition-all">
                +
              </button>
            </div>
            <button className="bg-green-two w-full rounded-full text-white font-medium py-3 mt-5">
              Add To Cart
            </button>
          </div>
        </div>
        <button className="hidden bg-gray-seven text-gray-eight rounded-t-md py-2 w-full absolute bottom-0 left-0 group-hover:flex justify-center items-center transition-all">
          <span className="mr-4">Details</span>
          <FaLongArrowAltRight />
        </button>
      </div>

      {/* Card Info */}
      <div className="info text-center">
        <Link href={"/"}>
          <a className="font-normal text-gray-four">Category Name</a>
        </Link>
        <div className="flex flex-row items-center justify-center mt-3">
          <AiFillStar color="#FABE50" />
          <AiFillStar color="#FABE50" />
          <AiFillStar color="#FABE50" />
          <AiFillStar color="#FABE50" />
          <AiFillStar color="#FABE50" />
          <span className="ml-1 text-sm font-normal text-gray-five">(121)</span>
        </div>
        <p className="text-xl font-medium text-gray-one mt-3">Product Name</p>
        <div className="price mt-3">
          <p className="text-xl font-medium text-dark-orange">
            $200{" "}
            <span className="line-through font-normal text-lg text-gray-four">
              $300
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DealWeekDetails;
