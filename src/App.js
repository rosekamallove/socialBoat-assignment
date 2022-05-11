import { useEffect, useState } from "react";
import Header from "./components/header";
import RenderCards from "./components/render-cards";
import AppContext from "./context/appContext";

function App() {
  const [numResults, setNumResults] = useState(10);
  const [query, setQuery] = useState("fitness");
  const [out, setOut] = useState({});

  const value = { numResults, setNumResults, query, setQuery };

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
    <AppContext.Provider value={value}>
      <Header className="z-50 mb-10" />
      <RenderCards cards={out.results} />
    </AppContext.Provider>
  );
}

export default App;
