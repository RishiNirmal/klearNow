import React, { Component } from 'react'
import {Button, FormControl, InputLabel, NativeSelect} from '@mui/material';

export default class PortUnlading extends Component {
    render() {
        return (
            <div>
                  <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
  PORT OF UNLADING
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'port of unlading',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>LONG BEACH, CA, USA </option>
    <option value={20}>LONG BEACH, CA, USA</option>
    <option value={30}>LONG BEACH, CA, USA</option>
  </NativeSelect>
</FormControl> 
            </div>
        )
    }
}
