import { useHistory } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import React from 'react'

const BottomNav = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push("daily")
  }

  return (
    <BottomNavigation
    showLabels
    value="Main"
    onChange={(event, newValue) => {
      history.push(`/${newValue}`)
    }}
  >
    <BottomNavigationAction label="Main" value="test" />
    <BottomNavigationAction label="Manage" value="manage" />
  </BottomNavigation>
  )
}

export default BottomNav