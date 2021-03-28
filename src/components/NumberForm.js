import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
/*
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
*/

import { useSelector, useDispatch } from 'react-redux'

const NumberForm = () => {
  const value = useSelector(state => state.numberOfTasks)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch({
      type:'SET_NUMBER_OF_TASKS',
      data: event.target.value
    })
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Tasks to set</FormLabel>
      <RadioGroup
        row
        aria-label="numberOfTasks" 
        name="tasks1" 
        value={value} 
        onChange={handleChange}>
        <FormControlLabel value="1" control={<Radio />} label="1" />
        <FormControlLabel value="2" control={<Radio />} label="2" />
        <FormControlLabel value="3" control={<Radio />} label="3" />
        <FormControlLabel value="4" control={<Radio />} label="4" />
        <FormControlLabel value="5" control={<Radio />} label="5" />
      </RadioGroup>
    </FormControl>
  )
}

export default NumberForm

/* dropdown menu

    <FormControl variant="outlined">
      <InputLabel shrink htmlFor="outlined-tasks-native-simple">
          Tasks
      </InputLabel>
      <Select
        native
        value={state}
        onChange={handleChange}
        label="Tasks"
        inputProps={{
          name: 'numberOfTasks',
          id: 'outlined-tasks-native-simple',
        }}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </Select>
    </FormControl>
    */