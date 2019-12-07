import React, { Component } from 'react';
class Shops extends Component {
    render() {
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Shop</h1>
                <div className="row">
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default (Shops);
