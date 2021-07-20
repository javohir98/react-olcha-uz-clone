import React from 'react'
import { productData } from '../data'
import deal from '../img/deal.png'


function SectionDeal() {
    return (
        <section className='padding-bottom pt-4'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-12">
                        <article className='card bg-danger mb-4 mb-lg-0 text-white' style={{height: '100%'}}>
                            <div className="card-body">
                                <header style={{position: 'sticky',top: '10px'}}>
                                    <h3>Muddatli to'lov</h3>
                                    <p class="font-weight-bold">Bank kreditisiz va penyasiz </p>
                                    <a href="https://olcha.uz/oz/installments" className="">
                                        <img src={deal} alt="Muddatli to'lov" style={{maxWidth:'100%'}}/>
                                    </a>
                                    <div class="clearfix mb-3"></div>
                                    <a href="https://olcha.uz/oz/installments" className="btn btn-outline-light">Barchasini ko'rish</a>
                                </header>                                
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-9 col-sm-12">
                        <a href="#" style={{color: '#212529'}}>
                            <h4 class="mb-4">Chegirmalar</h4>
                        </a>
                        <div className="row-sm">
                            {productData.map(item => {
                                if(item.type == 'deal') {
                                    return (
                                        <div className="col-lg-3 col-md-3 col-6" key={item.id}>
                                            <article className='card-product-grid mb-0'>
                                                <a href="#" className="img-wrap">
                                                    <img className=" ls-is-cached lazyloaded" data-src={item.img} alt={item.title} src={item.img}/>
                                                </a>
                                                <div className="info-wrap">
                                                    <a href="#" className="title">Samsung Galaxy Buds Live Bronze </a>
                                                    <div className="price-wrap">
                                                        <small className="monthly">{item.monthly===0?' ': `${item.monthly} so‘m/oy`}</small>
                                                        <br/>
                                                        <span className="small  text-red" style={{textDecoration: 'line-through'}}>{item.discountPrice} so‘m</span>
                                                        <br/>
                                                        <span className="price">{item.price} so‘m</span>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionDeal
