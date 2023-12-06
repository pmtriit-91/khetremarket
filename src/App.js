import './assets/css/base-grid-resposive.css'
import './assets/css/base.css'
import './assets/css/main.css'
import './assets/css/responsive.css'

function App() {
    return (
        <div className="App">
            <div class="app">
                <header class="header">
                    <div class="grid wide">

                        <div class="header-with-search">
                            <label for="mobile-search-checkbox" class="header__mobile-search">
                                <i class="header__mobile-search-icon fa-sharp fa-solid fa-magnifying-glass"></i>
                            </label>

                            <div class="header__logo hide-on-tablet">
                                <a href="index.html" class="header__logo-link">
                                    <image src="./assets/img/logo/khetre-white-transparent.png" width="80px" height="auto" />
                                </a>
                            </div>

                            <input type="checkbox" hidden name="" id="mobile-search-checkbox" class="header__search-checkbox" />
                        </div>
                    </div>
                </header>

                <div class="app__container">
                    <div class="grid wide">
                        <div class="row sm-gutter app__content">
                            <div class="col l-2 m-0 c-0">
                                <nav class="category">
                                    <h3 class="category__heading">
                                        <i class="category__heading-icon fa-solid fa-list"></i> Danh mục
                                    </h3>
                                    <ul class="category-list"></ul>
                                </nav>
                            </div>

                            <div class="col l-10 m-12 c-12">
                                <nav class="mobile-category">
                                    <ul class="mobile-category__list">
                                        <li class="mobile-category__item">
                                            <a href="" class="mobile-category__link">
                                                <span class="mobile-category__name">Váy & set đầm</span>
                                            </a>
                                        </li>
                                        <li class="mobile-category__item">
                                            <a href="" class="mobile-category__link">
                                                <span class="mobile-category__name">Thời trang nữ & cuộc sống thời 5.0</span>
                                            </a>
                                        </li>
                                        <li class="mobile-category__item">
                                            <a href="" class="mobile-category__link">
                                                <span class="mobile-category__name">Trang sức</span>
                                            </a>
                                        </li>
                                        <li class="mobile-category__item">
                                            <a href="" class="mobile-category__link">
                                                <span class="mobile-category__name">Mỹ phẩm</span>
                                            </a>
                                        </li>
                                        <li class="mobile-category__item">
                                            <a href="" class="mobile-category__link">
                                                <span class="mobile-category__name">Thời trang nam</span>
                                            </a>
                                        </li>
                                        <li class="mobile-category__item">
                                            <a href="" class="mobile-category__link">
                                                <span class="mobile-category__name">Giày</span>
                                            </a>
                                        </li>
                                        <li class="mobile-category__item">
                                            <a href="" class="mobile-category__link">
                                                <span class="mobile-category__name">Trang sức</span>
                                            </a>
                                        </li>
                                        <li class="mobile-category__item">
                                            <a href="" class="mobile-category__link">
                                                <span class="mobile-category__name">Set váy</span>
                                            </a>
                                        </li>
                                        <li class="mobile-category__item">
                                            <a href="" class="mobile-category__link">
                                                <span class="mobile-category__name">Công nghệ</span>
                                            </a>
                                        </li>
                                        <li class="mobile-category__item">
                                            <a href="" class="mobile-category__link">
                                                <span class="mobile-category__name">Mỹ phẩm</span>
                                            </a>
                                        </li>
                                        <li class="mobile-category__item">
                                            <a href="" class="mobile-category__link">
                                                <span class="mobile-category__name">Thời trang nữ</span>
                                            </a>
                                        </li>
                                        <li class="mobile-category__item">
                                            <a href="" class="mobile-category__link">
                                                <span class="mobile-category__name">Hàng lưu niệm</span>
                                            </a>
                                        </li>
                                        <li class="mobile-category__item">
                                            <a href="" class="mobile-category__link">
                                                <span class="mobile-category__name">Thời trang thể thao</span>
                                            </a>
                                        </li>
                                        <li class="mobile-category__item">
                                            <a href="" class="mobile-category__link">
                                                <span class="mobile-category__name">Giày nam</span>
                                            </a>
                                        </li>
                                        <li class="mobile-category__item">
                                            <a href="" class="mobile-category__link">
                                                <span class="mobile-category__name">Áo phông</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>

                                <div class="container-kiot">
                                    <div class="row sm-gutter wrap-card">
                                        <div class="col l-2-4 m-4 c-6 wrap-kiot">
                                            <div class="card-kiot">
                                                <div class="card-kiot__img"></div>
                                                <div class="card-kiot-content">
                                                    <h3 class="card-kiot__name">Kiot: Bà
                                                        Bưởi - chuyên bán hàng Lào
                                                        xuất khẩu
                                                    </h3>
                                                    <div class="card-kiot__sale-plus">
                                                        <div class="card-kiot__sale-plus-stamp">
                                                            <span class="card-kiot__sale-plus-stamp-price--enable">
                                                                <svg class="card-kiot__sale-plus-stamp-svg1 _2DRZW _2xFcL"
                                                                    viewBox="-0.5 -0.5 4 16">
                                                                    <path
                                                                        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                                                                        stroke-width="1" transform="" stroke="currentColor"
                                                                        fill="#fff"></path>
                                                                </svg>
                                                                Giảm đ20k
                                                                <svg class="card-kiot__sale-plus-stamp-svg2 _2DRZW _2xFcL"
                                                                    viewBox="-0.5 -0.5 4 16">
                                                                    <path
                                                                        d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                                                                        stroke-width="1"
                                                                        transform="rotate(180) translate(-3 -15)"
                                                                        stroke="currentColor" fill="#fff"></path>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div class="card-kiot__sale-plus-trend--enable">Mua Kèm Deal
                                                            Sốc</div>
                                                    </div>
                                                    <div class="card-kiot__category">
                                                        <span class="card-kiot__category-sub">Danh mục: </span>
                                                        <span class="card-kiot__category-li card-kiot__category-li-1">Dép
                                                            lào</span>
                                                        <span class="card-kiot__category-li card-kiot__category-li-2">Thuốc
                                                            lá</span>
                                                        <span class="card-kiot__category-li card-kiot__category-li-3">Điếu
                                                            cày</span>
                                                    </div>
                                                    <div class="card-kiot__phone">
                                                        <span>Tel: 0938.789.789</span>
                                                    </div>

                                                    <div class="card-kiot__social">
                                                        <a href="#" class="card-kiot__social-link">Facebook:
                                                            babuoi5roi.fb</a>
                                                    </div>
                                                </div>
                                                <div class="card-kiot__sale-wrap">
                                                    <div class="card-kiot__favourite">
                                                        <i class="fa-solid fa-check"></i>
                                                        <span>Yêu thích</span>
                                                    </div>
                                                    <div class="card-kiot__sale-off">
                                                        <span class="card-kiot__sale-off-percent">10%</span>
                                                        <span class="card-kiot__sale-off-label">GIẢM</span>
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
            </div>
        </div>
    );
}

export default App;
