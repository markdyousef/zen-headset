import { connect } from "react-redux";
import ItemList from "./ItemList";
import { fetchStories } from "../data/discover-actions";

const mapStateToProps = state => ({
  ...state.discover
});

const mapDispatchToProps = dispatch => ({
  getItems() {
    dispatch(fetchStories());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
