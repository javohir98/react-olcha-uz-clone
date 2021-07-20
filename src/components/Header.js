import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
    const [activeSun, setActiveSun] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const cart = useSelector(state => state.cartItems.cardProducts)

    function a() {
        setActiveSun(!activeSun)
        document.body.classList.toggle('dark-mode')
    }

    return (
        <>
            <span class={isActive ? 'body-overlay show' : 'body-overlay'}></span>
            <header className='section-header' id={activeSun?'true':'false'}>
                <div className="container">
                    <nav className="navbar navbar-top navbar-light border-bottom">
                        <div class="nav language">
                            <a href="/oz" class="nav-link  current "> O‘zb </a>
                            <span class="divide">|</span>
                            <a href="/uz" class="nav-link "> Ўзб </a>
                            <span class="divide">|</span>
                            <a href="/" class="nav-link "> Рус </a>
                        </div>
                        <div class="navbar-right">
                            <ul class="nav nav-info">
                                <li><a href="#" class="nav-link"> Muddatli to’lov </a></li>
                                <li><a href="#" class="nav-link"> Chegirmalar </a></li>
                                <li><a href="#" class="nav-link"> Yetkazib berish </a></li>
                                <li><a href="#" class="nav-link"> Yordam </a></li>
                                <li><a href="#" class="nav-link js-compare-link text-danger"> Taqqoslash </a>
                                </li>
                            </ul>
                            <div class={activeSun?'dark-mode-button dark':'dark-mode-button'} onClick={a}>
                                <div class="shape"></div>
                                <div class="sun"></div>
                            </div>
                        </div>
                    </nav>
                    <section className="header-main">
                        <div className="row row-sm">
                            <div className="col-5 col-lg col-sm-5 col-md col-brand">
                                <Link to='/' className='brand-wrap'>
                                    <img class="logo" alt="Лого сайта olcha.uz" src="https://olcha.uz/dist/images/logo.svg"/>
                                </Link>
                            </div>
                            <div className="col col-lg col-sm col-md col-menu">
                                <div class="category-wrap dropdown">
                                    <button type="button" aria-label="Каталог" class={`btn js-btn-megamenu btn-primary ${isActive? 'active':''}`} onClick={() => setIsActive(!isActive)}>
                                        <i class={isActive?"fas fa-times":"fas fa-bars"}></i> 
                                        {/* <i class=></i>  */}
                                        <span class="text font-weight-bold">Каталог</span>
                                    </button>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-xl col-md-4 col-sm-7 col-search">
                                <form action="https://olcha.uz/oz/search" className='search' name='search'>
                                    <div className="input-group w-100">
                                        <input type="text" name="q" id="main-search" className='form-control js-top-search' placeholder='Mahsulotlar aro qidiruv' autoComplete='off' />
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" aria-label="Поиск" type="submit">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-7 col-lg col-md col-widgets">
                                <div class="widgets-wrap" style={{textAlign: 'right'}}>
                                    <div class="dropdown d-inline-block">
                                        <span style={{cursor: 'pointer'}} class="btn" data-toggle="dropdown"> <i class="far fa-user"></i> <span class="text">Kirish</span> </span>
                                        <div class="dropdown-menu" style={{zIndex:'999999'}}>
                                            <p class="px-3 my-1 small text-muted">Maxsulotlarni xarid qilish va ularni kuzatib borish uchun kiring</p>
                                            <a class="dropdown-item" href="#"> <i class="feather icon-log-in"></i> Kirish                                                </a>
                                            <a class="dropdown-item" href="#"> <i class="feather icon-user-plus"></i> Registratsiyadan o‘tish                                                </a>
                                        </div>
                                    </div>
                                    <a rel="nofollow" href="#" class="btn"> 
                                        <i class="far fa-heart"></i> <span class="text">Tanlangan</span>
                                    </a>
                                    <Link rel="nofollow" to="/cart" class="btn / cart-link"> 
                                    <i class="fas fa-shopping-cart"></i> <span class="text">Savatcha</span> <b class="notify js-basket-num">{cart.length}</b>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <nav className="navbar navbar-main justify-content-center navbar-light navbar-expand">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link" style={{color:'#f50000'}} href="#">hyperX</a></li>
                            <li class="nav-item"><a class="nav-link" style={{color:'#034ea2'}} href="#">Samsung</a></li>
                            <li class="nav-item"><a class="nav-link" style={{color:'#ffa200'}} href="#">Xiaomi</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Remont va qurilish</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Sport anjomlari</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Chegirmalar</a></li>
                            <li class="nav-item"><a class="nav-link" style={{color:'#ff0000'}} href="#">Parfyumeriya</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Oshxona buyumlari</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
