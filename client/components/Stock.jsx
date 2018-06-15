'use strict';

import React, {Component} from 'react';

import '../styles/css.css';
//import '../styles/font-awesome.min.css';
import '../styles/w3.css';

export default class Stock extends Component{
    static getPropTypes()
    {
        return{
            getAllStocks: PropTypes.func,
            stock: PropTypes.object
        }
    }

    constructor(props)
    {
        super(props);
        this.stock = this.props.stock;
        this.getAllStocks = this.props.getAllStocks;
    }

    render()
    {
        return <tr>
                    <td width="500px">{stock.drugID}</td>
                    <td width="500px">{stock.drugName}</td>
                    <td width="500px">{stock.drugType}</td>
                    <td width="500px">{stock.drugCategory}</td>
                    <td width="500px">{stock.drugPrice}</td>
                    <td width="500px">{stock.drugQuantity}</td>
                    <td width="500px"><button>Place Order</button></td>
                </tr>
        }
}