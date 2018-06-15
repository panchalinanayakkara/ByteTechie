'use strict';

import React, {Component} from 'react';

import '../styles/css.css';
//import '../styles/font-awesome.min.css';
import '../styles/w3.css';

export default class Prescription extends Component{
    static getPropTypes()
    {
        return{
            getAllPrescriptions: PropTypes.func,
            prescription: PropTypes.object
        }
    }

    constructor(props)
    {
        super(props);
        this.prescription = this.props.prescription;
        this.getAllPrescriptions = this.props.getAllPrescriptions;
    }

    render()
    {
        return  <tr>
                    <td width="500px">{prescription.patientId}</td>
                    <td width="500px">{prescription.prescriptionId}</td>
                    <td width="500px">{prescription.createdDate}</td>
                    <td width="500px">{prescription.prescriptionDate}</td>
                 <td width="500px"><a href="PlaceOrder.html">View &amp; Dispense</a></td>
               </tr>
        }
}