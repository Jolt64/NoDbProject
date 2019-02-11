import React, { Component } from "react";

class DogList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dog } = this.props;
    return (
      <div>
        <h3>Dogs Name: {dog.name}</h3>
        <p>Age: {dog.age}</p>
        <p>Weight: {dog.weight}</p>
        <p>Breed: {dog.breed}</p>
        <p>Dogs id: {dog.id}</p>
      </div>
    );
  }
}
export default DogList;
