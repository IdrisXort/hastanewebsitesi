import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Yonetici from "./component/Yonetici"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
     <Yonetici/>

      </div>
    );
  }
}
export default App;
