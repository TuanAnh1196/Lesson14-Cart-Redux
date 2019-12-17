import React, { Component } from 'react';
import lodash from "lodash";
import { getShopList } from "../actions/shop.list.action"
import Api from "../api/api.shop";
import { pagination } from "../constants/app.constant";
import { connect } from "react-redux";
import Pagination from "../components/pagination/Pagination";

class ShopListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            params: {
                skip: pagination.initialPage,
                take: pagination.defaultTake
            },
            query: ""
        };
    }

    getShopList = () => {
        let params = Object.assign({}, this.state.params, {
            query: this.state.query
        });
        this.props.getShopList(params);
    };

    componentDidMount() {
        this.getShopList();
    }

    handlePageClick = e => {
        this.setState(
            {
                params: {
                    ...this.state.params,
                    skip: e.selected + 1
                }
            },
            () => this.getShopList()
        );
    };

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
    render() {
        const { shopList } = this.props.shopList;
        const { sources, pageIndex, totalPages } = shopList;
        const hasResults = shopList.sources && shopList.sources.length > 0;
        console.log("shop list" , shopList)
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Shop</h1>
                <div className="row">
                    {hasResults && sources.map((item, i) => {
                        console.log("item : ", item)
                    return (
                    <div className="col-lg-3 col-md-3 mb-r">
                        <div className="card text-center card-cascade narrower">
                            <div className="view overlay hm-white-slight z-depth-1">
                                <a href="#" alt="#">
                                    <img src={item.avatarUrl} className="img-fluid" alt={item.name} />
                                </a>
                                <a>
                                    <div className="mask waves-light waves-effect waves-light"></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <div className="card-body-content">
                                    <h4 className="card-title">
                                        <strong>
                                            <a href="#" >"{item.name}"</a>
                                        </strong>
                                    </h4>
                                    <ul className="rating">
                                        <li>
                                            {this.showRatings(5)}
                                        </li>
                                    </ul>
                                    <p className="card-text">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <a href="#">
                                        <p className="content-promotion"><i class="fa fa-tags"></i> Giảm hết 20%</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
                    })}
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                {hasResults && totalPages > 1 &&
                        <Pagination
                            initialPage={0}
                            totalPages={totalPages}
                            forcePage={pageIndex - 1}
                            pageRangeDisplayed={2}
                            onPageChange={this.handlePageClick}
                        />
                    }
                    </div>
                    <div className="col"></div>
                </div>
            </section>
        );
    }
}
export default connect(
    state => ({
        shopList: state.shopList
    }),
    {
        getShopList
    }
)(ShopListPage);
