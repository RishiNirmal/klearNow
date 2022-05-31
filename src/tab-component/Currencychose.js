import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'INR', value: 1 },
  { key: 2, text: 'USD', value: 2 },
  { key: 3, text: 'ERO', value: 3 },
]

const DropdownExampleClearable = () => (
  <Dropdown placeholder='USD' clearable options={options} selection />
)

export default DropdownExampleClearable
