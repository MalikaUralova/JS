










const getData = JSON.parse(localStorage.getItem("data")) || [];

const totalPrice = document.querySelector(".total-price");
const subtotalPrice = document.querySelector(".subtotal-price");
const cartItems = document.querySelector(".cart-items");

if (!totalPrice || !cartItems) {
    console.error("`.total-price` yoki `.cart-items` topilmadi — HTML dagi class nomlarini tekshiring.");
} else {
    cartItems.innerHTML = "";
    let price2 = 0;

    getData.forEach(item => {
        const { id, title, image, price, count } = item;
        price2 += price * count;

        cartItems.innerHTML += `
            <div class="cart-item" data-id="${id}">
                <div class="cart-item__cover">
                    <img src="${image}" alt="${title}">
                </div>
                <div class="cart-item__info">
                    <h2>${title}</h2>
                    <p class="cart-item__price">${price} $</p>
                </div>
                <div class="cart-item__qty">
                    <button class="qty-btn minus" aria-label="Kamaytirish">−</button>
                    <span class="qty-value">${count}</span>
                    <button class="qty-btn plus" aria-label="Oshirish">+</button>
                </div>
                <p class="cart-item__total">${price * count} $</p>
                <button class="remove-btn" aria-label="O'chirish">✕</button>
            </div>
        `;
    });

    if (subtotalPrice) subtotalPrice.textContent = `${price2} $`;
    totalPrice.textContent = `${price2} $`; // chegirma bo'lsa, shu yerda ayirib qo'shing
}





// const getData = JSON.parse(localStorage.getItem("data"))

// console.log(getData);

// const totalPrice = document.querySelector(".total-price")
// const cartItems = document.querySelector(".cart-items")

// let price2 = 0;
// getData.map(item => {

//     const { title, image, price, count } = item;
//     totalPrice.textContent = `${price2 += price} so'm`
//     cartItems.innerHTML += `


//                     <div class="cart-item">
//                     <div class="cart-item__cover">
//                         <img src="${image}" alt="Atom Odatlar">
//                     </div>
//                     <div class="cart-item__info">
//                         <h2>${title}</h2>
//                         <p class="cart-item__price">${price} $</p>
//                     </div>
//                     <div class="cart-item__qty">
//                         <button class="qty-btn" aria-label="Kamaytirish">−</button>
//                         <span class="qty-value">${count}</span>
//                         <button class="qty-btn" aria-label="Oshirish">+</button>
//                     </div>
//                     <p class="cart-item__total">${price} $</p>
//                     <button class="remove-btn" aria-label="O'chirish">✕</button>
//                 </div>
//     `
// })