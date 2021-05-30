import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { newsData } from '../data'

function NewsSlider() {
    return (
        <section className='padding-bottom'>
            <div className="container">
                <div className="section-heading">
                    <h3 class="section-title">Yangiliklar</h3>
                </div>
                <OwlCarousel 
                    className='slider-news-owl owl-carousel owl-theme owl-loaded owl-drag'
                    loop 
                    items='2.5' 
                    margin={10} 
                    autoplay 
                    nav 
                    dots={false} 
                    navText={['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']}
                >
                    {newsData.map(item => {
                        return (
                            <div className="item">
                                <a href="https://olcha.uz/oz/blog/view/samsung-galaxy-z-flip-3-kachestvennye-rendery-i-podrobnosti-o-smartfone" className="box-news">
                                    <img className="back" src={item.img}/>
                                    <div className="gradient"></div>
                                    <div className="text">
                                        <div className="top-text"></div>
                                        <h6 className="title">{item.title}</h6>
                                        <p className="bottom-text">{item.date}</p>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </OwlCarousel>
            </div>
        </section>
    )
}

export default NewsSlider
