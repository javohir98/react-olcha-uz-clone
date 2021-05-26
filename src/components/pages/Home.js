import React from 'react'
import Banner from '../Banner'
import ProductSlider from '../ProductSlider'

function Home() {
    return (
        <>
            <Banner /> 
            <ProductSlider 
                section_title='Ko‘p tanlangan mahsulotlar'
                type='trend'
                autoplay
            />
            <ProductSlider 
                section_title='Yangi mahsulotlar'
                type='new'
            />
        </>
    )
}

export default Home
