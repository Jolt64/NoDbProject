import React, { Component } from "react";

export default class EditBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameUd: "",
      ageUd: "",
      weightUd: "",
      breedUd: "",
      idUd: ""
    };
  }

  
  handleNameUd(value) {
    this.setState({
      nameUd: value
    });
  }
  handleAgeUd(value) {
    this.setState({
      ageUd: value
    });
  }
  handleWeightUd(value) {
    this.setState({
      weightUd: value
    });
  }
  handleBreedUd(value) {
    this.setState({
      breedUd: value
    });
  }
handleIDUd(value) {
  this.setState({
    idUd: value
  });
}

  render() {
    const { nameUd, ageUd, weightUd, breedUd, idUd } = this.state;
    return (
      <div className="EditBox">
        <h3>Edit Dog</h3>
        <input
          type="text"
          placeholder="Dogs Name"
          onChange={e => this.handleNameUd(e.target.value)}
          value={this.state.nameUd}
        />
        <input
          type="text"
          placeholder="Age"
          onChange={e => this.handleAgeUd(e.target.value)}
          value={this.state.ageUd}
        />
        <input
          type="text"
          placeholder="Weight"
          onChange={e => this.handleWeightUd(e.target.value)}
          value={this.state.weightUd}
        />
        <input
          type="text"
          placeholder="Breed"
          onChange={e => this.handleBreedUd(e.target.value)}
          value={this.state.BreedUd}
        />
        <input
          type="text"
          placeholder="Dog Id"
          onChange={e => this.handleIDUd(e.target.value)}
          value={this.state.idUd}
        />
        <button
          onClick={() => this.props.editDog(nameUd, ageUd, weightUd, breedUd, idUd)}
        >
          Edit Dog
        </button>
      </div>
    );
  }
}
