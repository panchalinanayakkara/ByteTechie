'use strict';

import React, {Component}  from 'react';
import Axios from 'axios';

import Stocks from './Stocks.jsx';

import '../styles/css.css';
import '../styles/w3.css';

export default class PharmacyStock extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            stocks: []
        }
        this.getAllStocks();
    }

    getAllStocks()
    {
        this.getAllStocks = "/drug/getAllDrugs";
        Axios.get(this.getAllStocks).then(res  =>  {
            this.setState({
              stocks:  res.data.data  ||  res.data
            });
          })
    }

    render()
    {
        return<div>
            <Stocks stocks={this.state.stocks} getAllStocks = {() => this.getAllStocks ()}/>
        </div>
    }
}