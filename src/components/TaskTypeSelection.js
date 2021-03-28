import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl'
import { useSelector, useDispatch } from 'react-redux';
import { changeSelection } from '../reducers/selectionReducer'
import Box from '@material-ui/core/Box'

const TaskTypeSelection = (props) => {
  const dispatch = useDispatch()
  const selection = useSelector(state => state.selection[props.index])
  const [value, setValue] = React.useState("Any")

  const handleChange = (event) => {
    dispatch(changeSelection(event.target.value, props.index))
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
              <option value={category.name}>{category.name}</option>
          )}

        </Select>
      </FormControl>
    </Box>
    
  )
}

export default TaskTypeSelection