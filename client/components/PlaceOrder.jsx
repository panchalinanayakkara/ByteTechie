'use strict';

import React, { Component } from 'react';

import '../styles/css.css';
//import '../styles/font-awesome.min.css';
import '../styles/w3.css';

export default class PlaceOrder extends Component {
    render() {
        return <div>
                    <form>
                        <label>To:</label>
                        <input class="w3-input w3-border" type="text" name="To" onChange={this.handleChange} required/> 

                        <label>Subject:</label>
                        <input class="w3-input w3-border" type="text" name="Subject" onChange={this.handleChange} required/> 

                        <label>Content:</label>
                        <textarea class="w3-input w3-border" type="text" name="Content" rows="20"  onChange={this.handleChange} required></textarea> 

                        <br/>

                        <button type="submit" class="w3-button w3-black w3-margin-bottom"><i class="fa fa-paper-plane w3-margin-right"></i>Place Order</button>
                    </form>
            </div>
    }
}