import constants from "../constants/discover-action-types";

export const initialItemState = {
  isLoading: false,
  isSaved: false,
  message: null
};

export const itemReducer = (state = initialItemState, action) => {
  switch (action.type) {
    case constants.ITEM.REQUEST_SAVE:
      return { ...state, isLoading: true };
    case constants.ITEM.RESPONSE_SAVE:
      return { ...state, isLoading: false, isSaved: true, message: "Saved!" };
    default:
      return state;
  }
};

/**
 * Discover Reducer
 */
const initialState = {
  isLoading: false,
  items: [],
  activeItem: initialItemState,
  expandedItem: null,
  message: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUEST:
      return { ...state, isLoading: true };
    case constants.RESPONSE:
      return { ...state, isLoading: false, items: action.data };
    case constants.ITEM.REQUEST_SAVE:
      return { ...state, activeItem: itemReducer(state.activeItem, action) };
    case constants.ITEM.RESPONSE_SAVE:
      return { ...state, activeItem: itemReducer(state.activeItem, action) };
    case constants.REMOVE_ITEM:
      return {
        ...state,
        expandedItem: null,
        items: state.items.filter(item => item.id != action.id)
      };
    case constants.EXPAND_ITEM:
      return {
        ...state,
        expandedItem: (state.expandedItem === action.id) ? null : action.id
      };
    default:
      return state;
  }
};
