import React, { Component } from "react";

class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    this.getData().then(data => {
      this.setState({ data });
    });
  }
  getData = async () => {
    const response = await fetch("/api/");
    try {
      const body = await response.json();
      const { data } = body;
      return data;
    } catch (err) {}
  };
  render() {
    console.log(this.state);
    return <div>Hello</div>;
  }
}

export default App;
