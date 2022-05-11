import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Header = () => {
  return (
    <>
      <div className="lg:hidden">
        <MobileNav />
      </div>
      <div className="hidden lg:flex">
        <DesktopNav />
      </div>
    </>
  );
};

export default Header;
