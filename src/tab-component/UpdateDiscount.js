import React from 'react'
import { Button } from 'semantic-ui-react'
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import './UpdateDiscount.css'


const ButtonExampleButton = () => 
<div id="udate-btn">
<Link to="/update-discount" ><Button className="uptbut">UPDATE DISCOUNT</Button></Link>
{/* <Button>Detail</Button> */}
</div>
export default ButtonExampleButton
