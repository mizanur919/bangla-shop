import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag, MdShoppingBag } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const HeaderTop = () => {
  return (
    <div className="container">
      <div className="flex flex-row justify-between items-center">
        {/* Logo */}
        <div>
          <Image
            src={"/images/logo-full.png"}
            width={297}
            height={61}
            alt="bangla shop logo"
          />
        </div>

        {/* Search */}
        <div className="relative">
          <AiOutlineSearch className="absolute top-[50%] left-5 -translate-y-[50%] text-2xl text-gray-five" />
          <input
            type="text"
            placeholder="Search here..."
            className="xl:w-[450px] 2xl:w-[550px] 3xl:w-[667px] border border-gray-six py-4 pl-16 pr-36 rounded-full text-base focus:border-gray-six focus:border focus:outline-none"
          />
          <button className="absolute right-2 top-[50%] -translate-y-[50%] bg-gray-five text-white px-8 py-3 rounded-full border-none">
            <span className="text-base">Search</span>
          </button>
        </div>

        {/* Account */}
        <div className="flex flex-row gap-7 items-center">
          <Link href={"/"}>
            <div className="relative">
              <FaRegHeart className="text-xl" />
              <a className="absolute -top-6 -right-4 bg-dark-orange w-6 h-6 rounded-full text-white text-xs flex items-center justify-center">
                3
              </a>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="relative">
              <MdOutlineShoppingBag className="text-xl text-gray-five" />
              <a className="absolute -top-6 -right-4 bg-dark-orange w-6 h-6 rounded-full text-white text-xs flex items-center justify-center">
                2
              </a>
            </div>
          </Link>
          <div className="flex flex-row">
            <Link href={"/"}>
              <div className="flex flex-row items-center gap-3">
                <div className="bg-gray-seven p-3 rounded-full">
                  <BiUser className="text-3xl text-gray-five" />
                </div>
                <span className="text-gray-five">Account</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
