// import React, { Component } from 'react'
// import SearchIcon from '@material-ui/icons/Search';
// import {Button, FormControl, InputLabel, NativeSelect} from '@mui/material';

// export default class Vessel extends Component {
//     render() {
//         return (
//             <div>
//                <label className="box-title">VESSEL(NAME. IMO #)</label>
//     <p className="box-bold-text">MAERSK ALGOL, 9567661</p>
//     {/* <span><SearchIcon/></span>  */}
//     <FormControl fullWidth>
//   {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
//     BOL TYPE
//   </InputLabel> */}
//   <SearchIcon
//     defaultValue={30}
//     inputProps={{
//       name: 'bol type',
//       id: 'uncontrolled-native',
//     }}
//   >
//     <option value={10}>MASTER</option>
//     <option value={20}>MASTER2</option>
//     <option value={30}>MASTER3</option>
//   </SearchIcon>
// </FormControl> 
      
//             </div>
//         )
//     }
// }

import _ from 'lodash'
// import faker from 'faker'
import React from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

// const source = _.times(5, () => ({
//   title: faker.company.companyName(),
//   description: faker.company.catchPhrase(),
//   image: faker.internet.avatar(),
//   price: faker.finance.amount(0, 100, 2, '$'),
// }))

const initialState = {
  loading: false,
  results: [],
  value: 'MAERSK ALGOL, 9567661',
}

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}

function SearchExampleStandard() {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value } = state

  const timeoutRef = React.useRef()
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.title)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter( isMatch),
      })
    }, 300)
  }, [])
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
   
    <>
    <label className="box-title">VESSEL(NAME. IMO #)</label>
        <Search
          loading={loading}
          onResultSelect={(e, data) =>
            dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
          }
          onSearchChange={handleSearchChange}
          results={results}
          value={value} />
     
</>
    
  )
}

export default SearchExampleStandard