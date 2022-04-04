export const ACTIONS = {
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
};

const defaultState = {
  items: [],
  totalQuantity: 0,
};

const cartReducer = (state = defaultState, action) => {
  if (action.type === ACTIONS.ADD_ITEM) {
    const newItem = action.payload;
    const existingItem = state.items.find((item) => item.id === newItem.id);
    const otherItemsInTheCart = state.items.filter((item) => item.id !== newItem.id);
    
    if (!existingItem) {
      return {
        items: [
          ...otherItemsInTheCart,
          {
            id: newItem.id,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            name: newItem.title,
          },
        ],
        totalQuantity: ++state.totalQuantity,
      };
    } else {
      return {
        items: [
          ...otherItemsInTheCart,
          {
            ...existingItem,
            quantity: ++existingItem.quantity,
            totalPrice: existingItem.totalPrice + newItem.price,
          },
        ],
        totalQuantity: ++state.totalQuantity,
      };
    }
  }
  if (action.type === ACTIONS.REMOVE_ITEM) {
    const id = action.payload;
    const existingItem = state.items.find((item) => item.id === id);
    const otherItemsInTheCart = state.items.filter((item) => item.id !== id);

    console.log("state total quantity", state.totalQuantity);
    console.log("existing item", existingItem);
    
    if (existingItem.quantity === 1) {
      const filteredItems = state.items.filter((item) => item.id !== id);
      return {
        items: [...filteredItems],
        totalQuantity: --state.totalQuantity,
      };
    } else {
      return {
        items: [
          ...otherItemsInTheCart,
          {
            ...existingItem,
            quantity: --existingItem.quantity,
            totalPrice: existingItem.totalPrice - existingItem.price,
          },
        ],
        totalQuantity: --state.totalQuantity,
      };
    }
  }
  return state;
};

export default cartReducer;
