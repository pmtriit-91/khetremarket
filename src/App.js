import './assets/css/base-grid-resposive.css'
import './assets/css/base.css'
import './assets/css/main.css'
import './assets/css/responsive.css'
import images from './assets/images'

function App() {
    return (
        <div className="app">
            <header className="header">
                <div className="grid wide">

                    <div className="header-with-search">
                        <label htmlFor="mobile-search-checkbox" className="header__mobile-search">
                            <i className="header__mobile-search-icon fa-sharp fa-solid fa-magnifying-glass"></i>
                        </label>

                        <div className="header__logo hide-on-tablet">
                            <a href="index.html" className="header__logo-link">
                                <img src={images.logo} width="80px" height="auto" alt='logo' />
                            </a>
                        </div>

                        <input type="checkbox" hidden name="" id="mobile-search-checkbox" className="header__search-checkbox" />
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
                                <ul className="category-list"></ul>
                            </nav>
                        </div>

                        <div className="col l-10 m-12 c-12">
                            <nav className="mobile-category">
                                <ul className="mobile-category__list">
                                    <li className="mobile-category__item">
                                        <a href="#" className="mobile-category__link">
                                            <span className="mobile-category__name">Váy & set đầm</span>
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="#" className="mobile-category__link">
                                            <span className="mobile-category__name">Thời trang nữ & cuộc sống thời 5.0</span>
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="#" className="mobile-category__link">
                                            <span className="mobile-category__name">Trang sức</span>
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="#" className="mobile-category__link">
                                            <span className="mobile-category__name">Mỹ phẩm</span>
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="#" className="mobile-category__link">
                                            <span className="mobile-category__name">Thời trang nam</span>
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="#" className="mobile-category__link">
                                            <span className="mobile-category__name">Giày</span>
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="#" className="mobile-category__link">
                                            <span className="mobile-category__name">Trang sức</span>
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="#" className="mobile-category__link">
                                            <span className="mobile-category__name">Set váy</span>
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="#" className="mobile-category__link">
                                            <span className="mobile-category__name">Công nghệ</span>
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="#" className="mobile-category__link">
                                            <span className="mobile-category__name">Mỹ phẩm</span>
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="#" className="mobile-category__link">
                                            <span className="mobile-category__name">Thời trang nữ</span>
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="#" className="mobile-category__link">
                                            <span className="mobile-category__name">Hàng lưu niệm</span>
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="#" className="mobile-category__link">
                                            <span className="mobile-category__name">Thời trang thể thao</span>
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="#" className="mobile-category__link">
                                            <span className="mobile-category__name">Giày nam</span>
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="#" className="mobile-category__link">
                                            <span className="mobile-category__name">Áo phông</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <div className="container-kiot">
                                <div className="row sm-gutter wrap-card">
                                    <div className="col l-2-4 m-4 c-6 wrap-kiot">
                                        <div className="card-kiot">
                                            <div className="card-kiot__img">
                                                <img className='card-kiot__img-link' src={images.anh1} alt='avartar' />
                                            </div>
                                            <div className="card-kiot-content">
                                                <h3 className="card-kiot__name">Kiot: Bà
                                                    Bưởi - chuyên bán hàng Lào
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
                                                    <span className="card-kiot__category-sub">Danh mục: </span>
                                                    <span className="card-kiot__category-li card-kiot__category-li-1">Dép
                                                        lào</span>
                                                    <span className="card-kiot__category-li card-kiot__category-li-2">Thuốc
                                                        lá</span>
                                                    <span className="card-kiot__category-li card-kiot__category-li-3">Điếu
                                                        cày</span>
                                                </div>
                                                <div className="card-kiot__phone">
                                                    <span>Tel: 0938.789.789</span>
                                                </div>

                                                <div className="card-kiot__social">
                                                    <a href="#" className="card-kiot__social-link">Facebook:
                                                        babuoi5roi.fb</a>
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
    );
}

export default App;
