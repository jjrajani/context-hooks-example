import React, { useState } from "react";
import "./App.css";
import AppContext from "./AppContext";
import Header from "./Header";

function App() {
  const [authenticated, setAuthentication] = useState(true);
  const [theme, setTheme] = useState("dark");

  return (
    <AppContext.Provider
      value={{
        authenticated,
        setAuthentication,
        theme,
        setTheme
      }}
    >
      <div className={`app ${theme}`}>
        <Header />
      </div>
    </AppContext.Provider>
  );
}

export default App;
