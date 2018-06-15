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
        return <div>
        <title>Pharmacy Stock</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style dangerouslySetInnerHTML={{__html: "\n  body,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: \"Raleway\", sans-serif\n  }\n" }} />
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
            <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onclick="w3_open()"><i className="fa fa-bars" /></span>
            <div className="w3-container">
              <h1><b>Pharmacy Stock</b></h1>
            </div>
          </header>
          {/* Contact Section */}
          <div className="w3-container w3-padding-large w3-grey">
            <h4 id="contact"><b>Stock Details</b></h4>
            <hr className="w3-opacity" />
            <div className="w3-section">
            <Stocks stocks={this.state.stocks} getAllStocks = {() => this.getAllStocks ()}/>
            </div>
            <a href="javascript:genPDF()"><button type="submit" className="w3-button w3-black w3-margin-bottom"><i className="fa fa-paper-plane w3-margin-right" />View As PDF</button></a>
            <a href="PlaceOrder.html"><button className="w3-button w3-black w3-margin-bottom"><i className="fa fa-paper-plane w3-margin-right" />Place Order</button></a>
          </div>
          {/* End page content */}
        </div>
        </div>
    }
}