import Categories from "./Categories";
import Price from "./Price";

const Sidebar = () => {
  return (
    <div className="w-full lg:w-1/4">
      <Categories />
      <Price />
    </div>
  );
};

export default Sidebar;
