import React from 'react'

export const CartList = ({cart}) => {
  return (
    <div>
          {
          cart.map((cartItem, cartindex)=> {
            return(
              <div>
                <img src={cartItem.url} with={40} />
                <span>{cartItem.name}</span>
                <button>-</button>
                <span>{cartItem.quantity}</span>
                <button>+</button>
                <span>{cartItem.price}</span>

              </div>
            )
          })
          }
    </div>
  )
}
