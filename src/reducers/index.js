import {combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import message from './message';
import shops from './../components/Shops/reducers';

const appReducers = combineReducers({
    products: products,
    cart: cart,
    message: message,
    shops: shops
});
export default appReducers;
