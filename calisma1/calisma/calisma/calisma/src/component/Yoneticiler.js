import React, { Component } from "react";

class Filmler extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://picsum.photos/200/300"
            className="card-img-top"
            width="150"
            height="150"
          ></img>
          <div className=" card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className=" card-text"> {this.props.surname}</p>
            <p className=" card-text"> {this.props.department} </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Filmler;
