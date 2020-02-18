import React from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Card from "./Card";
import CardContainer from "./CardContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <CardContainer />
      <Sidebar />
    </div>
  );
}

export default App;
