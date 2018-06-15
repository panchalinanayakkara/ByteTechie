'use strict';

import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter as Router, 
        Route,
        Link} from 'react-router-dom'

import PharmacyStock from './components/PharmacyStock.jsx';
import StockHandling from './components/StockHandling.jsx';
import PlaceOrder from './components/PlaceOrder.jsx';

const pharmacyContainer = () => (
  <Router>
    <div>
    <Navigator/>

            <Route path='/' component={PharmacyStock}/>


            <Route path='/stockhandling' component={StockHandling}/>

            <Route path='/placeorder' component={PlaceOrder}/>
    </div>
  </Router>
);

export default pharmacyContainer;