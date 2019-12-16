import {combineReducers } from 'redux';
import {cart} from './cart/index';
import {products} from './products/index';
import {shops}from './../reducers/shops/index';

const appReducers = combineReducers({
    products: products,
    cart: cart,
    shops: shops,
});
export default appReducers;
