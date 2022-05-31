import React from 'react'
import { Card, Icon, Image, Header } from 'semantic-ui-react'
import Profileimg from './steve.jpg'
import   './Profilecard.css';

const CardExampleImageCard = () => (
  <Card>
    <Image src={Profileimg} wrapped ui={false}/>
    <h2 className="profilename">Antoine Santos</h2>
    <span className="profilename">asantos@kw.com</span>
    {/* <Card.Content>
      <Card.Header>Ram Kumar</Card.Header>
      <Card.Meta>ramkumar@dom.com</Card.Meta>
    </Card.Content> */}
   
  </Card>
)

export default CardExampleImageCard
