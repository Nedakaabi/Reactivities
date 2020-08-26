import React, { Component } from "react";
import axios from "axios";
import { Header, Icon } from "semantic-ui-react";
//import "./App.css";

class App extends Component {
  state = {
    values: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/Values").then((response) => {
      this.setState({
        values: response.data,
      });
    });
  }
  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="users" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <ul>
          <h1>client app</h1>
          {this.state.values.map((value: any) => (
            <li>{value.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
