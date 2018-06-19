import constants from "../constants/collection-action-types";

const item = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/**
 * Collections Reducer
 */
const initialState = {
  isLoading: false,
  items: [],
  activeItem: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.COLLECTIONS_REQUEST:
      return { ...state, isLoading: true };
    case constants.COLLECTIONS_RESPONSE:
      return { ...state, isLoading: false, items: action.data };
    case constants.COLLECTIONS_SET_ACTIVE: {
      const itemState = state.items.find(obj => obj.item_id == action.itemId);
      return { ...state, activeItem: item(itemState, action) };
    }
    default:
      return state;
  }
};
