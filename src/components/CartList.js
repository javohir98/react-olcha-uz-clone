import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteFromCart } from '../redux/actions/productAction'
import { useDispatch } from 'react-redux'

const CartList = () => {
    const cart = useSelector(state => state.cartItems.cardProducts)
    const dispatch = useDispatch()

    return (
        <main className='col-md-9 js-cart-rows'>
            {cart.map(item => {
                const { id, img, nameCategory, title, price} = item;
                return (
                    <article className='card card-body item-shopping-cart' key={id}>
                        <div className='row align-items-center'>
                            <div className="col-md-6">
                            <figure className="itemside">
                                <div className="aside"><img src={img} className="border img-sm" /></div>
                                <figcaption className="info">
                                    <span className="text-muted">{nameCategory}</span>
                                    <Link to={`/product/${id}`} className="title h6"> {title} </Link>
                                </figcaption>
                            </figure>
                            </div>
                            <div className="col">
                                <div className="input-group input-spinner">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-light / js-change-qty" type="button" data-qty="2" data-rowid="739f207a067feb40601155efc5ef53e8">
                                            <i className="fas fa-plus"></i></button>
                                    </div>
                                    <input type="text" className="form-control / js-cart-quantity" value="1" data-id="739f207a067feb40601155efc5ef53e8"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-light disabled / js-change-qty" data-qty="0" type="button" data-rowid="739f207a067feb40601155efc5ef53e8" disabled=""><i className="fas fa-minus"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="price h5"> {price} сум </div>
                            </div>
                            <div className="col flex-grow-0 text-right">
                                <a href="javascript:void(0)" className="btn btn-light / js-remove" data-rowid="739f207a067feb40601155efc5ef53e8" onClick={() => dispatch(deleteFromCart(id))}> <i className="fas fa-times"></i> </a>
                            </div>
                        </div>
                    </article>
                )
            })}
            
        </main>
    )
}

export default CartList