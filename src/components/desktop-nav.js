export default function DesktopNav({
  query,
  setQuery,
  numResults,
  setNumResults,
}) {
  return (
    <div>
      <nav className="z-40 bg-clip-padding backdrop-filter backdrop-blur-md border border-t-0 border-x-0 px-2 py-1 flex justify-center items-center shadow w-full h-20 border-indigo-200  bg-slate-100 bg-opacity-60 fixed top-0">
        <div className="flex justify-between items-center w-[1280px] h-20 pl-4">
          <a href="/">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQEoq5RV0dHpnQ/company-logo_200_200/0/1648895531552?e=2147483647&v=beta&t=BinH7QrsZdZeQt7sD16G4UCSheIw17jknZ4G9uS9Pv0"
              alt="logo"
              width="40%"
            />
          </a>
        </div>
        <div>
          <form className="w-full max-w-lg mt-8">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-slate-300 text-gray-700 border border-slate-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Enter you Query"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  value={query}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  className="appearance-none block w-full bg-slate-300 text-gray-700 border border-slate-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  placeholder="Number of Queries"
                  onChange={(e) => {
                    setNumResults(e.target.value);
                  }}
                  value={numResults}
                />
              </div>
            </div>
          </form>
        </div>
        <img
          className="m-5 rounded-full"
          width="4%"
          src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
          alt="profile"
        />
      </nav>
    </div>
  );
}
