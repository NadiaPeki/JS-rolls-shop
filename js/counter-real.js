 // добавляем прослушку на всем окне используя глобальный объект window

    window.addEventListener('click', function(event) {
   // Объявляем переменную для счетчика
    let counter
    // проверяем действительно ли мы кликнули внутри счетчика(по кнопке минус или плюс) и только тогда будем искать родителя этой кнопки
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
   // находим родителя элемента(кнопки плюс или минус), т е обертку счетчика
    const counterWrapper = event.target.closest('.counter-wrapper')
  // находим от этого родителя data-counter, див с числом нужного счетчика
    counter = counterWrapper.querySelector('[data-counter]')
    }
    // получаем доступ к дата-атрибуту кликаемого элемента через свойство dataset. А название нужного атрибута пишем уже без слова data
   // проверяем является ли элемент по которому мы кликнули кнопкой плюс и минус    
    if(event.target.dataset.action === 'plus') {  
    
    counter.innerText = ++counter.innerText 
    }

    if(event.target.dataset.action === 'minus') {  
     // проверяем чтобы счетчик был больше 1
    if (parseInt(counter.innerText) > 1) {  
      //изменяем текст в счетчике уменьшая его на 1
    counter.innerText = --counter.innerText
    // проверяем лежит ли даннная кнопка в корзине cart-wrapper
    }  else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
      // удаляем товар из корзины
      event.target.closest('.cart-item').remove()
     // отображение статуса корзины Пустая /полная
      toggleCartStatus()

      // Пересчет общей стоимости товаров в корзине
      calcCartPriceAndDelivery ()
    }
   

    }
    // Проверяем клик на плюс или минус внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
    // Пересчет общей стоимости товаров в корзине
    calcCartPriceAndDelivery ()
    }

    })  