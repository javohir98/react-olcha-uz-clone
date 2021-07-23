import { ActionTypes } from "../constants/action-types";
const initialState = {
    products: []
}

const initialCart = {
    cardProducts: []
}

const initialHistory = {
    historyItems: []
}

export const productsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case ActionTypes.SET_PRODUCTS:
        return { ...state, products: payload };
      default:
        return state;
    }
};

export const selectedProductReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state

    }
}

export const addToCartReducer = (state = initialCart, {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
          return { ...state, cardProducts: [...state.cardProducts, payload] };
        case ActionTypes.DELETE_FROM_CART:
            return {...state, cardProducts: [...state.cardProducts.filter(item => item.ids !==payload)]}
        default:
          return state;
      }
}

export const historyViewReducer = (state=initialHistory, {type, payload}) => {
    switch(type) {
        case ActionTypes.HISTORY_VIEW:
            return { ...state, historyItems: [...state.historyItems, payload]};
        default:
            return state;
    }
}