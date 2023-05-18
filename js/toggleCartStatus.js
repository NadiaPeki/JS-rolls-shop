function toggleCartStatus () {
    const cartWrapper = document.querySelector('.cart-wrapper')
    const cartEmptyBage = document.querySelector('[data-cart-empty]')

    const orderForm = document.querySelector('#order-form')

    // проверяем наличие внутренних элементов у cart-wrapper с помошью свойства children
    if (cartWrapper.children.length > 0) {
        // если товары есть в корзине с помощью добавления класса none скрываем плашку корзина пуста
        cartEmptyBage.classList.add('none')
        orderForm.classList.remove('none')
    } else {
        // иначе (если товаров нет в корзине) удаляем класс none и плащка корзина пуста появляется
        cartEmptyBage.classList.remove('none')
        orderForm.classList.add('none')
    }

} 