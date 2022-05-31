import _ from 'lodash'
import React, { Component } from 'react'
import { Divider, Tab } from 'semantic-ui-react'
import './Tab.css';
import Fianance from '../tab-component/Fianance';
import Compliances from '../tab-component/Compliances';
import Contact from '../tab-component/Contact-deatils';
import Profile from '../tab-component/Profile-content';
import Journey from '../tab-component/Journey';

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
]

const panes = [
  // {
  //   menuItem: 'COMPANY PROFILE',
  //   render: () => <Tab.Pane attached={false}><Profile/></Tab.Pane>,
  // },
  {
    menuItem: 'CONTACT DETAILS',
    render: () => <Tab.Pane attached={false}><Contact/></Tab.Pane>,
  },
  {
    menuItem: 'FINANCE',
    render: () => <Tab.Pane attached={false}><Fianance/></Tab.Pane>,
  },
  // {
  //   menuItem: 'COMPLIANCE',
  //   render: () => <Tab.Pane attached={false}><Compliances/></Tab.Pane>,
  // },
  {
    menuItem: 'JOURNEY',
    render: () => <Tab.Pane attached={false}><Journey/></Tab.Pane>,
  },
]

class TabExampleColored extends Component {
  state = { color: colors[0] }

  handleColorChange = (e) => this.setState({ color: e.target.value })

  render() {
    const { color } = this.state

    return (
      <div>
       

        <Tab menu={{ color, attached: false, tabular: false }} panes={panes} id="tabbar" />
      </div>
    )
  }
}

export default TabExampleColored
