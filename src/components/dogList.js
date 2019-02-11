import React, { Component } from "react";
import DeleteDog from './DeleteDog';
import FeedDog from './FeedDog'

class DogList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { dog } = this.props;
    return (
      <div className="DogCards">
        <h3>Dogs Name: {dog.name}</h3>
        <p>Age: {dog.age}</p>
        <p>Weight: {dog.weight}</p>
        <p>Breed: {dog.breed}</p>
        <p>Dogs id: {dog.id}</p>
        <DeleteDog
        deleteDog={this.props.deleteDog}
        Id={dog.id}
        />
        <FeedDog
        feedDog={this.props.feedDog}
        isFed={this.props.isFed}
        />
      </div>
    );
  }
}
export default DogList;
