import React from "react";
import "./App.less";
import Header from "./components/Header";
import Map from "./components/Map";
import config from "./config/model.json";

function App() {
  return (
    <div className="App">
      <Header {...config.pek.headerprops} />
      <Map {...config.pek.mapprops} />
    </div>
  );
}

export default App;
