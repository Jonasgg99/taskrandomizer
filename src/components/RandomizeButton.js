import React from 'react'
import Button from '@material-ui/core/Button'
import CasinoIcon from '@material-ui/icons/Casino'

const RandomizeButton = () => {
  return (
    <Button 
      variant="contained"
      color="primary"
      size="large"
      startIcon={<CasinoIcon />}
    >
      Randomize
    </Button>
  )
}

export default RandomizeButton
