import React from "react";
import "./App.less";
import Header from "./components/Header";
import Map from "./components/Map";
import AirlineList from "./components/AirlineList";
import config from "./config/model.json";

function App() {
  return (
    <div className="App">
      <Header {...config.pek.headerprops} />
      <Map {...config.pek.mapprops} />
      <AirlineList {...config.pek.airlineprops} />
    </div>
  );
}

export default App;
