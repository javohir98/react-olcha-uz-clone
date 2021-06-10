import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { categoryData } from '../data';

function CategorySlider() {
    return (
        <section className='padding-bottom'>
            <div className="container">
                <header className="section-heading">
                    <h3 className="section-title">
                        Kategoriyalar
                    </h3>
                </header>
                <OwlCarousel 
                    className='slider-category-owl owl-carousel owl-theme owl-loaded owl-drag'
                    items='4.5' 
                    margin={10}
                    autoplayx    
                    nav
                    dots={false} 
                    navText={['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']}
                >
                    {categoryData.map(item => (
                        <div className="item" key={item.id}>
                            <div className="item-slide">
                                <a href="#" className="box-category icontext ">
                                    <img className="icon" alt="Maishiy texnika" src={item.img}/>
                                    <div className="text">
                                        <strong className="title">{item.title}</strong>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}

                </OwlCarousel>
            </div>
        </section>
    )
}

export default CategorySlider
