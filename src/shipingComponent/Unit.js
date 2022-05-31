import React, { Component } from 'react'
import {Button, FormControl, InputLabel, NativeSelect} from '@mui/material';
import './Awb.css'
export default class Unit extends Component {
    render() {
        return (
            <div>
                  <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    UNIT
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'total gross weight',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>CTN</option>
    <option value={20}>CTN</option>
    <option value={30}>CTV</option>
  </NativeSelect>
</FormControl> 
            </div>
        )
    }
}
