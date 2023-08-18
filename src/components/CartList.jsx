import React, { useEffect, useState } from 'react'
import '../App.css'


export const CartList = ({ cart }) => {

  const [CART, setCART] = useState([])

  useEffect(() => {
    setCART(cart)
  }, [cart])
  return (
    <div>
      {
        CART?.map((cartItem, cartindex) => {
          return (
            <div>
              <img src={cartItem.url} with={30} />
              <span>{cartItem.name}</span>

              <button onClick={() => {
                const _CART = CART.map((item, index)=> {
                  return cartindex === index ? {...item, quantity: quantity > 0 ? item.quantity -1 : 0 } : item
                })
                setCART(_CART)
              }}
              
              >-</button>
              <span>{cartItem.quantity}</span>
              <button onClick={() => {
                const _CART = CART.map((item, index)=> {
                  return cartindex === index ? {...item, quantity: quantity + 1 } : item
                })
                setCART(_CART)
              }}
              >+</button>
              <span>R {cartItem.price * cartItem.quantity}</span>

            </div>
          )
        })
      }
      <p>Total  <span></span>
        {
          CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
        }
      </p>
    </div>
  )
}
