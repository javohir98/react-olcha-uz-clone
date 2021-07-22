import React from 'react'
import EmptyCart from '../EmtyCart'
import { useSelector } from 'react-redux'
import CartContent from '../CartContent'

function Cart() {
    const cart = useSelector(state => state.cartItems.cardProducts)
    
    return (
        <section className='section-content padding-y-sm'>
            <div className="container">
                <nav className="mb-3"><ol className="breadcrumb"><li className="breadcrumb-item"><a href="https://olcha.uz/oz">Bosh sahifa</a></li><li className="breadcrumb-item active"><a href="#">Savatcha</a></li></ol></nav>
                <header className="section-heading">
                    <h2 className="section-title">Savatcha</h2>
                </header>
                {cart.length ?<CartContent />:<EmptyCart />}
            </div>
        </section>
    )
}

export default Cart
