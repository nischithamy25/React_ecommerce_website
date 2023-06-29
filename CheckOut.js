import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function CheckOut() {
  return (
    <div>
        <div className="checkout">
            <div className="checkout-left">
                 <img src="https://img.freepik.com/free-vector/burn-paper-holes-borders-heart-crown-shape_107791-16835.jpg?w=2000&t=st=1688015453~exp=1688016053~hmac=93679a7fae42a870a48db12fdca9e0e1fffd3d31995c224f88a978adae4dca6e" alt="" className="checkout_add" /> 
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                        <CheckoutProduct></CheckoutProduct>
                    </h2>
                </div>
            </div>
            <div className="checkout-right">
                <Subtotal></Subtotal>

            </div>
        </div>
    </div>
  )
}

export default CheckOut