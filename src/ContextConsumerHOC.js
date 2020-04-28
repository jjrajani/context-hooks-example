import React from "react";

const ContextConsumer = (WrappedComponent, Context) => {
  return () => (
    <Context.Consumer>
      {props => {
        return <WrappedComponent context={props} />;
      }}
    </Context.Consumer>
  );
};

export default ContextConsumer;
