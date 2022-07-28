import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Categories = () => {
  return (
    <div>
      {/* Category */}
      <div className="title">
        <div className="bg-light-sky rounded-t-md px-8 py-7 flex items-center justify-between">
          <div>
            <span className="font-semibold text-xl text-gray-one">
              Category
            </span>
          </div>
          <FaAngleRight className="text-gray-dark" />
        </div>
        <nav className="links py-7 border border-light-sky">
          <ul className="flex flex-col px-8">
            <li>
              <Link href={"/"}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="relative w-8 h-8">
                      <Image
                        src={"/images/cat-1.png"}
                        alt="category"
                        layout="fill"
                      />
                    </div>
                    <a className="font-medium text-base text-gray-one">
                      Vegetables
                    </a>
                  </div>
                  <div>
                    <FaAngleRight className="text-gray-dark" />
                  </div>
                </div>
              </Link>
              <hr className="bg-[#EBFAEB] opacity-5 my-4" />
            </li>

            <li>
              <Link href={"/"}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="relative w-8 h-8">
                      <Image
                        src={"/images/cat-1.png"}
                        alt="category"
                        layout="fill"
                      />
                    </div>
                    <a className="font-medium text-base text-gray-one">
                      Vegetables
                    </a>
                  </div>
                  <div>
                    <FaAngleRight className="text-gray-dark" />
                  </div>
                </div>
              </Link>
              <hr className="bg-[#EBFAEB] opacity-5 my-4" />
            </li>
          </ul>
        </nav>
      </div>

      {/* Price */}
      <div className="mt-6">
        <div className="bg-light-sky rounded-t-md px-8 py-7 flex items-center justify-between">
          <div>
            <span className="font-semibold text-xl text-gray-one">Price</span>
          </div>
          <FaAngleRight className="text-gray-dark" />
        </div>
        <div className="links py-7 border border-light-sky">
          <h3>Price Range</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
