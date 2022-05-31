import React from 'react'
import { Table, Image } from 'semantic-ui-react'
import   './Customer-style.css'
import Detail from './Detail-button'
import Logo from './lifestyle.png'

const TableExampleColumnCount = () => (


  <div id="custumer-table">
  <Table columns={5}>
    

    <Table.Body>
      <Table.Row>
        <Table.Cell><Image src={Logo} /></Table.Cell>
        <Table.Cell><label>CUSTOMER</label>
         <p className="cutomer-name">LIFESTYLE</p>
        </Table.Cell>
        <Table.Cell><label>CONTACT</label>
        <p className="cutomer-email">ankita.sha@.com</p>
        </Table.Cell>
        <Table.Cell><label>ACTIVE SHIPMENT</label>
        <p className="cutomer-active-shipment">25456</p>
        </Table.Cell>
        <Table.Cell><Detail/></Table.Cell>
      </Table.Row>
     
     
    </Table.Body>

    
  </Table>
  </div>
 
)

export default TableExampleColumnCount
