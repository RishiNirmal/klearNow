import React, { Component } from 'react'
import Feesdrop from './Feesdrop'
import Pastfees from './Pastfees'
import Documents from './Documents'




export default class Fianance extends Component {
    render() {
        return (
            <div>
              <label>FEES</label>
             <Feesdrop/>
             <Pastfees/>
             <Documents/>

            </div>
        )
    }
}
