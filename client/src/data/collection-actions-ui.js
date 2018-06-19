import constants from "../constants/collection-action-types";

export const setActive = itemId => ({
  type: constants.COLLECTIONS_SET_ACTIVE,
  itemId
});
