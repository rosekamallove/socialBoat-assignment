import { useEffect, useState } from "react";

function App() {
  const numResults = 10;
  const [query, setQuery] = useState("fitness");
  const [out, setOut] = useState({});
  useEffect(() => {
    fetch(
      `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${query}&numResults=${numResults}`,
      {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    ).then((res) => res.json().then((out) => setOut(out)));
  }, [query]);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Social Boat</h1>
      <form>
        <label
          for="exampleFormControlInput1"
          className="form-label inline-block mb-2 text-gray-700"
        >
          Example label
          <input
            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
            type="text"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
            placeholder="Enter your Query"
          />
        </label>
      </form>
      <div className="text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded">
        <pre>{JSON.stringify(out, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
