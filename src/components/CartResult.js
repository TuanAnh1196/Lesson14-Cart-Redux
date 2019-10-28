import React,{Component} from 'react';

class CartResult extends Component {
    render(){
        var {cart} = this.props;
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalAmount(cart)}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                        <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
            
        );
    }
    showTotalAmount = (cart)=>{
        var totalPrice = 0;
        if(cart.length > 0){
            totalPrice = cart.reduce((price,cart,index) => {
                    return price += cart.product.price * cart.quantity;
                }, 0)
        }
        return totalPrice;
    }

}

export default CartResult;
