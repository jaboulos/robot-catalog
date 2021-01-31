import React, { Component } from "react";
import { CardList } from "./components/CardList/CardList";
import "./App.css";

// class components have access to lifecycle methods
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    // make call to endpt
    fetch("https://jsonplaceholder.typicode.com/users")
      // take response turn to json format
      .then((res) => res.json())
      // update the state with the response data
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    console.log(this.state.robots);
    return (
      <div className="App">
        <CardList robots={this.state.robots}></CardList>
      </div>
    );
  }
}

export default App;
