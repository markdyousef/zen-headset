import { connect } from "react-redux";
import GridList from "./GridList";
import { fetchData } from "../data/collection-actions";

const mapStateToProps = state => ({
  ...state.collections
});

const mapDispatchToProps = dispatch => ({
  getItems() {
    dispatch(fetchData());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridList);
