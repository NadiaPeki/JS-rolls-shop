const productsContainer = document.querySelector('#products-container')
// запускаем эту функцию вверху файла чтобы товары сразу были получены на странице
getProducts() 
async function getProducts() {
    // через fetch мы получаем данные из файла products.json, но нам нужно эти данные дождаться, поэтому мы используем await
   // записываем в константу response, в кот записан объект типа response кот содержит ответ
    const response = await fetch('./js/products.json')
  // получаем тело ответа и нам нужно его достать чтобы с ним поработать
    // есть различные методы как достать этот ответ в зависимости от типа данных кот мы получаем
    // тк у нас тип json то к нашему ответу (response) применяем метод json

    //метод json сразу конвертирует данные из json формата(формата строки) в js формат (в данном случпе массив)
    // нам также нужно подождать пока это действие выполнится, поэтому исп await 
     const productsArray = await response.json()
    
      // передаем в функцию renderProducts массив с продуктами
     renderProducts(productsArray)

}

// мы получили наши продукты
// теперь мы будем их рендерить то есть воспроизводить

function renderProducts(productsArray ) {
    // обходим массив через метод forEach и для каждого отдельного продукта мы запускаем функцию которая принимает в себя каждый товар item
    productsArray.forEach(function(item) {
//создаем константу с разметкой для продукта, копируем кусок кода с продуктом в обратные ковычки
// и заполняем данные в разметке
    const productHTML = `<div class="col-md-6">
    <div class="card mb-4" data-id="${item.id}">
        <img class="product-img" src="img/roll/${item.imgSrc}" alt="">
        <div class="card-body text-center">
            <h4 class="item-title">${item.title}</h4>
            <p><small data-items-in-box class="text-muted">${item.itemsInBox}</small></p>

            <div class="details-wrapper">

                <!-- Счетчик -->
                <div class="items counter-wrapper">
                    <div class="items__control" data-action="minus">-</div>
                    <div class="items__current" data-counter>1</div>
                    <div class="items__control" data-action="plus">+</div>
                </div>
                <!-- // Счетчик -->

                <div class="price">
                    <div class="price__weight">${item.weight}</div>
                    <div class="price__currency">${item.price}</div>
                </div>
            </div>

            <button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

        </div>
    </div>
</div>`
//Добавляем этот шаблон на страницу в productsContainer кот мы нашли ранее 
// используем метод insertAdjacentHTML. Первый арг куда вставлять, второй что вставлять
productsContainer.insertAdjacentHTML('beforeend', productHTML)
    })
 
}

// таким образом функция renderProducts примет в себя массив, обойдет его,
// для каждого из элементов массива сгенерирует разметку и по очереди вставит ее перед закрытием контейнера productContainer 
// эту функцию мы вызываем внутри функции getProducts
// т е мы получили данные из файла, преобразовали их в массив и передали этот массив в функцию renderProducts