import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer, addToCartReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductReducer,
    cartItems: addToCartReducer
})

export default reducers