'use strict';

import React, {Component}  from 'react';
import Axios from 'axios';

import Prescriptions from './Prescriptions.jsx';
import Drugs from './Drugs';

import '../styles/css.css';
import '../styles/w3.css';


export default class StockHandling extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            prescriptions: [],
            drugs: []
        }
        this.getAllPrescriptions();
        this.getAllDrugs();
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

    getAllDrugs()
    {
        this.getAllPrescriptions = "/drug/getAllDrugs";
        Axios.get(this.getAllDrugs).then(res  =>  {
            this.setState({
              drugs:  res.data.data  ||  res.data
            });
          })
    }

    render()
    {
        return<div>
            <title>Stock Handling</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style dangerouslySetInnerHTML={{__html: "\nbody,h1,h2,h3,h4,h5,h6 {font-family: \"Raleway\", sans-serif}\n" }} />
        {/* Sidebar/menu */}
        <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{zIndex: 3, width: 300}} id="mySidebar"><br />
          <div className="w3-container">
            <a href="#" onclick="w3_close()" className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
              <i className="fa fa-remove" />
            </a>
          </div>
          <div className="w3-bar-block">
            <a href="index.html" className="w3-bar-item w3-button w3-padding w3-text-teal"><i className="fa fa-th-large fa-fw w3-margin-right" />Pharmacy Stock</a>
            <a href="StockHandling.html" className="w3-bar-item w3-button w3-padding w3-text-teal"><i className="fa fa-th-large fa-fw w3-margin-right" />Stock Handling</a>
          </div>
        </nav>
        {/* Overlay effect when opening sidebar on small screens */}
        <div className="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{cursor: 'pointer'}} title="close side menu" id="myOverlay" />
        {/* !PAGE CONTENT! */}
        <div className="w3-main" style={{marginLeft: 300}}>
          {/* Header */}
          <header id="portfolio">
            <a href="#"><img src="/w3images/avatar_g2.jpg" style={{width: 65}} className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity" /></a>
            <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onclick="w3_open()"><i className="fa fa-bars" /></span>
            <div className="w3-container">
              <h1><b>Stock Handling</b></h1>
            </div>
          </header>
          {/* Drug Dispence */}
          <div className="w3-container w3-padding-large w3-grey">
            <h4 id="contact"><b>Drug Dispense</b></h4>
            <hr className="w3-opacity" />
            <div className="w3-section">
              <label><h4><b>Patient ID:</b></h4></label>
              <input className="w3-input w3-border" type="text" name="patientId" required /><br />
              <a href="PlaceOrder.html" /><button className="w3-button w3-black w3-margin-bottom"><a href="PlaceOrder.html">Search</a></button>
            </div>
          </div>
          <div className="w3-container w3-padding-large w3-grey">
            <h5 id="contact"><b>Prescription List: {'{'} patientId{'}'}</b></h5>
            <hr className="w3-opacity" />
            <div className="w3-section">
            <Prescriptions prescriptions={this.state.prescriptions} getAllPrescriptions = {() => this.getAllPrescriptions ()}/>
            </div>
            <div className="w3-bar w3-border w3-round">
              <a href="#" className="w3-button">❮ Previous</a>
              <a href="#" className="w3-button w3-right">Next ❯</a>
            </div>  
          </div>
          <br /><br /><br /><br />
          {/* Drug Stock */}
          <div className="w3-container w3-padding-large w3-grey">
            <h4 id="contact"><b>Stock Handling</b></h4>
            <hr className="w3-opacity" />
            <div className="w3-section">
            <Drugs drugs={this.state.drugs} getAllDrugs = {() => this.getAllDrugs ()}/>
            </div>
            <button type="submit" className="w3-button w3-black w3-margin-bottom"><i className="fa fa-paper-plane w3-margin-right" />View As PDF</button>
          </div>
          {/* End page content */}
        </div>           
        </div>
    }
}