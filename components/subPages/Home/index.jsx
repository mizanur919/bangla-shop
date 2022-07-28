import HomeLayout from "../../../layouts/HomeLayout";
import Brand from "./components/Brand";
import Category from "./components/Category";
import ContactPayment from "./components/ContactPayment";
import DealWeek from "./components/DealWeek";
import HeroSlider from "./components/HeroSlider";

const HomePage = () => {
  return (
    <HomeLayout>
      <HeroSlider />
      <Category />
      <DealWeek />
      <Brand />
      <ContactPayment />
    </HomeLayout>
  );
};

export default HomePage;
