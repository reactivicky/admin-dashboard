import React from 'react'
import DashboardCard from './DashboardCard/DashboardCard'
import { getUniqueData } from '../../utils'
import classes from './DashboardCards.module.css'

export const DashboardCards = ({ fakeData }) => {
  if(fakeData.length > 0) {
    const cardData = getUniqueData(fakeData)
    const { domainData, domainObject } = cardData
    return (
      <div className={classes.dashboardCards}>
        <DashboardCard heading='Total Candidates' count={fakeData.length} />
        {domainData.map((name, index) => (
          <DashboardCard key={name + index} heading={name} count={domainObject[name]} />
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default DashboardCards