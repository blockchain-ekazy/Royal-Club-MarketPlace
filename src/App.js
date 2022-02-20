import React from "react";

import { Component } from "react";

import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

import Home from "./Components/Home";
// import Stacking from "./Components/Stacking";
import Stacking from "./Components/Stacking";

function App() {
  return (
   <>
   <BrowserRouter>
     <Switch>
     <Route exact path="/">
        <Home />
      </Route>
       <Route exact path="/Stacking">
         <Stacking/>
       </Route>
     </Switch>
   </BrowserRouter>
   </>
  );
}

export default App;
