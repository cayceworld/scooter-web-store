import Navbar from "../../views/Navbar/Navbar";
import ProductsList from "../../features/ProductsList/ProductsList";
import LogoSection from "../../views/LogoSection/LogoSection";





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