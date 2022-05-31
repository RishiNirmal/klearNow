import React, { Component } from 'react'
import './Journey.css'
import ShipmentInfo from './Shipment-info'
import Rangetracker from './Rangetracker'
export default class Journey extends Component {
    render() {
        return (
            <div>
                <p className="shipment-title">SHIPMENT INFO</p>
               <ShipmentInfo/>
               <Rangetracker/>
            </div>
        )
    }
}
