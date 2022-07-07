import Navbar from "../../layouts/Navbar/Navbar";
import ProductsList from "../../features/ProductsList/ProductsList";
import LogoSection from "../../layouts/LogoSection/LogoSection";





const Header = () => {
  return (
    <>
      <Navbar />
      <LogoSection />
      <ProductsList />
    </>
  );
}

export default Header;