import { CgClose } from "react-icons/cg";

export default function Drawer({
  open,
  setOpen,
  query,
  setQuery,
  numResults,
  setNumResults,
}) {
  return (
    <div>
      <div
        style={{ zIndex: 20 }}
        className={"h-screen w-72 z-20 fixed right-0 top-0 flex flex-col p-4 py-2 text-xl shadow-2xl font-medium transition duration-300 bg-white".concat(
          open ? " translate-x-0" : " translate-x-72"
        )}
      >
        <div className={"flex justify-end"}>
          <button
            onClick={() => {
              setOpen(false);
            }}
          >
            <CgClose className="p-2 my-4 mx-2 text-5xl text-gray-400 rounded-full hover:text-red-500 hover:bg-red-500/5" />
          </button>
        </div>
        <div>
          <form className="w-full max-w-lg mt-8">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
      </div>
      <div
        onClick={() => {
          setOpen(false);
        }}
        className={"h-screen w-screen z-10  bg-gradient-to-r from-black/5 to-black/30 fixed right-0 top-0 transition duration-300 ".concat(
          open ? "translate-x-0" : "translate-x-full"
        )}
      />
    </div>
  );
}
