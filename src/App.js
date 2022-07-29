import React, { Component } from "react";
import { CardList } from "./components/CardList/CardList";
import { SearchBox } from "./components/SearchBox/SearchBox";

import "./App.css";

// class components have access to lifecycle methods
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { robots, searchField } = this.state; // pull properties off of object and put them in variables within the bracket notation
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Robot Catalog</h1>
        <SearchBox
          className="Search"
          placeholder="search robots"
          handleChange={this.handleChange}
        />
        <CardList robots={filteredRobots}></CardList>
      </div>
    );
  }
}

export default App;
