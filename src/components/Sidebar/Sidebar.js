import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={classes.navbar}>
      <p>Dashboard</p>
      <Link to="/">Logout</Link>
    </div>
  )
}
export default Sidebar