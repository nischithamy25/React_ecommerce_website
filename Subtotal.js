import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
  return (
    <div>
        <div className="subtotal">
          
            <CurrencyFormat 
            renderText = {(value) => (
                <>
                <p>Subtotal (0 items):<strong>$0</strong></p>
                <small className="subtotal_gift">
                    <input type="checkbox" />This is the gift
                </small>
                </>

            )}
             decimalScale={2}
             value={0}
             displayType={'text'}
             thousandSeparator={'true'}
            />
            <button>Proceed to checkout</button>
        </div>
    </div>
  )
}

export default Subtotal