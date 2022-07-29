import Banner from "./Banner";
import Heading from "./Heading";
import ProductsCollection from "./ProductsCollection";

const Products = ({ products }) => {
  return (
    <div className="w-full lg:w-3/4">
      <Banner />
      <Heading products={products} />
      <ProductsCollection products={products} />
    </div>
  );
};

export default Products;
