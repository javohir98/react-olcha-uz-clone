import React from 'react'

function Footer() {
    return (
        <footer className='section-footer padding-y'>
            <div className="container">
                <div className="row">
                    <aside className="col-md-3 col-12">
                        <article className='mr-md-4'>
                            <img src="https://olcha.uz/dist/images/logo.svg" class="logo-footer mb-4" alt="logo"/>
                            <p>Olcha © 2021. Barcha huquqlar himoyalangan</p>
                        </article>
                    </aside>
                    <aside className="col-md col-12">
                        <ul class="menu-footer list-unstyled">
                            <li>
                                <a href="https://olcha.uz/oz/page/policy">Shaxsiy ma’lumotlar bilan ishlash siyosati</a>
                            </li>
                            <li><a href="https://olcha.uz/oz/help">Yordam</a>
                            </li>
                            <li>
                                <a href="https://olcha.uz/oz/page/usloviya-rassrochki">Muddatli to’lov shartlari</a>
                            </li>
                            <li>
                                <a href="https://olcha.uz/oz/page/about-company">Biz xaqimizda</a>
                            </li>
                        </ul>
                    </aside>
                    <aside className="col-md col-12">
                        <ul class="menu-footer list-unstyled">
                            <li>
                                <a href="https://olcha.uz/oz/page/public-offer">Ommaviy oferta</a>
                            </li>
                            <li>
                                <a href="https://olcha.uz/oz/page/eco-friendly">Eco-friendly</a>
                            </li>
                            <li>
                                <a href="https://olcha.uz/oz/page/payment-and-delivery">To‘lov va yetkazib berish xizmati</a>
                            </li>
                        </ul>
                    </aside>
                    <aside className="col-md-3 col-12">
                        <div class="box bg-light p-4">
                            <p class="text-lg">Ishonch raqami <br/> <strong>+998 (71) 202-202-1</strong></p>
                        </div>
                    </aside>
                </div>
            </div>
        </footer>
    )
}

export default Footer
