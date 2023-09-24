import "./App.css";
import { useState } from "react";
import { Route } from "react-router-dom";
import { MainView } from "./components/MainView";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={MainView} />
    </div>
  );
};

export default App;
