import React from 'react'
import '../App.css'

export const ProductList = ({product}) => {
  return ( 
    <div className='flex'>
     {
        product.map((productItem,productionIndex) =>{
            return(
                <div style={{width:'30%'}}>
                    <div className='product-item'>
                        <img src={productItem.url} width="100%"/>
                        <p>{productItem.name} | {productItem.category }</p>
                        <p>{productItem.seller}</p>
                        <p>R {productItem.price} /-</p>
                        <button onClick={()=> addToCart(productItem)}>Add To Cart</button>
                    </div>
                </div>
            )
        })
     }
        
    </div>
  )
}
