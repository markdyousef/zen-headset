import constants from "../constants/discover-action-types";
import {request, response} from "./actions";
/**
 * Retrieve
 */

// get top stories
export const fetchStories = (type = "topstories", count = 10) => async dispatch => {

  dispatch(request(constants.DISCOVER_REQUEST))
  const res = await fetch("/api/discover");
  const stories = await res.json();
  dispatch(response(constants.DISCOVER_RESPONSE, stories.data))
};