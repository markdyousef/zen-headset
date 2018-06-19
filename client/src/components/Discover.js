import { connect } from "react-redux";
import ItemList from "./ItemList";
import {
  fetchStories,
  saveItem,
  removeItem,
  expandItem
} from "../data/discover-actions";

const mapStateToProps = state => ({
  ...state.discover
});

const mapDispatchToProps = dispatch => ({
  getItems() {
    dispatch(fetchStories());
  },
  saveItem: async item => {
    await dispatch(saveItem(item));
    dispatch(removeItem(item.id));
  },
  closeItem(id) {
    dispatch(removeItem(id));
  },
  expandItem(id) {
    dispatch(expandItem(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
