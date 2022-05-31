import React, { Component } from 'react'
import {Button, FormControl, InputLabel, NativeSelect} from '@mui/material';
export default class BolType extends Component {
    render() {
        return (
            <div>
               <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    BOL TYPE
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'bol type',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>MASTER</option>
    <option value={20}>MASTER2</option>
    <option value={30}>MASTER3</option>
  </NativeSelect>
</FormControl> 
            </div>
        )
    }
}
