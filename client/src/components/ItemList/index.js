import React from "react";
import ListItem from "./ListItem";
import styled from "styled-components";
import { saveItem } from "../../data/collection-actions";
import { CircularLoader } from "../common";

const ListContainer = styled.section``;

class ItemList extends React.Component {
  state = {
    expandedItem: -1
  };
  componentWillMount() {
    this.props.getItems();
  }
  handleItemChange = (event, idx) => {
    // close of index is open
    if (this.state.expandedItem == idx) {
      return this.setState({ expandedItem: -1 });
    }
    this.setState({ expandedItem: idx });
  };
  handleItemSave = async item => {
    const { title, url } = item;
    const res = await saveItem(title, url);
  };
  renderList = () => {
    const { items, isLoading } = this.props;
    if (isLoading) return <CircularLoader />
    return items.map((item, idx) => (
      <ListItem
        item={item}
        key={item.id}
        handleChange={event => this.handleItemChange(event, idx)}
        expanded={idx === this.state.expandedItem}
        handleSave={() => this.handleItemSave(item)}
      />
    ));
  };
  render() {
    return <ListContainer>{this.renderList()}</ListContainer>;
  }
}

export default ItemList;
