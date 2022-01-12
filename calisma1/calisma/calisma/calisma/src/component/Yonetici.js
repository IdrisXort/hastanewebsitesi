import React, { Component } from "react";
import DataConsumer from "../context";

 class Yonetici extends Component {
  render() {
    return (

      <DataConsumer>
        {(value) => {
          const {users} = value;

          console.log(value); }}
      </DataConsumer>
      
    );
  }
}
export default Yonetici;
