const data = [
    {
        id: 1,
        title: "Atom Odatlar",
        description: "Mayda o'zgarishlar orqali hayotingizda qanday qilib ulkan natijalarga erishish mumkinligi haqida.",
        price: 200,
        salePrice: 180,
        rating: 5,
        image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
    },
    {
        id: 2,
        title: "Psixologiya sirlari",
        description: "Inson psixologiyasi va qaror qabul qilish jarayonining eng qiziqarli mexanizmlari.",
        price: 150,
        salePrice: 120,
        rating: 4,
        image: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg"
    },
    {
        id: 3,
        title: "Raqamli Dunyo",
        description: "Kelajak texnologiyalari va dasturlash olamining yangi ufqlari bilan tanishing.",
        price: 110,
        salePrice: 95,
        rating: 5,
        image: "https://covers.openlibrary.org/b/isbn/9781476708706-L.jpg"
    },
    {
        id: 4,
        title: "Boylik Falsafasi",
        description: "Pul bilan munosabatni o'zgartiradigan oddiy, ammo kuchli tamoyillar.",
        price: 175,
        salePrice: 140,
        rating: 4,
        image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
    },
    {
        id: 5,
        title: "Vaqt Boshqaruvi",
        description: "Kuningizni rejalashtirish va diqqatni bir joyga jamlash bo'yicha amaliy qo'llanma.",
        price: 100,
        salePrice: 85,
        rating: 5,
        image: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg"
    },
    {
        id: 6,
        title: "Notiqlik San'ati",
        description: "Ommaga gapirishdan qo'rqmaslik va fikrni ishonarli yetkazish yo'llari.",
        price: 130,
        salePrice: 110,
        rating: 4,
        image: "https://covers.openlibrary.org/b/isbn/9781250041127-L.jpg"
    },
    {
        id: 7,
        title: "Miyaning Kuchi",
        description: "Xotira va diqqatni kuchaytirish uchun ilmiy asoslangan mashqlar to'plami.",
        price: 160,
        salePrice: 135,
        rating: 5,
        image: "https://covers.openlibrary.org/b/isbn/9780544456259-L.jpg"
    },
    {
        id: 8,
        title: "Sukunat Kuchi",
        description: "Shovqinli dunyoda ichki tinchlikni topish va his-tuyg'ularni boshqarish san'ati.",
        price: 140,
        salePrice: 115,
        rating: 4,
        image: "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg"
    },
    {
        id: 9,
        title: "Kichik Qadamlar",
        description: "Katta maqsadlarga kichik, barqaror harakatlar orqali erishish strategiyasi.",
        price: 120,
        salePrice: 99,
        rating: 5,
        image: "https://covers.openlibrary.org/b/isbn/9780358003328-L.jpg"
    }
];



let booksContainer = document.querySelector(".books-container")

data.map((item) => {
    booksContainer.innerHTML += `
     
        <div class="book-card">
            <div class="cover">
                <img src="${item.image}" alt="Atom Odatlar">
            </div>
            <div class="texts">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <div class="rating">
                    <span class="stars">★★★★★</span>
                    <span >${item.rating}</span>
                </div>
                <div class="prices">
                    <p class="sale-price">${item.salePrice}  $</p>
                    <p class="price">${item.price}</p>
                </div>
                <button data-id="${item.id}" class="buy-btn">Sotib olish</button>
            </div>
        </div>
    `



})


const buyBtn = document.querySelectorAll(".buy-btn")

for (let i = 0; i < buyBtn.length; i++) {

    buyBtn[i].addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id")
    })

}
// console.log(buyBtn);




