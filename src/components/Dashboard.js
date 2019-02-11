import React, { Component } from "react";
import DogList from "./dogList";
import axios from "axios";
import EditBox from "./editBox";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      dogs: [],
      name: "",
      age: "",
      weight: "",
      breed: ""
    };
    this.editDog = this.editDog.bind(this);
  }

  handleName(value) {
    this.setState({
      name: value
    });
  }
  handleAge(value) {
    this.setState({
      age: value
    });
  }
  handleWeight(value) {
    this.setState({
      weight: value
    });
  }
  handleBreed(value) {
    this.setState({
      breed: value
    });
  }

  componentDidMount() {
    axios.get("/api/dogs").then(res => {
      this.setState({
        dogs: res.data
      });
    });
  }

  addDog(name, age, weight, breed) {
    axios.post("/api/dog", { name, age, weight, breed }).then(res => {
      this.setState({
        dogs: res.data,
        name: "",
        age: 0,
        weight: 0,
        breed: ""
      });
    });
  }

  editDog(name, age, weight, breed, id) {
    axios.put(`/api/dog/${id}`, { name, age, weight, breed }).then(res => {
      this.setState({
        dogs: res.data
      });
    });
  }

  deleteDog = id => {
    axios.delete(`/api/dog/${id}`).then(res => {
      this.setState({
        dogs: res.data
      });
    });
    alert("Dog is gone");
  };



  render() {
    const { name, age, weight, breed, isFed } = this.state;
    const mappedDogList = this.state.dogs.map(dog => {
      return <DogList key={dog.id} dog={dog} deleteDog={this.deleteDog} feedDog={this.feedDog} isFed={isFed} />;
    });

    return (
      <div className="App">
        <div>
          <div className="addDogBox">
            <h1>Add Dog</h1>
            <input
              type="text"
              placeholder="Dogs Name"
              onChange={e => this.handleName(e.target.value)}
              value={this.state.name}
            />
            <input
              type="text"
              placeholder="Age"
              onChange={e => this.handleAge(e.target.value)}
              value={this.state.age}
            />
            <input
              type="text"
              placeholder="Dog Weight"
              onChange={e => this.handleWeight(e.target.value)}
              value={this.state.weight}
            />
            <input
              type="text"
              placeholder="Breed"
              onChange={e => this.handleBreed(e.target.value)}
              value={this.state.breed}
            />
            <button onClick={() => this.addDog(name, age, weight, breed)}>
              Add Dog
            </button>
          </div>

          <EditBox editDog={this.editDog} />
        </div>
        <h3 className="mappedDogList">{mappedDogList}</h3>
      </div>
    );
  }
}

export default Dashboard;
