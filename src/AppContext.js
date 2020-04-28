import React from "react";

const AppContext = React.createContext({
  authenticated: true,
  theme: "dark"
});

export default AppContext;
