import './App.css'
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
    },
    {
      url: 'https://thefoschini.vtexassets.com/arquivos/ids/68639897-800-800?v=638265843461930000&width=800&height=800&aspect=true',
      name: 'TRQ White Shoes',
      category: 'shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999.99
    }, 
    {
      url: 'https://thefoschini.vtexassets.com/arquivos/ids/68639897-800-800?v=638265843461930000&width=800&height=800&aspect=true',
      name: 'TRQ White Shoes',
      category: 'shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999.99
    }, 
    {
      url: 'https://thefoschini.vtexassets.com/arquivos/ids/68639897-800-800?v=638265843461930000&width=800&height=800&aspect=true',
      name: 'TRQ White Shoes',
      category: 'shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999.99
    }, 
    {
      url: 'https://thefoschini.vtexassets.com/arquivos/ids/68639897-800-800?v=638265843461930000&width=800&height=800&aspect=true',
      name: 'TRQ White Shoes',
      category: 'shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999.99
    },
    {
      url: 'https://thefoschini.vtexassets.com/arquivos/ids/68639897-800-800?v=638265843461930000&width=800&height=800&aspect=true',
      name: 'TRQ White Shoes',
      category: 'shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999.99
    },
    {
      url: 'https://thefoschini.vtexassets.com/arquivos/ids/68639897-800-800?v=638265843461930000&width=800&height=800&aspect=true',
      name: 'TRQ White Shoes',
      category: 'shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999.99
    },
     {
      url: 'https://thefoschini.vtexassets.com/arquivos/ids/68639897-800-800?v=638265843461930000&width=800&height=800&aspect=true',
      name: 'TRQ White Shoes',
      category: 'shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999.99
    },
    {
      url: 'https://thefoschini.vtexassets.com/arquivos/ids/68639897-800-800?v=638265843461930000&width=800&height=800&aspect=true',
      name: 'TRQ White Shoes',
      category: 'shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999.99
    },
    {
      url: 'https://thefoschini.vtexassets.com/arquivos/ids/68639897-800-800?v=638265843461930000&width=800&height=800&aspect=true',
      name: 'TRQ White Shoes',
      category: 'shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999.99
    },
    {
      url: 'https://thefoschini.vtexassets.com/arquivos/ids/68639897-800-800?v=638265843461930000&width=800&height=800&aspect=true',
      name: 'TRQ White Shoes',
      category: 'shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999.99
    },
    {
      url: 'https://thefoschini.vtexassets.com/arquivos/ids/68639897-800-800?v=638265843461930000&width=800&height=800&aspect=true',
      name: 'TRQ White Shoes',
      category: 'shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999.99
    },
  ])
  const [cart,setCart] = useState([ ])
  const [showCart, setShowCart] = useState(false)
  const addToCart = (data) => {
    setCart([...cart, {...data, quantity:1}])
  }

const handleShow = (value)=>{
  setShowCart(value)

}
  return (
    <>
       <div>
        <Header count={cart.length} 
       handleShow={handleShow}></Header>
        {
          showCart ? 
          <CartList cart={cart}></CartList> :
          <ProductList product={product} addToCart={addToCart}></ProductList>
        }
        
        
       </div>
    </>
  )
}

export default App
