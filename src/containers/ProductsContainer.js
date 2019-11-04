import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';
import Products from '../components/Products';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage, actUpdateProductInCart } from './../actions/index';

class ProductsContainner extends Component {

  handleClickAddToCart = (product) => {
    const productOnCart = this.props.cart.find(item => item.product.id === product.id);
    if (productOnCart) {
      // update cart
      this.props.updateToCart(product, productOnCart.quantity + 1);
    } else {
      // add to cart
      this.props.onAddToCart(product);
    }
  }

  showProducts(products) {
    var result = null;
    var { onChangeMessage } = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product
          key={index}
          product={product}
          onAddToCart={this.handleClickAddToCart}
          onChangeMessage={onChangeMessage}
        />
      })
    }
    return result;
  }

  render() {
    var { products } = this.props;
    return (
      <Products>
        {/* props children */}
        {this.showProducts(products)}
      </Products>
    );
  }
}

ProductsContainner.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateToCart: (product, quantity) => {
      dispatch(actUpdateProductInCart(product, quantity));
    },
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainner);
