export const findItems = (itemName) => ({
  types: [SearchActionType.FIND_ITEMS_STARTED, SearchActionType.FIND_ITEMS_SUCCESS],
  payload: {
    client: "allegroApi",
    request: {
      method: "get",
      url: "/offers/listing",
      params: {
        phrase: itemName
      }
    }
  }
});

export const clearItems = () => ({
  type: SearchActionType.CLEAR_ITEMS
});

export const addToFav = (item) => ({
  type: SearchActionType.ADD_TO_FAV,
  item: item
});

export const removeFromFav = (item) => ({
  type: SearchActionType.REMOVE_FROM_FAV,
  item: item
});

export const SearchActionType = {
  FIND_ITEMS_STARTED: 'FIND_ITEMS_STARTED',
  FIND_ITEMS_SUCCESS: 'FIND_ITEMS_SUCCESS',
  CLEAR_ITEMS: 'CLEAR_ITEMS',
  ADD_TO_FAV: 'ADD_TO_FAV',
  REMOVE_FROM_FAV: 'REMOVE_FROM_FAV',
};