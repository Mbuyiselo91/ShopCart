import './App.css'
import { CartList } from './components/CartList'
import Header from './components/Header'
import { ProductList } from './components/ProductList'
import { CartList } from './components/CartList' 
import { useState } from 'react'
function App() {
  const [product, setProduct] = useState([
    {
      url: 'https://thefoschini.vtexassets.com/arquivos/ids/68639897-800-800?v=638265843461930000&width=800&height=800&aspect=true',
      name: 'TRQ White Shoes',
      category: 'shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999.99
    }
  ])
  const [cart,setCart] = useState([])
  console.log(cart)
  const addToCart = (data) => {
    console.log(data)
    setCart([...cart, data])
  }
  return (
    <>
       <div>
        <Header></Header>
        <ProductList product={product}></ProductList>
        <CartList cart={cart}></CartList>
       </div>
    </>
  )
}

export default App
