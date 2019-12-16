import React,{Component} from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import {BrowserRouter} from 'react-router-dom';


import Route from './routes';

class App extends Component {
    render(){
        return (
            <div className="hidden-sn animated deep-purple-skin">
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <BrowserRouter>
                                <Route />
                        </BrowserRouter>
                        
                        {/* <ProductsContainer />
                        <MessageContainer />
                        <CartContainer /> */}
                    </div>
                </main>
                {/* <!-- Footer --> */}
                <Footer />
            </div>
        );
    }

  
}

export default App;
