import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { productData } from '../data'

function SectionWhy() {
    return (
        <section className='padding-bottom'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <article className="card card-why bg-info text-white" style={{height:'100%'}}>
                            <div className="card-body" style={{backgroundColor:'#3167eb'}}>
                                <h3 className="mb-4">Nima uchun Olcha.uz?</h3>
                                <ul className="list-why list-unstyled">
                                    <li> <a className="text-white" href="https://olcha.uz/oz/page/payment-and-delivery"><i className="icon fa fa-truck fa-lg"></i> Yetkazib berish</a></li>
                                    <li><a className="text-white" href="https://olcha.uz/oz/page/return-and-exchange"><i className="icon fa fa-shield-alt  fa-lg"></i> Sifat kafolati</a></li>
                                    <li><a className="text-white" href="https://olcha.uz/oz/page/usloviya-rassrochki"><i className="icon fa fa-credit-card  fa-lg"></i> Oson to’lov</a></li>
                                    <li><a className="js-callback-toggler text-white"><i className="icon fa fa-phone  fa-lg"></i> Qo’llab quvvatlash markazi</a></li>
                                    <li><a className="text-white" href="https://olcha.uz/oz/page/eco-friendly"><i className="icon fa fa-sync-alt  fa-lg"></i> Eco-friendly</a></li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-8">
                        <h4 class="mb-4">Sizga kerak bo’lishi mumkin</h4>
                        <OwlCarousel className="slider-popular-items-ow owl-carousel owl-theme owl-loaded owl-drag" loop items='3.5' margin={10} autoplay nav dots={false} navText={['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']}>
                            {productData.map(item => {
                                if(item.type == 'why') {
                                    return (
                                        <div className="item">
                                            <article className='card-product-grid'>
                                                <a href='#' className='img-wrap'>
                                                    <img className=" ls-is-cached lazyloaded" data-src={item.img} alt={item.title} src={item.img}/>
                                                </a>
                                                <div className="info-wrap">
                                                    <a href="#" className="name-category">{item.nameCategory}</a>
                                                    <a href="#" className="title">
                                                        {item.title}
                                                    </a>
                                                    {/* <div class="rating-stars js-rateyo pl-0 jq-ry-container" data-rating="0" readonly="readonly" style="width: 80px;"><div class="jq-ry-group-wrapper"><div class="jq-ry-normal-group jq-ry-group"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" width="16px" height="16px" fill="gray"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon></svg><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" width="16px" height="16px" fill="gray" style="margin-left: 0px;"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon></svg><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" width="16px" height="16px" fill="gray" style="margin-left: 0px;"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon></svg><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" width="16px" height="16px" fill="gray" style="margin-left: 0px;"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon></svg><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" width="16px" height="16px" fill="gray" style="margin-left: 0px;"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon></svg></div><div class="jq-ry-rated-group jq-ry-group" style="width: 0%;"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" width="16px" height="16px" fill="#CA0828"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon></svg><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" width="16px" height="16px" fill="#CA0828" style="margin-left: 0px;"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon></svg><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" width="16px" height="16px" fill="#CA0828" style="margin-left: 0px;"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon></svg><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" width="16px" height="16px" fill="#CA0828" style="margin-left: 0px;"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon></svg><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" width="16px" height="16px" fill="#CA0828" style="margin-left: 0px;"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "></polygon></svg></div></div></div> */}
                                                    <div className="price-wrap">
                                                        <small className="monthly">{item.monthly==0?' ': `${item.monthly} so‘m/oy`}</small>
                                                        <br />
                                                        <span className="small  text-red" style={{textDecoration:'line-through'}}>{item.discountPrice==0 ? '&nbsp;' : `${item.discountPrice} so‘m`}</span>
                                                        <div className="actual h5">{item.price} so‘m</div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    )
                                }
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionWhy
