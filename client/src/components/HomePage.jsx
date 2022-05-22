import React from 'react'
import { Link } from 'react-router-dom'

import data from '../data'



export default function HomePage() {
    
    return (
        <div className='feature-container'>
           <h1>Featured Products</h1>
           <div className="products">
           {
               data.products.map((product, id) => (
                   <div className='product' key={id}>
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
