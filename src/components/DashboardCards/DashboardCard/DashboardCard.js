import React from 'react'
import classes from './DashboardCard.module.css'
const DashboardCard = ({ heading, count }) => {
  return (
    <div className={classes.dashboardCard}>
      <h4>{heading}</h4>
      <h2>{count}</h2>
      <p>Candidates</p>
    </div>
  )
}
export default DashboardCard