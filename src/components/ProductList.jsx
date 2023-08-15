import React from 'react'
import '../App.css'

export const ProductList = ({product}) => {
  return ( 
    <div className='flex'>
     {
        product.map((productItem,productionIndex) =>{
            return(
                <div>
                    {
                        productItem.name
                    }
                </div>
            )
        })
     }
        
    </div>
  )
}
