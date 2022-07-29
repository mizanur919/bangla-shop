import Link from "next/link";
import { BiMenuAltLeft, BiChevronDown } from "react-icons/bi";
const HeaderBottom = () => {
  return (
    <div className="container mt-6">
      <div className="flex flex-row justify-between items-center">
        <div className="w-2/6">
          <Link href={"/"}>
            <div className="flex flex-row w-[180] 2xl:w-[400px] bg-green-two px-6 py-3 text-white items-center justify-between rounded-full">
              <BiMenuAltLeft className="text-2xl" />
              <span>All Categories</span>
              <BiChevronDown className="text-2xl" />
            </div>
          </Link>
        </div>
        <div className="w-3/6">
          <ul className="flex flex-row items-center justify-center 2xl:justify-start gap-8">
            <li>
              <Link href={"/"}>
                <a className="text-base text-gray-five font-medium">Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/6 flex flex-row justify-end gap-3 text-dark-orange font-medium text-base">
          <span>%</span>
          <span>Special Offers!</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
