import {UiActionType} from "../actions/ui.action";

const initialState = {
  isRequestInProgress: false
};

const UiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UiActionType.REQUEST_STARTED:
    case UiActionType.REQUEST_FINISHED:
      return Object.assign({}, state, {isRequestInProgress: action.isRequestInProgress});
    default:
      return state;
  }
};

export default UiReducer;