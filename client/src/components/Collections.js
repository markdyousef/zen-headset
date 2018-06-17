import React, { Component } from "react";
import { fetchData } from "../data/collect-actions";

export default class extends Component {
  componentDidMount() {
    fetchData()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  render() {
    return <div>Collections</div>;
  }
}
