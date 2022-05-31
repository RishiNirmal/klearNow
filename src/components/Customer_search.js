// import React from 'react'
// import { Dropdown } from 'semantic-ui-react'

// const friendOptions = [
//   {
//     key: 'Jenny Hess',
//     text: 'Jenny Hess',
//     value: 'Jenny Hess',
//     image: { avatar: true, src: '/src/components/steve.jpg' },
//   },
//   {
//     key: 'Elliot Fu',
//     text: 'Elliot Fu',
//     value: 'Elliot Fu',
//     image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
//   },
//   {
//     key: 'Stevie Feliciano',
//     text: 'Stevie Feliciano',
//     value: 'Stevie Feliciano',
//     image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
//   },
//   {
//     key: 'Christian',
//     text: 'Christian',
//     value: 'Christian',
//     image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
//   },
//   {
//     key: 'Matt',
//     text: 'Matt',
//     value: 'Matt',
//     image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
//   },
//   {
//     key: 'Justen Kitsune',
//     text: 'Justen Kitsune',
//     value: 'Justen Kitsune',
//     image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
//   },
// ]

// const DropdownExampleSelection = () => (
//   <Dropdown
//     placeholder='Select Custumer'
    
//     selection
//     options={friendOptions}
//   />
// )

// export default DropdownExampleSelection



// import React from 'react'
// import { Dropdown, Input } from 'semantic-ui-react'

// const options = [
//   { key: 'page', text: 'This Page', value: 'page' },
//   { key: 'org', text: 'This Organization', value: 'org' },
//   { key: 'site', text: 'Entire Site', value: 'site' },
// ]

// const InputExampleActionDropdown = () => (
//   <Input
//     action={
//       <Dropdown button basic floating options={options} defaultValue='page' />
//     }
//     icon='search'
//     iconPosition='left'
//     placeholder='Search...'
//   />
// )

// export default InputExampleActionDropdown





import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/NativeSelect';
import './Customer-search.css'

export default function NativeSelectDemo() {
  return (
    <div id="customers-select">
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Age
        </InputLabel> */}
        <Select
          defaultValue={30}
          inputProps={{
            name: 'Select Customer',
            id: 'uncontrolled-native',
            placeholder: 'ggyhhh'
          }}
        >
          <option value={10}>Jenny Hess</option>
          <option value={20}>Stevie Feliciano</option>
          <option value={30}>Feliciano</option>
          <option value={40}>Jenny Hess</option>
          <option value={50}>Stevie Feliciano</option>
          <option value={60}>Select Customer</option>
        </Select>
      </FormControl>
    </Box>
    </div>
  );
}

