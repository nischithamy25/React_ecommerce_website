import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import reducer from './reducer'

function Product({id,title,price,rating,image}) {
  return (
    <div>
        <div className="product">
            <div className="product_info">
                <p>{title} </p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map(()=><p>⭐</p>)
                    }
                </div>
                </div>
                <img src={image}/>
               
            
           
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    </div>
  )
}

export default Product