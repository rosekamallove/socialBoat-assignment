import { useEffect, useState } from "react";
import Header from "./components/header";

function App() {
  const [numResults, setNumResults] = useState(10);
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
  }, [query, numResults]);

  return (
    <>
      <Header
        numResults={numResults}
        setNumResults={setNumResults}
        query={query}
        setQuery={setQuery}
        className="z-50"
      />
      <div className="text-gray-700 -z-10  bg-white bg-clip-padding border border-solid border-gray-300 rounded m-10">
        <pre className="-z-20">{JSON.stringify(out, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
