'use strict';

import React, {Component} from 'react';

import '../styles/css.css';
//import '../styles/font-awesome.min.css';
import '../styles/w3.css';

export default class Drug extends Component{
    static getPropTypes()
    {
        return{
            getAllDrugs: PropTypes.func,
            drug: PropTypes.object
        }
    }

    constructor(props)
    {
        super(props);
        this.drug = this.props.drug;
        this.getAllDrugs = this.props.getAllDrugs;
    }

    render()
    {
        return <tr>
                    <td width="500px">{drug.drugID}</td>
                    <td width="500px">{drug.drugName}</td>
                    <td width="500px">{drug.drugQuantity}</td>
                </tr>
        }
}