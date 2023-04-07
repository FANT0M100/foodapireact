import React from 'react'
import classes from './Chekout.module.css'

const Chekout = (props) => {
  return (
    <form className={classes.form}>
    <div className={classes.control}>
      <label htmlFor='name'>Your Name</label>
      <input type='text' id='name' />
    </div>
    <div className={classes.control}>
      <label htmlFor='street'>Street</label>
      <input type='text' id='street' />
    </div>
    <div className={classes.control}>
      <label htmlFor='postal'>Postal Code</label>
      <input type='text' id='postal' />
    </div>
    <div className={classes.control}>
      <label htmlFor='city'>City</label>
      <input type='text' id='city' />
    </div>
    <div className={classes.actions}>
      <button type='button'>
        Cancel
      </button>
      <button className={classes.submit}>Confirm</button>
    </div>
  </form>
  )
}

export default Chekout
