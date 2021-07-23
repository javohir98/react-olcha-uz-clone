import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer, addToCartReducer, historyViewReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductReducer,
    cartItems: addToCartReducer,
    history: historyViewReducer
})

export default reducers