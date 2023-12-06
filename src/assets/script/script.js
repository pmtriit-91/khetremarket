import baseUrl, { getAllCategory, getKiotFromIDCategory } from './apiList.js'

const categoryList = document.querySelector('.category-list')
console.log(categoryList)

axios.post(baseUrl + getAllCategory, {}, {
    headers: {
        "Content-Type": "application/json",
    }
})
    .then(res => {
        if (res.data.message === "success") {

            console.log(res.data.data)
            const idCategory = []

            res.data.data.forEach((category, index) => {

                idCategory.push(category._id)
                localStorage.setItem('idCategory', JSON.stringify(idCategory))

                const listItem = document.createElement('li')
                listItem.classList.add('category-item')
                const link = document.createElement('a')
                link.classList.add('category-item__link')
                link.href = '#'
                link.textContent = category.name

                listItem.appendChild(link)
                categoryList.appendChild(listItem)

                if (index === 0) {
                    listItem.classList.add('category-item--active')
                }

                link.addEventListener('click', (event) => {
                    event.preventDefault()

                    //get kiot
                    const idDanhMuc = { 'idDanhMuc': category._id }
                    axios.post(baseUrl + getKiotFromIDCategory, idDanhMuc, {
                        headers: {
                            "Content-Type": "application/json",
                        }
                    })
                        .then(response => {
                            console.log(response)
                            if (response.data.message === "success") {
                                const categoryData = response.data.data[0]
                                updateCategoryUI(categoryData)
                            } else {
                                console.error('Error: Unable to fetch category data')
                            }
                        })
                        .catch(err => console.error(err))

                    //active danh muc
                    const activeItem = document.querySelector('.category-item--active')
                    activeItem.classList.remove('category-item--active')

                    listItem.classList.add('category-item--active')
                })
            })
        }
    })
    .catch(err => console.log(err))


function updateCategoryUI(data) {
    const wrapCard = document.querySelector('.wrap-card')

    const card = document.createElement('div');
    card.classList.add('col', 'l-2-4', 'm-4', 'c-6', 'wrap-kiot')

    card.innerHTML = `
        <div class="card-kiot">
            <div class="card-kiot__img" style="background-image: url('assets/img/thoitrang2.jpeg');"></div>
            <div class="card-kiot-content">
                <h3 class="card-kiot__name">Kiot: <span style="color: blue;">${data.facebook}</span> - chuyên bán hàng Lào xuất khẩu</h3>
            </div>
        </div>
    `

    wrapCard.appendChild(card)

    // const cardKiot = document.querySelector('.card-kiot')

    // // const cardImg = cardKiot.querySelector('.card-kiot__img')
    // // cardImg.style.backgroundImage = `url('${data.imgPath[0]}')`

    // const cardName = cardKiot.querySelector('.card-kiot__name');
    // cardName.innerHTML = `Kiot: <span style="color: blue;">${data.facebook}</span> - chuyên bán hàng Lao xuất khẩu`

    // const cardCategory = cardKiot.querySelector('.card-kiot__category')
    // const categorySpan = cardCategory.querySelectorAll('.card-kiot__category-li')
    // categorySpan.forEach((span, index) => {
    //     if (data.category[index]) {
    //         span.textContent = data.category[index].name;
    //     } else {
    //         span.textContent = ''
    //     }
    // });

    // const cardPhone = cardKiot.querySelector('.card-kiot__phone')
    // const phoneSpan = cardPhone.querySelector('span')
    // phoneSpan.textContent = `Tel: ${data.phone}`

    // const cardSocial = cardKiot.querySelector('.card-kiot__social-link')
    // cardSocial.textContent = `Facebook: ${data.facebook}`
}

