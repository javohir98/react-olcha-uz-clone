import React from 'react'
import CartCheckout from './CartCheckout'
import CartList from './CartList'

function CartContent() {
    return (
        <div className='row'>
            <CartList />
            <CartCheckout />
        </div>
    )
}

export default CartContent
