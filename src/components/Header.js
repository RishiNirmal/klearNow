import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';
import Searchbar from './Customer_search';
import Profilecard from './Profilecard';
import CustumerGrid from './customer-grid'
import Custumeradd from './Customer-add'
import {
  Button,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
  Sidebar,
  Divider
} from 'semantic-ui-react'


function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_ANIMATION':
      return { ...state, animation: action.animation, visible: !state.visible }
    case 'CHANGE_DIMMED':
      return { ...state, dimmed: action.dimmed }
    case 'CHANGE_DIRECTION':
      return { ...state, direction: action.direction, visible: false }
    default:
      throw new Error()
  }
}

function SidebarExampleTransitions() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: false,
  })

  const { animation, dimmed, direction, visible } = state
  const vertical = direction === 'bottom' || direction === 'top'

  return (
    <div>
     
     <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
     <Segment basic>
          <Header as='p'><Button className="menu-btn"
       disabled={vertical}
       onClick={() =>
        dispatch({ type: 'CHANGE_ANIMATION', animation: 'scale down' })
        }
      >
         <i class="align left icon"></i>
      </Button>
       <label className="custu-head">Customer</label>
      <Searchbar/>
      <Divider vertical><Custumeradd/></Divider>
       </Header>
          </Segment>
        
       </Sidebar.Pushable>
      
    </div>

  )
}

export default SidebarExampleTransitions
