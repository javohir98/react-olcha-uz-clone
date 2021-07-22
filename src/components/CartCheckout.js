import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function CartCheckout() {
    const cart = useSelector(state => state.cartItems.cardProducts)

    return (
        <aside className='col-md-3'>
            <div className="card">
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input type="text" class="form-control js-check-coupon-input error" name="" value="" placeholder="Promo kodni kiriting"/>
                        <span className="input-group-append">
                            <button className="btn btn-primary js-check-coupon-btn">OK</button>
                        </span>
                        <a href="#" className="m-t-5 link link--sm display-inline-block js-check-coupon-again" style={{display:'none'}}>Kodni o’zgartirish</a>
                        <div id="coupon-errors"></div>
                    </div>
                    <dl className="dlist-align">
                        <dt>Narxi:</dt>
                        <dd className="text-right / js-total-original">19 744 000 so‘m</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt>Chegirma:</dt>
                        <dd className="text-right text-danger / js-total-discount">0 so‘m</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt>Jami to’lov:</dt>
                        <dd className="text-right text-dark b">
                            <strong className="js-total-cost">19 744 000 so‘m</strong>
                        </dd>
                    </dl>
                    <hr />
                    <a href="javascript:void(0)" className="btn btn-primary btn-block"> Buyurtmani rasmiylashtirish </a>
                </div>
            </div>
        </aside>
    )
}

export default CartCheckout
