import React, { Component } from "react";
import { getStories } from "../data/discover-actions";
import ItemList from "./ItemList";

class Discover extends Component {
  state = {
    items: []
  }
  componentWillMount() {
    getStories().then(stories => {
      this.setState({items: stories})
    }).catch(err => console.log(err));
  }
  render() {
    return <ItemList items={this.state.items} />;
  }
}

export default Discover;
