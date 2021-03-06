'use strict';

import React, {Component} from 'react';

import '../styles/css.css';
//import '../styles/font-awesome.min.css';
import '../styles/w3.css';

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
            <table className="w3-table-all">
                <thead>
                  <tr className="w3-light-grey">
                    <th width="500px" />
                    <th width="500px" />
                    <th width="500px" />
                    <th width="500px" />
                    <th item-width="500px">
                      <input className="w3-input w3-border" type="text" name="prescriptionId" placeholder="Search..." required /><br />
                    </th>
                  </tr>
                  <tr>
                    <th width="500px">Patient ID</th>
                    <th width="500px">Prescription ID</th>
                    <th width="500px">Create Data</th>
                    <th width="500px">Prescription Date</th>
                    <th width="500px">Action</th>
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