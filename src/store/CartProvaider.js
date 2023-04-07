import React, { useReducer } from 'react'
import CartContext from './cart-context'


const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartreducer = (state, action) => {
  if(action.type === 'ADD'){
    const updatedItems = state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
}

const CartProvaider = (props) => {

  const [cartState, dispachCartAction] = useReducer(cartreducer, defaultCartState)

    const addItemToCartHandler = (item) => {
      dispachCartAction({
        type: 'ADD',
        item: item
      })
    }

    const removeItemFromCartHandler = (id) => {
      dispachCartAction({
        type: 'REMOVE',
        id: id
      })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvaider
