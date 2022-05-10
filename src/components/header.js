import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Header = ({ query, setQuery, numResults, setNumResults }) => {
  return (
    <>
      <div className="lg:hidden">
        <MobileNav
          query={query}
          setQuery={setQuery}
          numResults={numResults}
          setNumResults={setNumResults}
        />
      </div>
      <div className="hidden lg:flex">
        <DesktopNav
          query={query}
          setQuery={setQuery}
          numResults={numResults}
          setNumResults={setNumResults}
        />
      </div>
    </>
  );
};

export default Header;
