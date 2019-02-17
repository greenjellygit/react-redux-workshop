import {combineReducers} from "redux";
import AuthenticateReducer from "./authenticate.reducer";
import SearchReducer from "./search.reducer";
import UiReducer from "./ui.reducer";

export default combineReducers({
  authenticate: AuthenticateReducer,
  search: SearchReducer,
  ui: UiReducer
})