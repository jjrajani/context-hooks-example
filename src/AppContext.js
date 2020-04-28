import React from "react";

const AppContext = React.createContext({
  authenticated: true,
  lang: "en",
  theme: "dark"
});

export default AppContext;
