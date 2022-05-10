import DesktopNav from "./desktop-nav";
import MobileNav from "./mobil-nav";

export default function Navigation() {
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
}
