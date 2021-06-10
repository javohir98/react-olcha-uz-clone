import React from 'react'
import { Link } from 'react-router-dom'

function EmtyCart() {
    return (
        <div className='text-center'>
            <main className="col-md-12">
                <div className="static-page text-muted">
                    <div className="mb-5">
                        <i className="fas fa-shopping-cart" style={{fontSize:'150px'}}></i>
                    </div>
                    <h3 className="static-page__title">Savatchangiz bo’shmi? Bu muammo emas!</h3>
                    <p className="static-page__info">Bizning keng assortimentga ega katalogalrimizdan o’z mahsulotingizni tanlang.</p>
                    <Link to='/' className ="btn btn-primary text-uppercase mb-5">Xaridni boshlash</Link>
                </div>
            </main>
        </div>
    )
}

export default EmtyCart
