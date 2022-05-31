import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'INR CURRENCY', value: 1 },
  { key: 2, text: 'USD CURRENCY', value: 2 },
  { key: 3, text: 'CURRENCY', value: 3 },
]

const DropdownExampleClearable = () => (
  <Dropdown placeholder='CURRENCY' clearable options={options} selection />
)

export default DropdownExampleClearable
