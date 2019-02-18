import {SearchActionType} from "../actions/search.action";

const initialState = {
  items: [],
  selectedItems: [],
  totalCount: 0
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SearchActionType.FIND_ITEMS_SUCCESS:
      return Object.assign({}, state, {items: [...action.payload.data.items.promoted, ...action.payload.data.items.regular], totalCount: action.payload.data.searchMeta.totalCount});
    case SearchActionType.ADD_TO_LIST:
      return {...state, selectedItems: [action.item, ...state.selectedItems]};
    case SearchActionType.REMOVE_FROM_LIST:
      const selectedItemIndex = state.selectedItems.findIndex(e => e.id === action.item.id);
      const items = [...state.selectedItems];
      items.splice(selectedItemIndex, 1);
      return {...state, selectedItems: items};
    case SearchActionType.CLEAR_ITEMS:
      return {...state, items: [], totalCount: 0};
    case SearchActionType.FIND_ITEMS_STARTED:
    default:
      return state;
  }
};

export default SearchReducer;