import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Customer from './Customer'
import Customertab from './Customertab'
import './Custumer-grid.css';

const GridExampleColumns = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={7}>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
        <Customer/>
      </Grid.Column>
      <Grid.Column width={9}>
      <Customertab/>
      </Grid.Column>
    </Grid.Row>

  
  </Grid>
)

export default GridExampleColumns
