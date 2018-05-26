import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    this.getData()
  }
  getData = async () => {
    const response = await fetch('http://localhost:5000/');
    console.log(response);
    try {
      const body = await response.json();
      console.log(body);
    } catch(err) {
      console.log(err);
    }
  }
  render() {
    return <div>Hello</div>;
  }
}

export default App;
