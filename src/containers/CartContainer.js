import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from '../actions';

class CartContainer extends Component {
  componentDidMount() {
    console.log('did mount')
  }

  componentDidUpdate(prevProps) {
    console.log('prevProps', prevProps.cart[0].quantity);
    console.log('this.props', this.props.cart[0].quantity);
  }

  showCartItem = (cart) => {
    var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
    var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteProductInCart={onDeleteProductInCart}
            onChangeMessage={onChangeMessage}
            onUpdateProductInCart={onUpdateProductInCart}
          />
        );
      });
    }
    return result;
  }
  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />
    }
    return result;

  }


  render() {
    var { 
      cart, 
      onDeleteProductInCart, 
      onChangeMessage, 
      onUpdateProductInCart 
    } = this.props;

    return (
      <Cart>
        {/* {this.showCartItem(cart)} */}
        {
          cart.map((item, index) => {
            return (
              <CartItem
                key={index}
                item={item}
                index={index}
                onDeleteProductInCart={onDeleteProductInCart}
                onChangeMessage={onChangeMessage}
                onUpdateProductInCart={onUpdateProductInCart}
              />
            )
          })
        }
        {this.showTotalAmount(cart)}
      </Cart>
    );

  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.object.isRequired,
    quantity: PropTypes.number.isRequired,
  })
  ),
  onDeleteProductInCart: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onUpdateProductInCart: PropTypes.func.isRequired
}

CartContainer.defaultProps = {
  cart: []
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actDeleteProductInCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(actUpdateProductInCart(product, quantity));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
