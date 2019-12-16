import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShopDetail from './../components/ShopDetail/ShopDetail';


class ShopDetailContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <ShopDetail />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch, props)=>{
    return {
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopDetailContainer);
