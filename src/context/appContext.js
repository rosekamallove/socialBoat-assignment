import React from "react";

const AppContext = React.createContext({
  query: "",
  setQuery: () => {},
  numResults: 0,
  setNumResults: () => {},
});

export default AppContext;
