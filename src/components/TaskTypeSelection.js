import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl'
import { useSelector } from 'react-redux';

const TaskTypeSelection = () => {

  const handleChange = () => {
    console.log('select');
  }

  const categories = useSelector(state => state.categories)

  return (
    <FormControl variant="outlined">
      <InputLabel shrink htmlFor="outlined-tasks-native-simple">
          Category
      </InputLabel>
      <Select
        native
        value="Any"
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
  )
}

export default TaskTypeSelection