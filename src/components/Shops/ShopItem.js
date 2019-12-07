import React, { Component } from 'react';
import * as Message from '../../constants/Message';

class ShopItem extends Component {
    render() {
        var { shop } = this.props;

        return (
            <div className="col-lg-3 col-md-3 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <a href="#" alt="#">
                            <img src={shop.image} className="img-fluid" alt={shop.name} />
                        </a>
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <div className="card-body-content">
                            <h4 className="card-title">
                                <strong>
                                    <a href="#" >{shop.name}</a>
                                </strong>
                            </h4>
                            <ul className="rating">
                                <li>
                                    {this.showRatings(shop.rating)}
                                </li>
                            </ul>
                            <p className="card-text">
                                {shop.description}
                            </p>
                        </div>
                        <div className="card-footer">
                            <a href="#">
                                <p class="content-promotion"><i class="fa fa-tags"></i> Giảm hết 20%</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    showRatings(rating) {
        var result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<i key={i} className="fa fa-star"></i>)
        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(<i key={i + j} className="fa fa-star-o"></i>)
        }
        return result;
    }
}

export default ShopItem;
