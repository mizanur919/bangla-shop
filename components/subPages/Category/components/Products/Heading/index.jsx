import Link from "next/link";
const Heading = ({ products }) => {
  return (
    <div className="py-10">
      <h1 className="text-gray-one text-4xl font-bold">Fruits Collection</h1>
      <div className="flex flex-row justify-between mt-3">
        <div className="flex flex-row gap-4">
          <Link href={"/"}>
            <a className="text-gray-three hover:text-gray-dark">Fruits</a>
          </Link>
          <span>|</span>
          <Link href={"/"}>
            <a className="text-gray-three hover:text-gray-dark">Green Fruits</a>
          </Link>
          <span>|</span>
          <Link href={"/"}>
            <a className="text-gray-three hover:text-gray-dark">Fresh Fruits</a>
          </Link>
        </div>
        <div>
          <p className="text-gray-one ">
            <span className="font-bold">{products.length}</span> Products Found
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
