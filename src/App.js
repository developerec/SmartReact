import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Launcher from "./components/Launcher";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      Brian2
      <BrowserRouter>
            <Route path="/app" component={Home} />
            <Route path="/" component={Launcher} exact />
        </BrowserRouter>    </div>
  );
}

export default App;
