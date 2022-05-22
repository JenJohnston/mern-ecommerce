import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function HomePage() {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/products')
            setProducts(result.data)
        }
        fetchData()
    }, [])

    console.log(products)
    return (
        <div className='feature-container'>
           <h1>Featured Products</h1>
           <div className="products">
           {
               products.map((product, id) => (
                   <div className='product' key={product.slug}>
                       <Link to={`/product/${product.slug}`}>
                           <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
                       </Link>
                       <div className="product-info">
                          <Link to={`/product/${product.slug}`}>
                            <h4>{product.name}</h4>
                          </Link>
                          <p>${product.price}</p>
                          <button className='product-btn'>Add To Cart</button>
                       </div>
                   </div>
                   
               ))

               
           }
           </div>
        </div>
    )
}

export default HomePage
