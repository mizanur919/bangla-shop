import CategoryBanner from "./CategoryBanner";
import CategorySlide from "./CategorySlide";

const Category = () => {
  return (
    <div className="container px-2 md:px-0">
      <CategorySlide />
      <CategoryBanner />
    </div>
  );
};

export default Category;
