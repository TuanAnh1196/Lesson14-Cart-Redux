import React,{Component} from 'react';
import {Switch,withRouter,Route} from 'react-router-dom';
import RouteConst from './constants/Route';
import ProductsContainer from './containers/ProductsContainer';
import NotFound from './components/sites/NotFound';
import CartContainer from './containers/CartContainer';
import ShopsContainer from './containers/ShopsContainer';
class RouteBackEnd extends Component {
    render() {
        return (
            <Switch>
                {/* <Route exact path={RouteConst.frontEnd.auth.login.path} component={Login} /> */}
                {/* <Route exact path={RouteConst.frontEnd.auth.register.path} component={Register} /> */}
                <Route exact path={RouteConst.frontEnd.products.index.path} component={ProductsContainer} />
                <Route exact path={RouteConst.frontEnd.cart.index.path} component={CartContainer} />
                <Route exact path={RouteConst.frontEnd.shops.index.path} component={ShopsContainer} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default withRouter(RouteBackEnd);