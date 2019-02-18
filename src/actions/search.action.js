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

export const addToList = (item) => ({
  type: SearchActionType.ADD_TO_LIST,
  item: item
});

export const removeFromList = (item) => ({
  type: SearchActionType.REMOVE_FROM_LIST,
  item: item
});

export const SearchActionType = {
  FIND_ITEMS_STARTED: 'FIND_ITEMS_STARTED',
  FIND_ITEMS_SUCCESS: 'FIND_ITEMS_SUCCESS',
  CLEAR_ITEMS: 'CLEAR_ITEMS',
  ADD_TO_LIST: 'ADD_TO_LIST',
  REMOVE_FROM_LIST: 'REMOVE_FROM_LIST',
};