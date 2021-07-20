import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductSlider from '../ProductSlider'
import { productData } from '../../data'
import { addToCart } from '../../redux/actions/productAction'
import { useSelector, useDispatch } from 'react-redux'

const ProductView = () => {
    const { id } = useParams();
    let card = useSelector(state => state.cartItems.cardProducts)
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(addToCart(productData[id-1]))
        console.log(card);

    }, [id])

    return (
        <div>
            <section className='section-content padding-top-sm padding-bottom'>
                <div className="container">
                    <nav class="mb-3">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="https://olcha.uz/oz">Bosh sahifa</a>
                            </li>
                            <li class="breadcrumb-item">
                                <a href="https://olcha.uz/oz/category/telefony-gadzhety-aksessuary">Smartfon, telefon, gadjet, aksessuarlar</a>
                            </li>
                            <li class="breadcrumb-item active">
                                
                                {productData.map(item=> {
                                    if(item.id == id) {
                                        return (
                                            <a key={item.id} href="https://olcha.uz/oz/category/telefony-gadzhety-aksessuary/smart-watches">{item.nameCategory}</a>
                                        )
                                    }
                                })}
                            </li>
                        </ol>
                    </nav>

                    {/* ITEM DETAIL */}

                    {productData.map(item => {
                        if (item.id == id) {
                            return (
                                <div className="row no-gutters" key={item.id}>
                                    <aside class='col-md-6'>
                                        <img src={`../${item.img}`} alt={item.title} />
                                    </aside>
                                    <main className="col-md-6">
                                        <article className='product-info-aside'>
                                            <a href="#" className="text-primary btn-link">Xiaomi</a>
                                            <h1 className="title">{item.title}</h1>
                                            <div>
                                                <span className="label-rating mr-3 text-muted">Sharhlar (10)</span>
                                                <a href="#" className="btn-link js-add-compare text-gray"> <i className="feather icon-book-open"></i> Taqqoslash </a>
                                            </div>
                                            <hr />
                                            <div className="mb-3">
                                                <h2>Qisqacha ma’lumot</h2>
                                                <ul className="list-unstyled mb-0">
                                                    <li><p>Kafolat muddati (oy): 1</p></li>
                                                </ul>
                                                <ul class="list-unstyled mb-0">
                                                    <li><p>Braslet materiali: Silikon</p></li>
                                                    <li><p>Diagonali: 1.1"</p></li>
                                                </ul>
                                                <p>
                                                    Siz Xiaomi Mi Band 5, Black XMSH10HM (Global versio
                                                    sotib olish uchun nafaqat Toshkent, balki Andijon, 
                                                    Buxoro, Farg'ona, Jizzax, Xorazm, Namangan, Navoiy, 
                                                    Qashqadaryo, Qoraqalpog'iston Respublikasi, Samarqand, 
                                                    Sirdaryo, Surxondaryo, Toshkent viloyatidan buyurtma 
                                                    berishingiz mumkin. Siz :brend muddatli to'lovga sotib 
                                                    olishingiz mumkin. Xiaomi Mi Band 5, Black XMSH10HM (Global 
                                                    version) kreditga olib nima qilasiz, bo'lib to'lashga olish 
                                                    osonroq va tezroq bo'lsa? O'zbekiston bo'ylab juda tez yetkazib beramiz.
                                                </p>
                                            </div>
                                            <div className="form-group" id="product_variations">
                                                
                                            </div>
                                            <div className="availabled">
                                                <div className="mb-4">
                                                    <del className="price-old monthly">{item.discountPrice} so‘m</del>
                                                    <br />
                                                    <var className="price h4">{item.price} so‘m</var>
                                                    <br />
                                                    <span className="monthly">
                                                        {/* <span>
                                                            41000
                                                        </span> */}
                                                        <span id="installment_sum" hidden="">{item.monthly} </span>
                                                        so‘m/oy 
                                                        <a 
                                                            href="#" 
                                                            className="btn-link text-muted" 
                                                            data-placement="right" 
                                                            data-toggle="tooltip" 
                                                            title="" 
                                                            data-original-title="Kabinetingizda shaxsiy ma’lumotlarni kiriting"
                                                        >
                                                           &nbsp; muddatli to’lovga <i class="fas fa-info-circle"></i> 
                                                        </a>
                                                    </span>
                                                </div>
                                                    
                                                {/* price-detail-wrap */}

                                                <div className="mb-4">
                                                    <a href="#" className="js-cart-add btn btn-primary btn-lg">
                                                        <span class="js-cart-hide">Sotib olish</span>
                                                    </a>
                                                    <a 
                                                        href="#" 
                                                        id="js-installment" 
                                                        data-toggle="modal" 
                                                        data-target="#installment_modal" 
                                                        className="js-installment btn btn-light btn-lg"
                                                        style={{margin:'0 10px'}}
                                                    >Bo‘lib to‘lash</a>
                                                    <a href="#" data-target="#modal_callfororder" className="btn btn-outline-danger btn-lg">Bir bosishda sotib oling</a>
                                                </div>
                                                <ul className="list-check list-inline">
                                                    <li>O’zbekiston bo’ylab yetkazib berish</li>
                                                </ul>
                                            </div>
                                        </article>
                                    </main>
                                </div>
                            )
                        }
                    })}
                </div>

            </section>
            <ProductSlider 
                section_title='Yangi mahsulotlar'
                type='new'
                imgUrl='../../'
            />
        </div>
    )
}

export default ProductView