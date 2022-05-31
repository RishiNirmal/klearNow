import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import './Awb.css'

export default class COC extends Component {
    render() {
        return (
            <div id="coc">
            <label className="box-title">COC</label>
      <TextField variant="filled" className="coc-input" />
    </div>
        )
    }
}
