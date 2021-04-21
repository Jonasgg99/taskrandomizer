import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { List } from '@material-ui/core'

import { gql, useMutation } from '@apollo/client'
import { CREATE_TASK } from '../graphql/mutations'
import { ALL_TASKS } from '../graphql/queries'

const TaskManager = ({tasks}) => {
  const [category, setCategory] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [newTaskName, setNewTaskName] = useState('')

  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: [ { query: ALL_TASKS } ]
  })
  const allCategories = useSelector(state => state.categories)

  const tasksToShow = tasks.filter(task => task.category === category)

  useEffect(() => {
    const storedCategory = window.localStorage.getItem('manageCategory');
    if (storedCategory) {
      setCategory(JSON.parse(storedCategory))
    }
  }, [])

  return (
    <div>
      <FormControl variant="outlined" margin="normal">
        <InputLabel shrink htmlFor="outlined-tasks-native-simple">
            Category
        </InputLabel>
        <Select
            native
            value={category}
            onChange={(event) => {
              setCategory(event.target.value)
              window.localStorage.setItem(
                'manageCategory', JSON.stringify(event.target.value)
              )
              setShowForm(false)
              setNewTaskName('')
            }}
            label="Category"
            inputProps={{
              name: 'categoryselect',
              id: 'outlined-tasks-native-simple',
            }}
          >
            <option value="" />
            {allCategories.map(category => 
                <option key={category.name} value={category.name}>{category.name}</option>
            )}
            <option value="Add">Add Category...</option>

          </Select>
        </FormControl>
        <List>
        {tasksToShow.map(task =>
          <li key={task.name}>{task.name}</li>  
        )}
        </List>

        {showForm
        ? <form onSubmit={(event) => {

          event.preventDefault()
          createTask({ variables: { name: newTaskName, category: category } })
          setShowForm(false)
          setNewTaskName('')

          
        }}>
          <TextField 
            label="Task" 
            value={newTaskName} 
            onChange={(event) => {
              setNewTaskName(event.target.value)}
            }/>
          <button type="submit">Add</button>
          <button onClick={() => {setShowForm(false)}}>Cancel</button>
        </form>
        : <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>Add new task</Button>
        }
    </div>

  )
}


export default TaskManager