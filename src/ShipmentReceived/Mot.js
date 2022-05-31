import React, { Component } from 'react'
import {Button, FormControl, InputLabel, NativeSelect} from '@mui/material';
export default class Mot extends Component {
    render() {
        return (
            <div>
                  <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    MOT
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'mot',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>OCEAN</option>
    <option value={20}>OCEAN</option>
    <option value={30}>OCEAN</option>
  </NativeSelect>
</FormControl> 
            </div>
        )
    }
}
