// import React from 'react'
// import { Grid, Image } from 'semantic-ui-react'
// import {Link} from 'react-router-dom'
// import './Pastfees.css'

// const GridExampleDividedNumber = () => (
//     <div id="pastfees-grid"> 
//      <div className="row-grid">
//   <Grid.Row>
//       <Grid.Column>
//       <Link to="./" className="fees-changes"><label>VIEW PAST FEES CHANGES</label></Link>
//       </Grid.Column>
//       </Grid.Row>
     
//   <Grid columns={3} celled >
//     <Grid.Row>
//       <Grid.Column>
//       <label>ENTRY FEES</label>
//       </Grid.Column>
//       <Grid.Column>
//       <label>EXP. FEES</label>
//       </Grid.Column>
//       <Grid.Column>
//       <label>FLOR SETUP FEES</label>
//       </Grid.Column>
//     </Grid.Row>
//   <Grid.Row>
//       <Grid.Column>
//       <label>SERVICE FEES (GENERAL)</label>
//       </Grid.Column>
//       <Grid.Column>
//       <label>SERVICE FEES (DEMMURAGE)</label>
//       </Grid.Column>
//       <Grid.Column>
//       <label>SERVICE FEES (AIR STORAGE)</label>
//       </Grid.Column>
//       </Grid.Row>
//       </Grid>
//       <Grid columns={1} celled >
//       <Grid.Row>
//       <Grid.Column>
//      <label>UPDATES NOTE</label>
//       </Grid.Column>
//       </Grid.Row>
//       </Grid>

// <Grid.Row>
//       <Grid.Column>
//       <Link to="./" className="fees-changes"><label>UPDATE FEES</label></Link>
//       </Grid.Column>
//       </Grid.Row>
 
      
//   </div>
//   </div>
// )

// export default GridExampleDividedNumber


import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './Pastfees.css'

const GridExamplePadded = () => (
  <div id="pastfees-grid">
    
    <Grid>
   
    <Grid.Column width={13}>
    <Link to="./" className="fees-changes"><label>VIEW PAST FEES CHANGES</label></Link>
    <Grid columns={3} celled >
    <Grid.Row>
      <Grid.Column>
      <label>ENTRY FEES</label>
      <p className="price-bar"><label>$</label></p>
      </Grid.Column>
      <Grid.Column>
      <label>EXP. FEES</label>
      <p className="price-bar"><label>$</label></p>
      </Grid.Column>
      <Grid.Column>
      <label>FLOR SETUP FEES</label>
      <p className="price-bar"><label>$</label></p>
      </Grid.Column>
    </Grid.Row>
  <Grid.Row>
      <Grid.Column>
      <label>SERVICE FEES (GENERAL)</label>
      <p className="price-bar"><label>$</label>75.00</p>
      </Grid.Column>
      <Grid.Column>
      <label>SERVICE FEES (DEMMURAGE)</label>
      <p className="price-bar"><label>$</label></p>
      </Grid.Column>
      <Grid.Column>
      <label>SERVICE FEES (AIR STORAGE)</label>
      <p className="price-bar"><label>$</label></p>
      </Grid.Column>
      </Grid.Row>
      </Grid>
      <Grid columns={1} celled >
      <Grid.Row>
      <Grid.Column>
     <label>UPDATES NOTE</label>
     <p className="upt-bar"></p>
      </Grid.Column>
      </Grid.Row>
      </Grid>
    </Grid.Column>
    <Grid.Column width={3} className="update-fees">
    <Link to="./" className="fees-updt"><label>UPDATE FEES</label></Link>
    </Grid.Column>
   
  </Grid>
    
  </div>
)

export default GridExamplePadded