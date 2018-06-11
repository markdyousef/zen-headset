import React from "react";
import Chip from "@material-ui/core/Chip";
import ListItem from "./ListItem";
import ContentDetail from "../ContentDetail";

/**
 * ItemList
 */
class ItemList extends React.Component {
  state = {
    expandedItem: -1,
    showDetail: false,
    item: null
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
  handleItemDetail = (show = false, item) => {
    if (!show) {
      return this.setState({ showDetail: show });
    }
    this.setState({ item, showDetail: true });
  };
  renderList = () => {
    const { items } = this.props;
    return items.map((item, idx) => (
      <ListItem
        item={item}
        key={item.id}
        handleChange={event => this.handleItemChange(event, idx)}
        openDetail={() => this.handleItemDetail(true, item)}
        expanded={idx === this.state.expandedItem}
        // categories={this.renderCategories()}
      />
    ));
  };
  render() {
    return (
      <div>
        {this.renderList()}
        {this.state.showDetail && (
          <ContentDetail
            open={this.state.showDetail}
            handleChange={this.handleItemDetail}
            item={this.state.item}
          />
        )}
      </div>
    );
  }
}

export default ItemList;
