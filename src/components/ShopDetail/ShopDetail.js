import React, { Component } from 'react';

class ShopDetail extends Component {
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
                    
                </div>
                
            </div>
        );
    }
}
export default ShopDetail;

