import { useEffect, useState } from 'react'
import baseUrl, { getAllCategory, getKiotFromIDCategory } from '../utils/api/apiList'
import { useNavigate } from 'react-router-dom';
import { FcPhone } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import axios from 'axios';
import images from '../assets/images';
import '../assets/css/base-grid-resposive.css'
import '../assets/css/base.css'
import '../assets/css/main.css'
import '../assets/css/responsive.css'

function Home() {
    const [dataCategory, setDataCategory] = useState(null)
    const [activeCategoryItem, setActiveCategoryItem] = useState(null)
    const [dataKiotFromIdCategory, setDataKiotFromIdCategory] = useState(null)

    const navigate = useNavigate()

    const handleItemClick = (elm, index) => {
        setActiveCategoryItem(index)
        fetchDataKiot(elm._id)
    }

    useEffect(() => {
        axios.post(baseUrl + getAllCategory, {}, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => {
                if (res.data.message === "success") {
                    setDataCategory(res.data.data)
                    fetchDataKiot(res.data.data[0]._id)
                }
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (dataCategory && activeCategoryItem === null && dataCategory.length > 0) {
            setActiveCategoryItem(0)

            // fetchDataKiot(dataCategory[0]._id)
        }
    }, [dataCategory, activeCategoryItem])

    const fetchDataKiot = (idCategory) => {
        const idDanhMuc = { 'idDanhMuc': idCategory }
        axios.post(baseUrl + getKiotFromIDCategory, idDanhMuc, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data.data);
                    setDataKiotFromIdCategory(res.data.data)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="app">
            <header className="header">
                <div className="grid wide">
                    <div className="header-with-search">
                        <div className="header__logo hide-on-tablet">
                            <a href="index.html" className="header__logo-link">
                                <img src={images.logo} width="80px" height="auto" alt='logo' />
                            </a>
                        </div>

                        <button className='btn-grad' onClick={() => navigate('/login')} >Đến trang admin</button>
                    </div>
                </div>
            </header>

            <div className="app__container">
                <div className="grid wide">
                    <div className="row sm-gutter app__content">
                        <div className="col l-2 m-0 c-0">
                            <nav className="category">
                                <h3 className="category__heading">
                                    <i className="category__heading-icon fa-solid fa-list"></i> Danh mục
                                </h3>
                                <ul className="category-list">
                                    {dataCategory && dataCategory.map((elm, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className={`category-item category-item__link ${activeCategoryItem === index ? 'category-item--active' : ''}`}
                                                onClick={() => handleItemClick(elm, index)}
                                            >
                                                {elm.name}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>

                        <div className="col l-10 m-12 c-12">
                            <nav className="mobile-category">
                                <ul className="mobile-category__list">
                                    {dataCategory && dataCategory.map((elm, index) => {
                                        return (
                                            <li key={index} className="mobile-category__item" onClick={() => handleItemClick(elm, index)}>
                                                <span className="mobile-category__name">{elm.name}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>

                            <div className="container-kiot">
                                <div className="row sm-gutter wrap-card">
                                    {dataKiotFromIdCategory ?
                                        dataKiotFromIdCategory.map((elm, index) => {

                                            const categoryItems = elm.category.map((category, i) => (
                                                <div key={i} className={`card-kiot__category-li card-kiot__category-li-${i + 1}`}>
                                                    {category.name}
                                                </div>
                                            ))

                                            return (
                                                <div key={index} className="col l-2-4 m-4 c-6 wrap-kiot">
                                                    <div className="card-kiot">
                                                        <div className="card-kiot__img">
                                                            <img className='card-kiot__img-link' src={images.anh1} alt='avartar' />
                                                        </div>
                                                        <div className="card-kiot-content">
                                                            <h3 className="card-kiot__name">Kiot: <span>{elm.name && elm.name}</span> - chuyên bán hàng Lào
                                                                xuất khẩu
                                                            </h3>
                                                            <div className="card-kiot__sale-plus">
                                                                <div className="card-kiot__sale-plus-stamp">
                                                                    <span className="card-kiot__sale-plus-stamp-price--enable">
                                                                        <svg className="card-kiot__sale-plus-stamp-svg1 _2DRZW _2xFcL"
                                                                            viewBox="-0.5 -0.5 4 16">
                                                                            <path
                                                                                d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                                                                                strokeWidth="1" transform="" stroke="currentColor"
                                                                                fill="#fff"></path>
                                                                        </svg>
                                                                        Giảm đ20k
                                                                        <svg className="card-kiot__sale-plus-stamp-svg2 _2DRZW _2xFcL"
                                                                            viewBox="-0.5 -0.5 4 16">
                                                                            <path
                                                                                d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                                                                                strokeWidth="1"
                                                                                transform="rotate(180) translate(-3 -15)"
                                                                                stroke="currentColor" fill="#fff"></path>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div className="card-kiot__sale-plus-trend--enable">Mua Kèm Deal
                                                                    Sốc</div>
                                                            </div>
                                                            <div className="card-kiot__category">
                                                                <span className="card-kiot__category-sub">Sản phẩm: </span>
                                                                {categoryItems}
                                                            </div>
                                                            <div className="card-kiot__phone">
                                                                <FcPhone style={{ marginRight: 5 }} /><span>{elm.phone}</span>
                                                            </div>

                                                            <div className="card-kiot__social">
                                                                <MdFacebook style={{ color: '#0866ff' }} /> <a href="#" className="card-kiot__social-link">{elm.facebook ? elm.facebook : ''}</a>
                                                            </div>
                                                        </div>
                                                        <div className="card-kiot__sale-wrap">
                                                            <div className="card-kiot__favourite">
                                                                <i className="fa-solid fa-check"></i>
                                                                <span>Yêu thích</span>
                                                            </div>
                                                            <div className="card-kiot__sale-off">
                                                                <span className="card-kiot__sale-off-percent">10%</span>
                                                                <span className="card-kiot__sale-off-label">GIẢM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        :
                                        <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-content">
                    <div className="grid wide">
                        <div className="row">
                            <div className="footer-care col l-2-4 m-4 c-6 wrap-kiot">
                                <h3 className="footer__heading">CHĂM SÓC KHÁCH HÀNG</h3>
                                <ul className="footer-list">
                                    <li className="footer-item">
                                        <a href="#" className="footer-item__link">Trung Tâm Trợ Giúp</a>
                                    </li>
                                    <li className="footer-item">
                                        <a href="#" className="footer-item__link">MT-Shop Blog</a>
                                    </li>
                                    <li className="footer-item">
                                        <a href="#" className="footer-item__link">MT-Shop Blog</a>
                                    </li>
                                    <li className="footer-item">
                                        <a href="#" className="footer-item__link">MT-Shop mall</a>
                                    </li>
                                    <li className="footer-item">
                                        <a href="#" className="footer-item__link">Hướng Dẫn Mua Hàng</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer-about col l-2-4 m-4 c-6 wrap-kiot">
                                <h3 className="footer__heading">VỀ MT-SHOP</h3>
                                <ul className="footer-list">
                                    <li className="footer-item">
                                        <a href="#" className="footer-item__link">Giới Thiệu Về MT-Shop</a>
                                    </li>
                                    <li className="footer-item">
                                        <a href="#" className="footer-item__link">Tuyển Dụng</a>
                                    </li>
                                    <li className="footer-item">
                                        <a href="#" className="footer-item__link">Điều Khoản MT-Shop</a>
                                    </li>
                                    <li className="footer-item">
                                        <a href="#" className="footer-item__link">Chính Sách Bảo Mật</a>
                                    </li>
                                    <li className="footer-item">
                                        <a href="#" className="footer-item__link">Chính Hãng</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer-pay col l-2-4 m-4 c-6 wrap-kiot">
                                <div className="footer-credit">
                                    <h3 className="footer__heading">THANH TOÁN</h3>
                                    <ul className="footer-credit__list">
                                        <li className="footer-credit__item">
                                            <img src="assets/img/logo_pay/1.png" alt="" className="footer-credit__img" />
                                        </li>
                                        <li className="footer-credit__item">
                                            <img src="assets/img/logo_pay/2.png" alt="" className="footer-credit__img" />
                                        </li>
                                        <li className="footer-credit__item">
                                            <img src="assets/img/logo_pay/3.png" alt="" className="footer-credit__img" />
                                        </li>
                                        <li className="footer-credit__item">
                                            <img src="assets/img/logo_pay/4.png" alt="" className="footer-credit__img" />
                                        </li>
                                        <li className="footer-credit__item">
                                            <img src="assets/img/logo_pay/5.png" alt="" className="footer-credit__img" />
                                        </li>
                                        <li className="footer-credit__item">
                                            <img src="assets/img/logo_pay/6.png" alt="" className="footer-credit__img" />
                                        </li>
                                        <li className="footer-credit__item">
                                            <img src="assets/img/logo_pay/8.png" alt="" className="footer-credit__img" />
                                        </li>
                                        <li className="footer-credit__item">
                                            <img src="assets/img/logo_pay/9.png" alt="" className="footer-credit__img" />
                                        </li>
                                    </ul>
                                </div>

                                <div className="footer-ship hide-on-mobile-tablet">
                                    <h3 className="footer__heading">ĐƠN VỊ VẬN CHUYỂN</h3>
                                    <ul className="footer-ship__list">
                                        <li className="footer-ship__item">
                                            <img src="assets/img/logo_pay/9.png" alt="" className="footer-ship__img" />
                                        </li>
                                        <li className="footer-ship__item">
                                            <img src="assets/img/logo_pay/10.png" alt="" className="footer-ship__img" />
                                        </li>
                                        <li className="footer-ship__item">
                                            <img src="assets/img/logo_pay/11.png" alt="" className="footer-ship__img" />
                                        </li>
                                        <li className="footer-ship__item">
                                            <img src="assets/img/logo_pay/12.jpeg" alt="" className="footer-ship__img" />
                                        </li>
                                        <li className="footer-ship__item">
                                            <img src="assets/img/logo_pay/13.png" alt="" className="footer-ship__img" />
                                        </li>
                                        <li className="footer-ship__item">
                                            <img src="assets/img/logo_pay/14.png" alt="" className="footer-ship__img" />
                                        </li>
                                        <li className="footer-ship__item">
                                            <img src="assets/img/logo_pay/15.png" alt="" className="footer-ship__img" />
                                        </li>
                                        <li className="footer-ship__item">
                                            <img src="assets/img/logo_pay/16.png" alt="" className="footer-ship__img" />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-ship--mobile col l-2-4 m-4 c-6 wrap-kiot">
                                <h3 className="footer__heading">ĐƠN VỊ VẬN CHUYỂN</h3>
                                <ul className="footer-ship__list">
                                    <li className="footer-ship__item">
                                        <img src="assets/img/logo_pay/9.png" alt="" className="footer-ship__img" />
                                    </li>
                                    <li className="footer-ship__item">
                                        <img src="assets/img/logo_pay/10.png" alt="" className="footer-ship__img" />
                                    </li>
                                    <li className="footer-ship__item">
                                        <img src="assets/img/logo_pay/11.png" alt="" className="footer-ship__img" />
                                    </li>
                                    <li className="footer-ship__item">
                                        <img src="assets/img/logo_pay/12.jpeg" alt="" className="footer-ship__img" />
                                    </li>
                                    <li className="footer-ship__item">
                                        <img src="assets/img/logo_pay/13.png" alt="" className="footer-ship__img" />
                                    </li>
                                    <li className="footer-ship__item">
                                        <img src="assets/img/logo_pay/14.png" alt="" className="footer-ship__img" />
                                    </li>
                                    <li className="footer-ship__item">
                                        <img src="assets/img/logo_pay/15.png" alt="" className="footer-ship__img" />
                                    </li>
                                    <li className="footer-ship__item">
                                        <img src="assets/img/logo_pay/16.png" alt="" className="footer-ship__img" />
                                    </li>
                                </ul>
                            </div>

                            <div className="footer-follow col l-2-4 m-4 c-6 wrap-kiot">
                                <h3 className="footer__heading">THEO DÕI CHÚNG TÔI TRÊN</h3>
                                <ul className="footer-follow__list">
                                    <li className="footer-follow__item">
                                        <a href="#" className="footer-follow__link">
                                            <i className="fa-brands fa-facebook"></i>
                                            <span>Facebook</span>
                                        </a>
                                    </li>
                                    <li className="footer-follow__item">
                                        <a href="#" className="footer-follow__link">
                                            <i className="fa-brands fa-instagram"></i>
                                            <span>Instagram</span>
                                        </a>
                                    </li>
                                    <li className="footer-follow__item">
                                        <a href="#" className="footer-follow__link">
                                            <i className="fa-brands fa-linkedin"></i>
                                            <span>Linkedln</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer-app col l-2-4 m-4 c-6 wrap-kiot">
                                <h3 className="footer__heading">ỨNG DỤNG</h3>
                                <div className="footer-app-wrap">
                                    <div className="footer-app__qr">
                                        <a href="#" className="footer-app__qr-link">
                                            <img src="assets/img/logo_pay/qr.png" alt="" className="footer-app__qr-img" />
                                        </a>
                                    </div>
                                    <div className="footer-app__mobile">/
                                        <a href="#" className="footer-app__mobile-link">
                                            <img src="assets/img/logo_pay/appstore.png" alt="" />
                                        </a>
                                        <a href="#" className="footer-app__mobile-link">
                                            <img src="assets/img/logo_pay/googleplay.png" alt="" />
                                        </a>
                                        <a href="#" className="footer-app__mobile-link">
                                            <img src="assets/img/logo_pay/galleryapp.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-end">
                    <span>© 2023 - Bản quyền thuộc về Minh Trí</span>
                </div>
            </footer>
        </div>
    )
}

export default Home;
