function calcCartPriceAndDelivery () {
    const cartItems = document.querySelectorAll('.cart-item')
    // Ищем элемент где находится итоговая сумма
    const totalPriceEl = document.querySelector('.total-price')
    // нахлдим элемент для стоимости доставки
    const deliveryCost = document.querySelector('.delivery-cost')
    const cartDelivery = document.querySelector('[data-cart-delivery]')
    // создаем переменную общая стоимость
    let totalPrice = 0

// обходим коллекцию NodeList с помошью метода forEach и передаем функцию кот будет срабатывать с каждым элементом item
    cartItems.forEach(function (item) {
        // каждый элемент Item каждый раз цикла будет ссылаться на каждый элемент корзины
    // внутри каждого item ищем элемент с количеством и стоимостью
        const amountEl = item.querySelector('[data-counter]')
        const priceEl = item.querySelector('.price__currency')
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
        totalPrice += currentPrice
    })


// Отображаем итоговую цену в корзине 
totalPriceEl.innerText = totalPrice
// Скрываем или показываем блок со стоимостью доставки
if (totalPrice > 0) {
    cartDelivery.classList.remove('none')
} else {
    cartDelivery.classList.add('none')
}
// Указываем стоимость доставки
if (totalPrice >= 600) {
deliveryCost.classList.add('free')
deliveryCost.innerText = 'бесплатно'
} else {
deliveryCost.classList.remove('free')
deliveryCost.innerText = '250 ₽'
}

}
 