import React from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import CardContainer from "./CardContainer";
import ButtonRefresh from "./ButtonRefresh";
import StockContainer from "./StockContainer";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div id="page-warp">
        <Header />
        {/* <StockContainer /> */}
        <CardContainer />
        <ButtonRefresh />
      </div>
    </div>
  );
}

export default App;
