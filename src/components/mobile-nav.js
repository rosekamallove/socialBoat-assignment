import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Drawer from "./drawer";

export default function MobileNav({
  query,
  setQuery,
  numResults,
  setNumResults,
}) {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <div className="flex justify-center items-center bg-slate-200">
      <div className="flex justify-between items-center w-[1280px] h-20 pl-4 m-0">
        <a href="/">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQEoq5RV0dHpnQ/company-logo_200_200/0/1648895531552?e=2147483647&v=beta&t=BinH7QrsZdZeQt7sD16G4UCSheIw17jknZ4G9uS9Pv0"
            alt="logo"
            width="30%"
          />
        </a>
      </div>
      <button
        onClick={() => {
          setNavBarOpen(!navBarOpen);
        }}
      >
        <FiMenu className="p-2 m-0 text-5xl text-gray-400 rounded-full hover:text-indigo-500 hover:bg-indigo-500/5" />
      </button>
      <Drawer
        open={navBarOpen}
        setOpen={setNavBarOpen}
        query={query}
        setQuery={setQuery}
        numResults={numResults}
        setNumResults={setNumResults}
      />
    </div>
  );
}
