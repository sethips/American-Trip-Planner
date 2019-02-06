import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

// made by abhinav sagar 7/2/2019

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>American Trip Planner</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            <footer>
                <small>
                    made by <a href="https://linkedin.com/abhinavsagar4">Abhinav Sagar</a>, source code available on <a href="https://github.com/abhinavsagar">github</a>
                </small>
            </footer>
        </div>
    );
}

export default App;
