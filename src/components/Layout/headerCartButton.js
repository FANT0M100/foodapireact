import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'


const HeaderCartButton = (props) => {
   
  const [btnishiglight, setbtnIsHiglight] = useState(false)
  const cartCtx = useContext(CartContext)

  const { items } = cartCtx;

  const numberOfCartItmes = items.reduce((curNumber, item) => curNumber + item.amount, 0);

  const btnClasses = `${classes.button} ${btnishiglight ? classes.bump : ''}`

  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setbtnIsHiglight(true)

    const timer = setTimeout(() => {
      setbtnIsHiglight(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItmes}</span>
    </button>
  )
}

export default HeaderCartButton
