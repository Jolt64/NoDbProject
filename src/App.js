import React, { Component } from "react";
import DogList from "./components/dogList";
import axios from "axios";
import "./App.css";
import EditBox from "./components/editBox"

class App extends Component {
  constructor() {
    super();

    this.state = {
      dogs: [],
      name: '',
      age: '',
      weight: '',
      breed: ''

    };
    this.editDog=this.editDog.bind(this)
    console.log(this.state);
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
      console.log(res.data);
      this.setState({
        dogs: res.data
      });
    });
  }

  addDog(name, age, weight, breed) {
    console.log(this.state)
    axios.post('/api/dog', {name, age, weight, breed}).then( res => {
      this.setState({
        dogs: res.data,
        name:'',
        age: 0,
        weight: 0,
        breed:''
      });
    });
  }

  editDog(name, age, weight, breed, id) {
    axios.put(`/api/dog/${id}`, {name, age, weight, breed}).then(res => {this.setState({
      dogs: res.data,

    })

    })
  }

  render() {
    const {name,age,weight,breed} = this.state;
    const mapedDogList = this.state.dogs.map(dog => {
      return <DogList 
      key={dog.id} 
      dog={dog} 
      />;
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
      <button onClick={() => this.addDog(name, age, weight,breed) }>Add Dog</button>

      
      </div>

      <EditBox
      editDog={this.editDog}
      />

      </div>
      <h3 className="mapedDogList">{mapedDogList}</h3>
      </div>
    );
  }
}


export default App;
