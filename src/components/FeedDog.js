import React, { Component } from "react";

class FeedDog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFed: false
    };
  }

  feedDog = () => {
    console.log(this.state.isFed);
    this.setState({
      isFed: !this.state.isFed
    });
  };
  render() {
    const {isFed} = this.state
      return (
        <div
          className="FeedDog"
          style={{ backgroundColor: isFed ? "green" : "red" }}
        >
          <button onClick={() => this.feedDog()}>Feed Dog</button>
        </div>
      );
  }
}

export default FeedDog;
