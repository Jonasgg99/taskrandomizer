import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl'
import { useSelector, useDispatch } from 'react-redux';
import { changeSelection } from '../reducers/selectionReducer'
import Box from '@material-ui/core/Box'

const TaskTypeSelection = (props) => {
  const dispatch = useDispatch()
  const selection = useSelector(state => state.selection[props.index])

  const handleChange = (event) => {
    if (event.target.value === "Add") {
      console.log('add');
    } else {
    dispatch(changeSelection(event.target.value, props.index))
    }
  }

  const categories = useSelector(state => state.categories)

  return (
    <Box>
      <FormControl variant="outlined" margin="normal">
        <InputLabel shrink htmlFor="outlined-tasks-native-simple">
            Category
        </InputLabel>
        <Select
          native
          value={selection}
          onChange={handleChange}
          label="Category"
          inputProps={{
            name: 'categoryselect',
            id: 'outlined-tasks-native-simple',
          }}
        >
          <option value="Any">Any</option>
          {categories.map(category => 
              <option key={category.name} value={category.name}>{category.name}</option>
          )}
          <option value="Add">Add Category...</option>

        </Select>
      </FormControl>
    </Box>
    
  )
}

export default TaskTypeSelection