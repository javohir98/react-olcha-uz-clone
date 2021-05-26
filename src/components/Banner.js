import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import b1 from '../img/main-banner/b1.png'
import b2 from '../img/main-banner/b2.png'
import b3 from '../img/main-banner/b3.png'
import br from '../img/main-banner/br.png'

function Banner() {
    return (
        <section className='section-intro padding-top-sm pb-4'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-sm-7">
                        <OwlCarousel className='slider-main owl-carousel owl-theme owl-loaded owl-drag' loop items='1' margin={10} autoplay dots={false} nav navText={['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']}>
                            <div className='item'>
                                <article className="item-slide" style={{backgroundImage: 'linear-gradient(113.32deg, #FFF5C4 13.37%, #F5E79A 95.3%)'}}>
                                    <div className="aside">
                                        <img className="lazyloaded" data-src={b1} alt="Atirlar muddatli to'lovga" style={{mixBlendMode:'unset'}} src={b1}/>                                                               
                                    </div>
                                    <div className="info">
                                        <h2 className="title">Atirlar muddatli to'lovga</h2>
                                        <p>Barchasi asl "Original"</p>
                                        <a href="https://olcha.uz/oz/category/krasota-i-zdorove/parfyumeriya" className="btn btn-outline-dark">Sotib olish</a>
                                    </div>
                                </article>
                            </div>
                            <div className='item'>
                                <article className="item-slide" style={{backgroundImage: 'linear-gradient(113.32deg, #FFF5C4 13.37%, #F5E79A 95.3%)'}}>
                                    <div className="aside">
                                        <img className="lazyloaded" data-src={b2} alt="Atirlar muddatli to'lovga" style={{mixBlendMode:'unset'}} src={b2}/>                                                               
                                    </div>
                                    <div className="info">
                                        <h2 className="title">Tezkor muddatli to'lov</h2>
                                        <p>Butun O'zbekiston bo'ylab. Pasport va to'lov kartasi bo'lsa kifoya.</p>
                                        <a href="https://olcha.uz/oz/category/krasota-i-zdorove/parfyumeriya" className="btn btn-outline-dark">Sotib olish</a>
                                    </div>
                                </article>
                            </div>
                            <div className='item'>
                                <article className="item-slide" style={{backgroundImage: 'linear-gradient(113.32deg, #FFF5C4 13.37%, #F5E79A 95.3%)'}}>
                                    <div className="aside">
                                        <img className="lazyloaded" data-src={b3} alt="Atirlar muddatli to'lovga" style={{mixBlendMode:'unset'}} src={b3}/>                                                               
                                    </div>
                                    <div className="info">
                                        <h2 className="title">Avto jihozlar</h2>
                                        <p>Avtomobilingizga yangi nafas bering, butun O'zbekiston bo'ylab yetkazib beramiz.</p>
                                        <a href="https://olcha.uz/oz/category/krasota-i-zdorove/parfyumeriya" className="btn btn-outline-dark">Sotib olish</a>
                                    </div>
                                </article>
                            </div>
                        </OwlCarousel>
                    </div>
                    <aside className='col-lg-3 col-sm-5'>
                    <div className="card-banner bg-gradient-pink" style={{height:'380px'}}>
        
                        <article className="card-body text-white text-center">
                            <h2 className="mt-3">Zalman</h2>
                            <p>kompyuter qurilmalari</p>
                            <img data-src="/uploads/right_advertise_oz/KK/KK/KE/1599894362.png" className="mb-4 w-100 lazyloaded" alt="Zalman" src={br}/>
                            
                            <a href="https://olcha.uz/oz/manufacturer/zalman" className="btn btn-outline-light"> Batafsil </a>
                        </article>

                    </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default Banner
