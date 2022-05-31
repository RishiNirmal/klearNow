import React, { Component } from 'react'
import {Button, FormControl, InputLabel, NativeSelect} from '@mui/material';
import './Awb.css'
export default class LocateOfgoods extends Component {
    render() {
        return (
            <div>
                 <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    LOCATE OF GOODS
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'locate of goods',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>USA</option>
    <option value={20}>INDIA</option>
    <option value={30}>CANADA</option>
  </NativeSelect>
</FormControl> 
            </div>
        )
    }
}
