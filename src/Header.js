import React from "react";
import "./App.css";
import ContextConsumer from "./ContextConsumerHOC";
import AppContext from "./AppContext";

const Header = ({ context }) => {
  // console.log("context", context);
  return (
    <div>
      <p>Authenticated: {context.authenticated ? "true" : "false"}</p>
      <p>Current Theme: {context.theme}</p>
      <button
        onClick={context.setAuthentication.bind(this, !context.authenticated)}
      >
        {context.authenticated ? "Sign Out" : "Sign In"}
      </button>
      <button onClick={() => context.setTheme("dark")}>Use Dark Theme</button>
      <button onClick={context.setTheme.bind(this, "light")}>
        Use Light Theme
      </button>
    </div>
  );
};

export default ContextConsumer(Header, AppContext);
