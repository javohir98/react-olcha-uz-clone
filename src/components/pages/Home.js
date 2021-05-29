import React from 'react'
import Banner from '../Banner'
import CategorySlider from '../CategorySlider'
import ProductSlider from '../ProductSlider'
import SectionDeal from '../SectionDeal'

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
            <CategorySlider />
            <SectionDeal />
            <ProductSlider 
                section_title="Chegirmali muddatli to'lov"
                type='discount'
            />
        </>
    )
}

export default Home
