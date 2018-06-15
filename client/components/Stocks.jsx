'use strict';

import React, {Component} from 'react';

import '../styles/css.css';
//import '../styles/font-awesome.min.css';
import '../styles/w3.css';

import Stock from './Stock.jsx';

export default class Stocks extends Component{
    static getPropTypes()
    {
        return{
            stocks: PropTypes.array
        }
    }

    constructor(props)
    {
        super(props);
    }

    render()
    {
        const { stocks } = this.props;
        return <div>
            <table>
                <thead>
                    <tr>
                        <th width="500px">Drug ID</th>
                        <th width="500px">Drug Name</th>
                        <th width="500px">Drug Type</th>
                        <th width="500px">Drug Category</th>
                        <th width="500px">Drug Price</th>
                        <th width="500px">Drug Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stocks.map(stock => {
                            return <Stock key={stock.drugID} stock={stock} getAllStocks = {()  =>  this.props.getAllStocks()} />
                        })
                    }
                </tbody>
            </table>
        </div>
        }
}