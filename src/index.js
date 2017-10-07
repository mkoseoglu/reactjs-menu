import React from "react";
import { render } from "react-dom";
import App from "./components/App";

import "./index.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicter from "./components/StorePicter";

import "bootstrap/dist/css/bootstrap.min.css";

const Root = ( ) => {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StorePicter} />
        <Route path="/store/:storeId" component={App} />
        <Route
          component={() => {
            console.log("RENDER 404");
            return null;
          }}
        />
      </Switch>
    </BrowserRouter>
   );
};

render(<Root />, document.querySelector("#root"));
