'use strict';

import React, {Component}  from 'react';
import Axios from 'axios';

import Prescriptions from './Prescriptions.jsx';

import '../styles/css.css';
import '../styles/w3.css';

export default class StockHandling extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            prescriptions: []
        }
        this.getAllPrescriptions();
    }

    getAllPrescriptions()
    {
        this.getAllPrescriptions = "/prescription/getprescriptions";
        Axios.get(this.getAllPrescriptions).then(res  =>  {
            this.setState({
              prescriptions:  res.data.data  ||  res.data
            });
          })
    }

    render()
    {
        return<div>
            <Prescriptions prescriptions={this.state.prescriptions} getAllPrescriptions = {() => this.getAllPrescriptions ()}/>
        </div>
    }
}