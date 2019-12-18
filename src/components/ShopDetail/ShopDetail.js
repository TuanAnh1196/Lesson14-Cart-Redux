import React, { Component } from 'react';
import CommentItem from "../Common/comment.item"
import CommentInput from "../Common/comment.input"

class ShopDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            commentItem: {}
        }
    }
    render() {
        return (
            <div className="now-detail-restaurant clearfix">
                
                <div className="container">
                    
                    <div className="row">
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 images-shop">
                            <img src="https://images.foody.vn/res/g77/768436/prof/s640x400/foody-upload-api-foody-mobile-17-190129164157.jpg" class="img-responsive" alt="Image" />
                        </div>
                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 detail-restaurant-info">
                            <div className="info-content">
                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a className="breadcrumb-link" id="color-a">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a className="breadcrumb-link" id="color-a">Đà nẵng</a>
                                        </li>
                                    </ol>
                                </nav>
                                <div className="kind-restaurant">
                                    <p>CAFÉ/DESSERT</p>
                                </div>
                                <div classNam="name-restaurant">
                                    <p><strong>Chill Tea - Thống Nhất</strong></p>
                                </div>
                                <div className="address-restaurant">
                                    <p>63 Thống Nhất, P. Bình Thọ, Thủ Đức, TP. HCM</p>
                                </div>
                                <div className="rating">
                                    <div className="star">
                                        <span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <span className="number-rating">50+</span>
                                        <span>lượt đánh giá từ now </span>
                                    </div>
                                </div>
                                <div className="status-restaurant">
                                    <div className="opentime-status">
                                        <span class="stt online" title="Mở cửa">
                                            <i className="fa fa-circle"></i>
                                             Mở cửa 
                                        </span>
                                    </div>
                                </div>
                                <div class="cost-restaurant">
                                    <i class="fa fa-usd"></i>
                                    21,000 - 48,000
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>

                    <div className="container restaurant">
                        
                        <div className="row">
                            <div className="col-12 pd-lr0">
                                <div className="col-9 pd-lr0">
                                    <div class="menu-restaurant-tab">
                                        <div class="item active">Thực đơn</div>
                                    </div>
                                    <div className="menu-restaurant-content-tab">
                                        <div className="menu-restaurant-category pd-lr0">
                                            <div className="list-category ">
                                                <div class="item">
                                                    <a id="705668" title="Arabica coffee" class="item-link active" href="#title2">Arabica coffee</a>
                                                </div>
                                                <div class="item">
                                                    <a id="705668" title="Arabica coffee" class="item-link active">Arabica coffee</a>
                                                </div>
                                                <div class="item">
                                                    <a id="705668" title="Arabica coffee" class="item-link active" href="#title2">Arabica coffee</a>
                                                </div>
                                                <div class="item">
                                                    <a id="705668" title="Arabica coffee" class="item-link active" href="#title2">Arabica coffee</a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="menu-restaurant-list pd-lr0">
                                            <div className="menu-group">
                                                <div className="title-menu">
                                                    <h4>ARABICA COFFEE</h4>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="item-restaurant-row">
                                                <div className="row">
                                                    <div className="col-auto item-restaurant-img">
                                                        <img src="https://images.foody.vn/res/g15/149154/s120x120/37305c70-286b-4065-9445-88a398875177.jpg" width="60px" height="60px0" />
                                                    </div>
                                                    <div className="col item-restaurant-info">
                                                        <h5><strong>Arabica cappuccino</strong></h5>
                                                    </div>
                                                    <div className="col-auto item-restaurant-more">
                                                        <div>
                                                            <span className="btn-adding">+</span>
                                                        </div>
                                                        <div className="col-auto product-price">
                                                            <span className="current-price">50.000$</span>
                                                        </div>
                                                    </div>  
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-auto item-restaurant-img">
                                                        <img src="https://images.foody.vn/res/g15/149154/s120x120/37305c70-286b-4065-9445-88a398875177.jpg" width="60px" height="60px0" />
                                                    </div>
                                                    <div className="col item-restaurant-info">
                                                        <h5><strong>Arabica cappuccino</strong></h5>
                                                    </div>
                                                    <div className="col-auto item-restaurant-more">
                                                        <div>
                                                            <span className="btn-adding">+</span>
                                                        </div>
                                                        <div className="col-auto product-price">
                                                            <span className="current-price">50.000$</span>
                                                        </div>
                                                    </div>  
                                                </div>
                                            </div>
                                            {/* /// */}
                                            <div id="title2"></div>
                                            <div className="menu-group">
                                                <div className="title-menu" >
                                                    <h4>ARABICA COFFEE</h4>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="item-restaurant-row">
                                                <div className="row">
                                                    <div className="col-auto item-restaurant-img">
                                                        <img src="https://images.foody.vn/res/g15/149154/s120x120/37305c70-286b-4065-9445-88a398875177.jpg" width="60px" height="60px0" />
                                                    </div>
                                                    <div className="col item-restaurant-info">
                                                        <h5><strong>Arabica cappuccino</strong></h5>
                                                    </div>
                                                    <div className="col-auto item-restaurant-more">
                                                        <div>
                                                            <span className="btn-adding">+</span>
                                                        </div>
                                                        <div className="col-auto product-price">
                                                            <span className="current-price">50.000$</span>
                                                        </div>
                                                    </div>  
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-auto item-restaurant-img">
                                                        <img src="https://images.foody.vn/res/g15/149154/s120x120/37305c70-286b-4065-9445-88a398875177.jpg" width="60px" height="60px0" />
                                                    </div>
                                                    <div className="col item-restaurant-info">
                                                        <h5><strong>Arabica cappuccino</strong></h5>
                                                    </div>
                                                    <div className="col-auto item-restaurant-more">
                                                        <div>
                                                            <span className="btn-adding">+</span>
                                                        </div>
                                                        <div className="col-auto product-price">
                                                            <span className="current-price">50.000$</span>
                                                        </div>
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                                
                            </div>
                        </div>
                        
                    </div>
                    <div><br /></div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            {/* list comment */}
                            <CommentItem 
                            name="Thành"
                            comment="abc"
                            day="18-08-1992"
                            />
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                        < CommentInput />
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default ShopDetail;

