const getItem = JSON.parse(localStorage.getItem("data"))


const cartItems = document.querySelector(".cart-items")


getItem.map(item => {
    cartItems.innerHTML += `


                    <div class="cart-item">
                    <div class="cart-item__cover">
                        <img src="${item.image}" alt="Atom Odatlar">
                    </div>
                    <div class="cart-item__info">
                        <h2>${item.title}</h2>
                        <p class="cart-item__price">${item.price} $</p>
                    </div>
                    <div class="cart-item__qty">
                        <button class="qty-btn" aria-label="Kamaytirish">−</button>
                        <span class="qty-value">1</span>
                        <button class="qty-btn" aria-label="Oshirish">+</button>
                    </div>
                    <p class="cart-item__total">${item.salePrice} $</p>
                    <button class="remove-btn" aria-label="O'chirish">✕</button>
                </div>
    `
})