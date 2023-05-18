// находим обертку для элемента в корзине. Это наш див внутри корзины, в кот мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper')
//Отслеживаем клин на странице
window.addEventListener('click', function(event) {
//Проверяем что клик был совершен по кнопке добавить в корзину

if (event.target.hasAttribute('data-cart')) {   //здесь записываем без квадратных скобок, тк уже работаем с атрибутом через hasAttribute

// Находим карточку с товаром, внутри которой был совершен клик
//метод closest ищет того родителя, которого мы укажем в скобках по классу
const card = event.target.closest('.card')

// Собираем данные с этого товара и записываем их в единый объект productInfo
const productInfo = {
    id: card.dataset.id,   // получаем доступ к дата-атрибуту кликаемого элемента через свойство dataset. А название нужного атрибута пишем уже без слова data
    imgSrc: card.querySelector('.product-img').getAttribute('src'), // находим картинку по классу и через getAttribute получаем значение атрибута src т е ссылку картинки
    title: card.querySelector('.item-title').innerText, //внутри card находим элемент с классом item-title и получаем его текст с помощью innerText
    itemsInBox: card.querySelector('[data-items-in-box]').innerText,  // от карточки находим элемент с атрибутом data-items-in-box и от него получаем внутренний текст
    weight: card.querySelector('.price__weight').innerText, // получаем вес и цену(ниже строкой)
    price: card.querySelector('.price__currency').innerText,
    counter: card.querySelector('[data-counter]').innerText, // получ счетчик по атрибуту и его текст
}

//Проверяем есть ли уже такой товар в корзине
// Находим в корзине элемент с id товара который мы собираемся добавлять и есои он уже есть, то мы просто изменим его счетчик
// обращаемся к обертке всех элементов в корзине
const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)
// Если товар есть в корзине то мы находим счетчик этого товара в корзине и увеличиваем его на то колич товара кот мы хотим добавить
 if (itemInCart) {
const counterEl = itemInCart.querySelector('[data-counter]')
// с помощью parseInt преобраз строку счетчика в числа и складываем счетчик товара на странице и счетчик товара в корзине
counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter)
 } else {
  // если товара нет в корзине
// создаем шаблон для товаров в корзине
// используем обратные ковычки для работы с шаблонными строками, чтобы мы могли совместить и HTML разментку и вставить нужные переменные
// вставляем наш див с шаблоном товара из корзины в шаблонную строку
// теперь на необходимые места в шаблоне мы делаем подстановку свойств объекта productInfo 

const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
<div class="cart-item__top">
    <div class="cart-item__img">
        <img src="${productInfo.imgSrc}" alt="">
    </div>
    <div class="cart-item__desc">
        <div class="cart-item__title">${productInfo.title}</div> 
        <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

        <!-- cart-item__details -->
        <div class="cart-item__details">

            <div class="items items--small counter-wrapper">
                <div class="items__control" data-action="minus">-</div>
                <div class="items__current" data-counter="">${productInfo.counter}</div>
                <div class="items__control" data-action="plus">+</div>
            </div>

            <div class="price">
                <div class="price__currency">${productInfo.price}</div>
            </div>

        </div>
        <!-- // cart-item__details -->

    </div>
</div>
</div>`

// Отобразим товар в корзине
//  Внутрь cartWrapper добавляем шаблон с помощью метода insertAdjacentHTML, кот позволяет вставлять кусок html разметки внутрь элемента  
// Этот метод принимает в себя первым аргументом - куда именно добавим кусок кода(в началр, в конец, перед началом, после завершения элемента), второй аргумент - сам html код
// beforeend - перед завершением каждый новый товар будет добавляться в конец
cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
 }
//Сбрасываем счетчик товара после добавления в корзину
card.querySelector('[data-counter]').innerText = '1'

// Отображение статуса корзины Пустая/полная
toggleCartStatus()

// Пересчет общей стоимости товаров в корзине
calcCartPriceAndDelivery ()

}

})
   