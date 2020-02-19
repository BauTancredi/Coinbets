import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";
import CardContainer from "./CardContainer";
import StockContainer from "./StockContainer";
import Maintenance from "./Maintenance";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div id="page-warp">
          <Header />
          <Switch>
            <Route path="/crypto" component={CardContainer} />
            <Route path="/stocks" component={StockContainer} />
            <Route path="/currency" component={Maintenance} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
