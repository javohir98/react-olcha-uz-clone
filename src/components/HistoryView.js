import React from 'react'
import { useSelector } from 'react-redux'

function HistoryView() {
    const history = useSelector(state => state.history.historyItems)

    return (
        <section className='padding-bottom' style={{display: history.length ? "block" : "none"}}>
            <div className="container">
                <header class="section-heading">
                    <h3 class="section-title">Ko`rish tarixi</h3>
                </header>
                <div className="watched-wrap scroll-horizontal">
                    {history.map(item => {
                        return (
                            <a href="https://olcha.uz/oz/product/view/stiralnaya-mashina-lg-f2j6nn8s" class="item-watched">
                                <img class=" ls-is-cached lazyloaded" data-src={item.img} alt={item.title} src={item.img}/>
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default HistoryView
