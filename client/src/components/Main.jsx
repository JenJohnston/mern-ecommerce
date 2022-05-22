import React from 'react'

import data from '../data'

export default function Main() {
    


    return (
        <main>
           <h1>Featured Products</h1>
           <div className="products">
           {
               data.products.map((product, id) => (
                   <div className='product' key={id}>
                       <a href={`/product/${product.slug}`}>
                           <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
                       </a>
                       <div className="product-info">
                          <a href={`/product/${product.slug}`}>
                            <h4>{product.name}</h4>
                          </a>
                          <p>${product.price}</p>
                          <button className='product-btn'>Add To Cart</button>
                       </div>
                   </div>
                   
               ))

              
           }
           </div>
        </main>
    )
}
