'use strict';

import React, {Component} from 'react';

import '../styles/css.css';
//import '../styles/font-awesome.min.css';
import '../styles/w3.css';

import Drug from './Drug.jsx';

export default class Drugs extends Component{
    static getPropTypes()
    {
        return{
            drugs: PropTypes.array
        }
    }

    constructor(props)
    {
        super(props);
    }

    render()
    {
        const { drugs } = this.props;
        return <div>
            <table className="w3-table-all">
                <thead>
                  <tr>
                    <th width="500px">Drug ID</th>
                    <th width="500px">Drug Name</th>
                    <th width="500px">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        drugs.map(drug => {
                            return <Drug key={drug.drugId} drug={drug} getAllDrug= {()  =>  this.props.getAllDrug()} />
                        })
                    }
                 </tbody>
              </table>
        </div>
        }
}