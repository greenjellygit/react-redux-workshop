import {AuthenticateActionType} from '../actions/authenticate.action';

const initialState = {
  isAuthenticated: false,
  accessToken: null
};

const AuthenticateReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthenticateActionType.CONNECTION_SUCCESS:
      return Object.assign({}, state, {isAuthenticated: true, accessToken: action.payload.data.access_token});
    case AuthenticateActionType.CONNECTION_FAILURE:
      return Object.assign({}, state, {isAuthenticated: false, accessToken: null});
    case AuthenticateActionType.CONNECTION_STARTED:
    default:
      return state;
  }
};

export default AuthenticateReducer;