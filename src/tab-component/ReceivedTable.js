import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import CountryExport from '../ShipmentReceived/CountryExport';
import DestPort from '../ShipmentReceived/DestPort';
import Mot from '../ShipmentReceived/Mot';
import OriginPort from '../ShipmentReceived/OriginPort';
import PortUnlading from '../ShipmentReceived/PortUnlading';
import TimeofArr from '../ShipmentReceived/TimeofArr';
import TimeofDep from '../ShipmentReceived/TimeofDep';
import Vessel from '../ShipmentReceived/Vessel';
import Voyage from '../ShipmentReceived/Voyage';
import './ReceivedTable.css'
export default class ReceivedTable extends Component {
    render() {
        return (
               <div id="arrive-for-port">
                <div className="">
          <p className="shipment-title-tw">Shipment was received, Port of Ho Chi Minh City, Vietnam</p>
          <em>Tuesday, February 2nd 2020, 10:05:51 pm </em>
        </div>
     <div id="received-shipment-info">
     
    <Grid reversed='tablet' columns='equal' className="ship-one">
     
      <Grid.Column><Mot/></Grid.Column>
      <Grid.Column><Vessel/></Grid.Column>
      <Grid.Column><Voyage/></Grid.Column>
    </Grid>
    <Grid reversed='tablet' columns='equal' className="ship-two">
      <Grid.Column><CountryExport/></Grid.Column>
      <Grid.Column><PortUnlading/></Grid.Column>
      
    </Grid>
    <Grid reversed='tablet' columns='equal' className="ship-three">
      
      <Grid.Column><OriginPort/></Grid.Column>
      <Grid.Column><DestPort/></Grid.Column>
    </Grid>
    <Grid reversed='tablet' columns='equal' className="ship-four">
      
      <Grid.Column><TimeofDep/></Grid.Column>
      <Grid.Column><TimeofArr/></Grid.Column>
    </Grid>
    </div>
    </div>
        )
    }
}
