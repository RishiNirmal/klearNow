import React from 'react'
import { Button } from 'semantic-ui-react'
import './Detail-button.css'
import Customertab from './Customertab'
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";

<Switch>
          <Route path="/Customer">
            <Customertab />
          </Route>
        </Switch>
const ButtonExampleButton = () => 
<div id="detail-btn">
<Link to="/Customer"><Button>Detail</Button></Link>
{/* <Button>Detail</Button> */}
</div>
export default ButtonExampleButton
