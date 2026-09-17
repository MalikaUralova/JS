const params = new URLSearchParams(window.location.search)
const id = Number(params.get("id"))

const book = data.find(item => item.id === id)

const img = document.querySelector(".book-detail__img")
const title = document.querySelector(".book-detail__title")
const starsEl = document.querySelector(".stars")
const ratingValue = document.querySelector(".book-detail__rating-value")
const description = document.querySelector(".book-detail__description")
const tabDesc = document.querySelector(".book-tabs__desc")
const salePrice = document.querySelector(".book-detail__sale-price")
const price = document.querySelector(".book-detail__price")
const discountTag = document.querySelector(".book-detail__discount-tag")
const breadcrumbCurrent = document.querySelector(".breadcrumb__current")
const buyBtn = document.getElementById("detailBuyBtn")
const qtyValue = document.getElementById("qtyValue")
const qtyMinus = document.getElementById("qtyMinus")
const qtyPlus = document.getElementById("qtyPlus")
const relatedList = document.getElementById("relatedList")

let quantity = 1

function renderStars(rating) {
    const full = "★".repeat(rating)
    const empty = "☆".repeat(5 - rating)
    return full + empty
}

if (book) {
    img.src = book.image
    img.alt = book.title
    title.textContent = book.title
    breadcrumbCurrent.textContent = book.title

    starsEl.textContent = renderStars(book.rating)
    ratingValue.textContent = `${book.rating}.0`

    description.textContent = book.description
    tabDesc.textContent = book.description

    salePrice.textContent = `${book.salePrice} $`
    price.textContent = `${book.price} $`

    const discountPercent = Math.round(((book.price - book.salePrice) / book.price) * 100)
    discountTag.textContent = `-${discountPercent}%`

    // Miqdor tugmalari
    qtyMinus.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--
            qtyValue.textContent = quantity
        }
    })

    qtyPlus.addEventListener("click", () => {
        quantity++
        qtyValue.textContent = quantity
    })

    // Savatga qo'shish
    buyBtn.addEventListener("click", () => {
        const getData = JSON.parse(localStorage.getItem("data")) || []
        const foundData = getData.find(item => item.id === book.id)
        let totalCount = 0;

        if (foundData) {
            foundData.count += quantity;
        } else {
            getData.push({
                id: book.id,
                title: book.title,
                price: book.price,
                image: book.image,
                count: quantity
            })
        }

        getData.forEach(item => totalCount += item.count)

        localStorage.setItem("data", JSON.stringify(getData))
        localStorage.setItem("count", totalCount)
        alert("Mahsulotingiz savatga qo'shildi!")
    })

    // O'xshash kitoblar
    const related = data.filter(item => item.id !== book.id).slice(0, 4)
    related.forEach(item => {
        relatedList.innerHTML += `
            <a href="./detail.html?id=${item.id}" class="related__card">
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p class="related__price">${item.salePrice} $</p>
            </a>
        `
    })

} else {
    document.querySelector(".book-detail").innerHTML = `<p>Kitob topilmadi.</p>`
}

// Tab almashtirish
const tabBtns = document.querySelectorAll(".book-tabs__btn")
const tabContents = document.querySelectorAll(".book-tabs__content")

tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"))
        tabContents.forEach(c => c.classList.remove("active"))

        btn.classList.add("active")
        document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active")
    })
})