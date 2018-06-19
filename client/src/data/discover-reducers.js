import constants from "../constants/discover-action-types";

/**
 * Discover Reducer
 */
const initialState = {
  isLoading: false,
  items: [],
  expandedItem: -1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.DISCOVER_REQUEST:
      return { ...state, isLoading: true };
    case constants.DISCOVER_RESPONSE:
      return { ...state, isLoading: false, items: action.data };
    default:
      return state;
  }
};
