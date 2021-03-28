import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import { useSelector, useDispatch } from 'react-redux'

const NumberForm = () => {
  const state = useSelector(state => state.numberOfTasks)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch({
      type:'SET_NUMBER_OF_TASKS',
      data: event.target.value
    })
  }

  return (
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
  )
}

export default NumberForm