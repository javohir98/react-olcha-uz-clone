import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { productData } from '../data';

function ProductSlider({ section_title, type, autoplay }) {
    
    return (
        <section className='padding-bottom'>
            <div className="container">
                <header className="section-heading">
                    <Link to=''>
                        <h3 className='section-title'>{section_title}</h3>
                    </Link>
                </header>
                <OwlCarousel className="slider-popular-items-ow owl-carousel owl-theme owl-loaded owl-drag" loop items='5.5' margin={10} autoplay={autoplay} nav dots={false} navText={['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']}>
                    {productData.map(item => {
                        if(item.type == type) {
                            return (
                                <div className="item">
                                    <article className='card-product-grid'>
                                        <a href='https://olcha.uz/oz/product/view/vivo-x60-pro-5g-12256gb-shimmer-blue' className='img-wrap'>
                                            <img className=" ls-is-cached lazyloaded" data-src={item.img} alt="Vivo X60 Pro 5G 12/256GB, Shimmer Blue" src={item.img}/>
                                        </a>
                                        <div className="info-wrap">
                                            <a href="https://olcha.uz/oz/category/telefony-gadzhety-aksessuary/telefony" className="name-category">{item.nameCategory}</a>
                                            <a href="https://olcha.uz/oz/product/view/vivo-x60-pro-5g-12256gb-shimmer-blue" className="title">
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
                {/* {productData.map(item => {
                    if(item.type == 'trend') {
                        return <img src={item.img}/>
                    }
                })} */}
            </div>
        </section>
    )
}

export default ProductSlider
