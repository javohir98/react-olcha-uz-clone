import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const addToCart = (cardProducts) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: cardProducts,
      };
} 

export const deleteFromCart = (cardProducts) => {
  return {
      type: ActionTypes.DELETE_FROM_CART,
      payload: cardProducts,
    };
}

export const historyView = (historyItems) => {
  return {
    type: ActionTypes.HISTORY_VIEW,
    payload: historyItems
  }
}