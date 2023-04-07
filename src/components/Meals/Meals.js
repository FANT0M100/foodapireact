import React, { Fragment } from 'react'
import MealsSummary from './MealsSummary'
import Availablemeals from './Availablemeals'

const Meals = () => {
  return (
    <Fragment>
        <MealsSummary />
        <Availablemeals />
    </Fragment>
  )
}

export default Meals
