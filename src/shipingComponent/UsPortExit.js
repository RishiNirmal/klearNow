import React, { Component } from 'react'
import {Button, FormControl, InputLabel, NativeSelect} from '@mui/material';
import './Awb.css'
export default class UsPortExit extends Component {
    render() {
        return (
            <div>
                 <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    US PORT OF EXIT
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'us port of exit',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>LONG BEACH, USA</option>
    <option value={20}>LONG BEACH, INDIA</option>
    <option value={30}>LONG BEACH, USA</option>
  </NativeSelect>
</FormControl> 
            </div>
        )
    }
}
