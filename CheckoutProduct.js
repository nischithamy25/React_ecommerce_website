import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct() {
  return (
    <div>
        <div className="checkoutProduct">
            <img src="https://www.ourshopee.com/ourshopee-img/ourshopee_products/9781945381.jpg" alt="" className="checkoutProduct_image" />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct title"> The iron is the small appliance used to remove wrinkles from fabric</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>20</strong>
                </p>
                <div className="checkoutProduct_rating">⭐ </div>
                <button>Remove from basket</button>
            </div>


        </div>
    </div>
  )
}

export default CheckoutProduct