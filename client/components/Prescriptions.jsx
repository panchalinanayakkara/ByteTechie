'use strict';

import React, {Component} from 'react';

import '../styles/css.css';
//import '../styles/font-awesome.min.css';
import '../styles/w3.css';

import Stock from './Prescription.jsx';
import Prescription from './Prescription.jsx';

export default class Prescriptions extends Component{
    static getPropTypes()
    {
        return{
            prescriptions: PropTypes.array
        }
    }

    constructor(props)
    {
        super(props);
    }

    render()
    {
        const { prescriptions } = this.props;
        return <div>
            <table>
                <thead>
                    <tr>
                        <th width="500px">Patient ID</th>
                        <th width="500px">Prescription ID</th>
                        <th width="500px">Created Date</th>
                        <th width="500px">Prescription Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        prescriptions.map(prescription => {
                            return <Prescription key={prescription.patientId} prescription={prescription} getAllPrescriptions= {()  =>  this.props.getAllPrescriptions()} />
                        })
                    }
                </tbody>
            </table>
        </div>
        }
}