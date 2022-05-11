import { useEffect, useState } from "react";
import Header from "./components/header";
import RenderCards from "./components/render-cards";

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
        className="z-50 mb-10"
      />
      <RenderCards cards={out.results} />
    </>
  );
}

export default App;
