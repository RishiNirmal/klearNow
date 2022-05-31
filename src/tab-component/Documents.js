import React from 'react'
import { Grid, Segment, Icon } from 'semantic-ui-react'
import './Pastfees.css'
import Currency from './Currencychose'
import DocumentType from './Document_type'
import { Link } from 'react-router-dom'
import UpdateDiscount from './UpdateDiscount'

const GridExampleEqualWidthColumn = () => (
    <div id="document-section">
      <Link to="./">
      <p className="discount-changes">VIEW PAST DISCOUNT CHANGES </p></Link>
       <h4>DOCUMENTS</h4>
       <p className="">FIXED PERIOD DISCOUNT (PER SHIPMENT) </p>
  <Grid columns='equal'>
   
    <Grid.Column>
      <Segment className="col-detail">
      <label>AMOUNT</label>
      <p className="amt-price-bar">10</p>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment className="col-detail">
      <label>DOCUMENT TYPE</label>
      <p className="price-bar"><DocumentType/></p>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment className="col-detail">
      <label>CURRENCY TYPE</label>
      <p className="price-bar"><Currency/></p>
      </Segment>
    </Grid.Column>
   
    <Grid.Column className="right-document">
      <Segment className="col-detail">
      <label>STRAT DATE</label>
      <p className="price-bar date-tim"></p>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment className="col-detail">
      <label>END DATE</label>
      <p className="price-bar date-tim"></p>
      </Segment>
    </Grid.Column>
    </Grid>
    <p className="doc-padding">VOLUME DISCOUNT (PER SHIPMENT FLAT) </p>
  <Grid columns='equal'>
   
    <Grid.Column>
      <Segment className="col-detail">
      <label>AMOUNT</label>
      <p className="amt-price-bar">10</p>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment className="col-detail">
      <label>DOCUMENT TYPE</label>
      <p className="price-bar"><DocumentType/></p>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment className="col-detail">
      <label>CURRENCY TYPE</label>
      <p className="price-bar"><Currency/></p>
      </Segment>
    </Grid.Column>
   
    <Grid.Column className="right-document">
      <Segment className="col-detail">
      <label>STRAT DATE</label>
      <p className="price-bar date-tim"></p>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment className="col-detail">
      <label>END DATE</label>
      <p className="price-bar date-tim"></p>
      </Segment>
    </Grid.Column>
    </Grid>
    <p className="doc-padding">REBATE (PER SHIPMENT) </p>
  <Grid columns='equal'>
   
    <Grid.Column>
      <Segment className="col-detail price-document-until">
      <label>FIXED RATE AMOUNT</label>
      <p className="amt-price-bar">10</p>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment className="col-detail">
      {/* <label>DOCUMENT TYPE</label>
      <p className="price-bar"><DocumentType/></p> */}
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment className="col-detail">
      <label>CURRENCY TYPE</label>
      <p className="price-bar"><Currency/></p>
      </Segment>
    </Grid.Column>
   
    <Grid.Column className="right-document-until">
      <Segment className="col-detail">
      <label>UNTIL NO. OF SHIPMENT REACHED</label>
      <p className="price-bar date-tim">10000</p>
      </Segment>
    </Grid.Column>
    {/* <Grid.Column>
      <Segment className="col-detail">
      <label>END DATE</label>
      <p className="price-bar date-tim"></p>
      </Segment>
    </Grid.Column> */}
    </Grid>
    <p className="doc-padding">TIERED DISCOUNT (PER SHIPMENT) </p>
  <Grid columns='equal'>
   
    <Grid.Column>
      <Segment className="col-detail">
      <label>AMOUNT</label>
      <p className="amt-price-bar">10</p>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment className="col-detail">
      <label>DOCUMENT TYPE</label>
      <p className="price-bar"><DocumentType/></p>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment className="col-detail">
      <label>CURRENCY TYPE</label>
      <p className="price-bar"><Currency/></p>
      </Segment>
    </Grid.Column>
   
    <Grid.Column className="right-document-until">
      <Segment className="col-detail">
      <label>BETWEEN</label>
      <p className="between-box">
      <span className="doc-zero">0</span> &nbsp;TO&nbsp;
      <span className="doc-thusand">1000</span> &nbsp;SHIPMENTS</p>
      </Segment>
    </Grid.Column>
        </Grid>
        <Link>
        <p className="add-tier">
     <span className=""><Icon name='file alternate'/></span> &nbsp;ADD TIER</p>
     </Link>

     <Grid columns={1} celled className="udt-detail" >
      <Grid.Row>
      <Grid.Column>
     <label>UPDATES NOTE</label>
     <p className="upt-bar"></p>
      </Grid.Column>
      </Grid.Row>
      </Grid>
      <UpdateDiscount/>
        
      <Segment className="agreement-area"><p  className="letter-ageri-pdf"> 
      <Link className="pdf-btn" to="./"><Icon name='pdf file outline' /></Link>&nbsp;
      <Link to="./" className="pritre-btn"><Icon name='print' /></Link></p>
      <p className="letter-ageri"> LETTER OF AGREEMENT</p>
      </Segment>
  </div>
)

export default GridExampleEqualWidthColumn
