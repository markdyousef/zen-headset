import React from "react";
import ListItem from "./ListItem";
import styled from "styled-components";
import { CircularLoader } from "../common";
import { Snackbar } from "@material-ui/core";

const ListContainer = styled.section`
  margin-top: 2px;
`;

class ItemList extends React.Component {
  state = {
    showMessage: true
  }
  componentWillMount() {
    this.props.getItems();
  }
  renderList = () => {
    const { items, isLoading, activeItem, saveItem, expandItem } = this.props;
    if (isLoading) return <CircularLoader />;
    return items.map(item => (
      <ListItem
        item={item}
        key={item.id}
        handleChange={() => expandItem(item.id)}
        expanded={item.id === this.props.expandedItem}
        handleSave={() => saveItem(item)}
        isLoading={
          item.id == this.props.expandedItem ? activeItem.isLoading : false
        }
      />
    ));
  };
  renderMessages = () => {
    const { activeItem } = this.props;

    // item is saved!
    if (!activeItem.isLoading && activeItem.isSaved) {
      // setTimeout(() => ({ showMessage: false }), 1000);
      return (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={!!activeItem.message&&this.state.showMessage}
          message={<span>{activeItem.message}</span>}
          onClose={() => this.setState({showMessage: false})}
          autoHideDuration={1000}
        />
      );
    }
  };
  render() {
    return (
      <ListContainer>
        {this.renderList()}
        {this.renderMessages()}
      </ListContainer>
    );
  }
}

export default ItemList;
