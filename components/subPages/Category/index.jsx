import HomeLayout from "../../../layouts/HomeLayout";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";

const CategoryPage = ({ products }) => {
  return (
    <HomeLayout>
      <div className="container flex flex-col lg:flex-row gap-6">
        <Sidebar products={products}></Sidebar>
        <Products products={products}></Products>
      </div>
    </HomeLayout>
  );
};

export default CategoryPage;
