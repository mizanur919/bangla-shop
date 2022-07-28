import HomeLayout from "../../../layouts/HomeLayout";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";

const CategoryPage = () => {
  return (
    <HomeLayout>
      <div className="container flex flex-row gap-6">
        <Sidebar></Sidebar>
        <Products></Products>
      </div>
    </HomeLayout>
  );
};

export default CategoryPage;
