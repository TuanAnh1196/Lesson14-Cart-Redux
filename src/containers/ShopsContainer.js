import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Shops from './../components/Shops/Shops';
import ShopItem from './../components/Shops/ShopItem';
class ShopsContainer extends Component {
    render() {
        var { shops } = this.props;
        return (
            <React.Fragment>
                 <Shops>
                {/* props children */}
                {this.showAllShops(shops)} 
                </Shops>
            </React.Fragment>
           
        );
    }

    showAllShops(shops) {
        var result = null;
        if (shops.length > 0) {
            result = shops.map((shop, index) => {
                return <ShopItem 
                    key={index} 
                    shop={shop} 
                    />
            })
        }
        return result;
    }
}


const mapStateToProps = (state) => {
    return {
        shops: state.shops,
    };
};

const mapDispatchToProps = (dispatch, props)=>{
    return {
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopsContainer);
