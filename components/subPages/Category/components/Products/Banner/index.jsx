import Image from "next/image";

const Banner = () => {
  return (
    <div className="container">
      <div className="relative">
        <Image
          src={"/images/cateory_banner.png"}
          layout="responsive"
          width={1275}
          height={300}
          alt="category banner"
        />
        <div className="absolute top-[50%] left-24 -translate-y-[50%]">
          <p className="text-dark-orange text-xl font-medium">Buy 1 Get 1</p>
          <h2 className="text-green-two font-bold text-4xl mt-4">
            Up to 30% Discount <br /> on Selected Items
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
