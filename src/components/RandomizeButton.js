import React from 'react'
import Button from '@material-ui/core/Button'
import CasinoIcon from '@material-ui/icons/Casino'
import { useHistory } from 'react-router-dom'

const RandomizeButton = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push("/daily")
  }

  return (
    <Button 
      variant="contained"
      color="primary"
      size="large"
      startIcon={<CasinoIcon />}
      onClick={handleClick}
    >
      Randomize
    </Button>
  )
}

export default RandomizeButton
