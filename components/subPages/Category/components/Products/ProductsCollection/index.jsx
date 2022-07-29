import ProductCard from "../../../../../reusable/ProductCard";

const ProductsCollection = ({ products }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
      <div className="flex justify-center">
        <button className="bg-green-two px-10 smd:px-14 py-3 smd:py-4 text-white text-center font-medium text-lg border-2 rounded-full mt-10 transition hover:transition-all hover:border-2 hover:border-green-two hover:text-green-two hover:bg-white">
          Load More
        </button>
      </div>
    </div>
  );
};

export default ProductsCollection;
