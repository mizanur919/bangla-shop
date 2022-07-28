import CategoryBannerFeature from "./CategoryBannerFeature";
import categoryBannerData from "../../../utils/categoryBannerData";
const CategoryBanner = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-5 mt-24">
        {categoryBannerData?.map((banner) => {
          return <CategoryBannerFeature key={banner.id} {...banner} />;
        })}
      </div>
    </div>
  );
};

export default CategoryBanner;
