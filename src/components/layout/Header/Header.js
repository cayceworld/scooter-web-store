import Navbar from "../../views/Navbar/Navbar";
import ProductsList from "../../features/ProductsList/ProductsList";
import LogoSection from "../../views/LogoSection/LogoSection";





const Header = props => {

  const isDesktop = props.isDesktop; 

  return (
    <>
      <Navbar isDesktop={isDesktop}/>
      <LogoSection />
      <ProductsList />
    </>
  );
}

export default Header;