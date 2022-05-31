import React, { Component } from 'react'
import {Button, FormControl, InputLabel, NativeSelect} from '@mui/material';
import './Awb.css'
export default class TotalGrossWeight extends Component {
    render() {
        return (
            <div>
                 <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    TOTAL GROSS WEIGHT
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'total gross weight',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>0.00</option>
    <option value={20}>0.01</option>
    <option value={30}>0.03</option>
  </NativeSelect>
</FormControl> 
            </div>
        )
    }
}
