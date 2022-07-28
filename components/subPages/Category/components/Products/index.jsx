import Banner from "./Banner";
import Heading from "./Heading";
import ProductsCollection from "./ProductsCollection";

const Products = () => {
  return (
    <div className="w-full lg:w-3/4">
      <Banner />
      <Heading />
      <ProductsCollection />
    </div>
  );
};

export default Products;
