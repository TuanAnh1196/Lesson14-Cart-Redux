import { shopListReducer } from "./shop.list.reducer"
import { combineReducers } from "redux"

export default combineReducers({
    shopList: shopListReducer
});