import { SET_ACTIVE_USER_ID } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_USER_ID:
      return action.payload;
    default:
      return state;
  }
};
