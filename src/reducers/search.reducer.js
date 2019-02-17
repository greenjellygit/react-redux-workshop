import {SearchActionType} from "../actions/search.action";

const initialState = {
  items: [],
  favItems: [],
  totalCount: 0
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SearchActionType.FIND_ITEMS_SUCCESS:
      return Object.assign({}, state, {items: [...action.payload.data.items.promoted, ...action.payload.data.items.regular], totalCount: action.payload.data.searchMeta.totalCount});
    case SearchActionType.ADD_TO_FAV:
      return {...state, favItems: [action.item, ...state.favItems]};
    case SearchActionType.REMOVE_FROM_FAV:
      const selectedItemIndex = state.favItems.findIndex(e => e.id === action.item.id);
      const items = [...state.favItems];
      items.splice(selectedItemIndex, 1);
      return {...state, favItems: items};
    case SearchActionType.CLEAR_ITEMS:
      return {...state, items: [], totalCount: 0};
    case SearchActionType.FIND_ITEMS_STARTED:
    default:
      return state;
  }
};

export default SearchReducer;