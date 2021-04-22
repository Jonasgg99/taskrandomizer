import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button'

const AlertDialog = ({content, confirm, cancel, open}) => {

  return (
    <div>
      <Dialog
        open={open}
        onClose={cancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{content.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancel} color="primary">
            Cancel
          </Button>
          <Button onClick={confirm} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}

export default AlertDialog