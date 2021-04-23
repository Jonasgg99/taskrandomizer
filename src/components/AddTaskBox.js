import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl'
import { useSelector, useDispatch } from 'react-redux';
import { changeSelection } from '../reducers/selectionReducer'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add';
import CasinoIcon from '@material-ui/icons/Casino'
import { useQuery } from '@apollo/client'
import { ALL_TASKS, ALL_CATEGORIES } from '../graphql/queries';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';


const AddTaskBox = (props) => {
  const dispatch = useDispatch()
  const selection = useSelector(state => state.selection[props.index])
  const tasks = useSelector(state => state.tasks)
  const dailyTasks = useSelector(state => state.dailyTasks)
  const allTasks = useQuery(ALL_TASKS).data.allTasks
  const allCategories = useQuery(ALL_CATEGORIES).data.allCategories

  let possibleTasks = []

  const handleChange = (event) => {
    if (event.target.value === "Add") {
      console.log('add');
    } else {
    dispatch(changeSelection(event.target.value, props.index))
    }
  }

  const categories = useSelector(state => state.categories)

  const randomize = (array) => {
    const random = Math.floor(Math.random() * array.length)
    const selectedEntry = array[random]

    return selectedEntry
  }

  possibleTasks = allTasks.filter(task => 
    !dailyTasks.map(a => a.name).includes(task.name))

    if (selection !== "Any") {
      possibleTasks = possibleTasks.filter(task => task.category === selection)
    }
    

  const onClick = () => {
      
      const task = randomize(possibleTasks)
    if (task) {
      dispatch({type:'ADD_DAILYTASK', data:task})
    }
  }

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
          {allCategories.map(category => 
              <option key={category.name} value={category.name}>{category.name}</option>
          )}
          <option value="Add">Add Category...</option>

        </Select>
      </FormControl>
      <Button variant="contained"
      color="primary"
      size="large"
      startIcon={<CasinoIcon />}
      onClick = {onClick}></Button>

      <List dense>
        {possibleTasks.map(task =>
        
          <ListItem key={task.name}>
            <IconButton size="small" color="primary" onClick={()=> {dispatch({type:'ADD_DAILYTASK', data:task})}}><AddIcon /></IconButton>
            <ListItemText
              onClick={()=> {dispatch({type:'ADD_DAILYTASK', data:task})}}
              primary={task.name}
            />
          </ListItem>)}
      </List>
    </Box>
    
  )
}

export default AddTaskBox
//Add parts to tasks and render down arrow for these