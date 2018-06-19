import ContentDetail from "./ContentDetail";
import { connect } from "react-redux";
import {setActive} from "../../data/collection-actions-ui";

const mapStateToProps = state => ({
  ...state.collections
});

const mapDispatchToProps = dispatch => ({
  setActive(itemId) {
    dispatch(setActive(itemId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentDetail);
