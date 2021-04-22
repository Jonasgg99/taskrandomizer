import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle'
import { CREATE_CATEGORY } from '../graphql/mutations'
import { ALL_CATEGORIES } from '../graphql/queries'
import { useMutation } from '@apollo/client'

const AddCategoryPopup = ({open, handleClose}) => {
  const [categoryName, setCategoryName] = useState('')

  const [createCategory] = useMutation(CREATE_CATEGORY, {
    refetchQueries: [ { query: ALL_CATEGORIES } ]
  })

  const handleSubmit = () => {
    const newCat = categoryName
    createCategory({ variables: { name: categoryName } })
    setCategoryName('')
    handleClose(newCat)
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Project"
            fullWidth
            value={categoryName}
            onChange={(event) => {setCategoryName(event.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddCategoryPopup