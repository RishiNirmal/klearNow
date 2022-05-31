import React from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import BolType from '../shipingComponent/Bol-type'
import Awb from '../shipingComponent/Awb'
import HouseBillLading from '../shipingComponent/House-bill-lading'
import USNGMR from '../shipingComponent/USN-GMR'
import TotalGrossWeight from '../shipingComponent/TotalGrossWeight'
import Unit from '../shipingComponent/Unit'
import Volume from '../shipingComponent/Volume'
import TotalManifestqty from '../shipingComponent/TotalManifasQnty'
import LocateOfgoods from '../shipingComponent/LocateOfgoods'
import BadgeCode from '../shipingComponent/BadgeCode'
import ITNumber from '../shipingComponent/ITNumber'
import ITDate from '../shipingComponent/ITDate'
import COC from '../shipingComponent/COC'
import UsPortExit from '../shipingComponent/UsPortExit'
import StateOfultimate from '../shipingComponent/StateOfultimate'
import Paps from '../shipingComponent/Paps'
const GridExampleReversedTablet = () => (
     
    <div id="shipment-info">
    
  <Grid reversed='tablet' columns='equal' className="ship-one">
    <Grid.Column>
    <BolType/>
    </Grid.Column>
    <Grid.Column><Awb/></Grid.Column>
    <Grid.Column><HouseBillLading/></Grid.Column>
    <Grid.Column><USNGMR/></Grid.Column>
  </Grid>
  <Grid reversed='tablet' columns='equal' className="ship-two">
    <Grid.Column><TotalGrossWeight/></Grid.Column>
    <Grid.Column><Unit/></Grid.Column>
    <Grid.Column><Volume/></Grid.Column>
    <Grid.Column><Unit/></Grid.Column>
    <Grid.Column><TotalManifestqty/></Grid.Column>
    <Grid.Column><Unit/></Grid.Column>
  </Grid>
  {/* =========3========= */}
  <Grid reversed='tablet' columns='equal' className="ship-three">
    <Grid.Column><LocateOfgoods/></Grid.Column>
    <Grid.Column><BadgeCode/></Grid.Column>
    <Grid.Column><ITNumber/></Grid.Column>
    <Grid.Column><ITDate/></Grid.Column>
    <Grid.Column><COC/></Grid.Column>
  </Grid>
  <Grid reversed='tablet' columns='equal' className="ship-four">
    <Grid.Column><UsPortExit/></Grid.Column>
    <Grid.Column><StateOfultimate/></Grid.Column>
    <Grid.Column><Paps/></Grid.Column>
    <Grid.Column> <label className="box-title"></label>
      <p className="box-bold-text"></p>  </Grid.Column>
  </Grid>
  </div>
)

export default GridExampleReversedTablet
