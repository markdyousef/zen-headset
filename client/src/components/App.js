import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    this.getData()
  }
  getData = async () => {
    const response = await fetch('/api/');
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
