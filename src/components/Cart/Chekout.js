import React, { useRef, useState } from 'react'
import classes from './Chekout.module.css'

const isEmpty = value => value.trim() === ''
const isFiveChars = value => value.trim().length === 5

const Chekout = (props) => {
    const [formInputsValidity, setFormInoputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })

    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalCodeInputRef = useRef()
    const cityInputRef = useRef()

    const confirmHandler = (e) => {
        e.preventDefault()

        const enteredName = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostalCode = postalCodeInputRef.current.value
        const enteredCity = cityInputRef.current.value

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredCityIsValid = !isEmpty(enteredCity)
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode)
        
        setFormInoputsValidity({
            name: enteredCityIsValid,
            street: enteredCityIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        })

        const formIsValid = enteredNameIsValid && enteredCityIsValid && enteredStreetIsValid && enteredPostalCodeIsValid;

        if(formIsValid) {
            return;
        }

        //submit card data
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity
        })
    }

    const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`
    const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`
    const postalCodeControlClasses = `${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`
    const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
    <div className={nameControlClasses}>
      <label htmlFor='name'>Your Name</label>
      <input type='text' id='name' ref={nameInputRef}/>
      {!formInputsValidity.name && <p>Please enter a valid name</p>}
    </div>
    <div className={streetControlClasses}>
      <label htmlFor='street'>Street</label>
      <input type='text' id='street' ref={streetInputRef}/>
      {!formInputsValidity.street && <p>Please enter a valid Street</p>}
    </div>
    <div className={postalCodeControlClasses}>
      <label htmlFor='postal'>Postal Code</label>
      <input type='text' id='postal' ref={postalCodeInputRef}/>
      {!formInputsValidity.postalCode && <p>Please enter a valid postal code (min 5 characters)</p>}
    </div>
    <div className={cityControlClasses}>
      <label htmlFor='city'>City</label>
      <input type='text' id='city' ref={cityInputRef}/>
      {!formInputsValidity.city && <p>Please enter a valid city</p>}
    </div>
    <div className={classes.actions}>
      <button type='button' onClick={props.onCancel}>
        Cancel
      </button>
      <button className={classes.submit}>Confirm</button>
    </div>
  </form>
  )
}

export default Chekout
