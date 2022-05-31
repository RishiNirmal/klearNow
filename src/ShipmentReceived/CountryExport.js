import React, { Component } from 'react'
import {Button, FormControl, InputLabel, NativeSelect} from '@mui/material';

export default class CountryExport extends Component {
    render() {
        return (
            <div>
                 <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
  COUNTRY OF EXPORT
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'country of export',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>VT - VIETNAM</option>
    <option value={20}>VT - VIETNAM</option>
    <option value={30}>VT - VIETNAM</option>
  </NativeSelect>
</FormControl> 
            </div>
        )
    }
}
