import React from 'react'
import classes from './MealItem.module.css'

const Mealitem = (props) => {
  return (
    <li>
        <div><h3>{props.name}</h3></div>
        <div></div>
    </li>
  )
}

export default Mealitem
