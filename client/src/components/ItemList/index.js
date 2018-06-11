import React from "react";
import Chip from "@material-ui/core/Chip";
import ListItem from "./ListItem";

/**
 * ItemList
 */
class ItemList extends React.Component {
  state = {
    expandedItem: -1
  };
  handleItemChange = (event, idx) => {
    // close of index is open
    if (this.state.expandedItem == idx) {
      return this.setState({ expandedItem: -1 });
    }
    this.setState({ expandedItem: idx });
  };
  renderCategories = () => {
    const categories = ["frontend", "deeplearning", "backend"];
    return categories.map((category, idx) => (
      <Chip key={category + idx} label={category} />
    ));
  };
  renderList = () => {
    const { items } = this.props;
    return items.map((item, idx) => (
      <ListItem
        item={item}
        key={item.id}
        handleChange={event => this.handleItemChange(event, idx)}
        expanded={idx === this.state.expandedItem}
        // categories={this.renderCategories()}
      />
    ));
  };
  render() {
    return <div>{this.renderList()}</div>;
  }
}

export default ItemList;
