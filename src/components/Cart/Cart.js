import React, { useContext, useState } from 'react'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import Chekout from './Chekout'

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false)
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }
    
    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item)
    }

    const orderHandler = () => {
        setIsCheckout(true)
    }

    const submitOrderHandler = (userdata) => {
        fetch('https://react-http-5ea5e-default-rtdb.europe-west1.firebasedatabase.app/order.json', {
            method: "POST",
            body: JSON.stringify({
                user: userdata,
                orderItems: cartCtx.items
            })
        });
    }

    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
            <CartItem 
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
        ))}</ul>
   
    const modalAction = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Closse</button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>
    )

  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>

        {isCheckout && <Chekout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
        {!isCheckout && modalAction}
    </Modal>
  )
}

export default Cart
