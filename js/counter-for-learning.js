const btnMinus = document.querySelector('[data-action="minus"]') //поиск по дата атрибуту, записываем в квадратных скобках

const btnPlus = document.querySelector('[data-action="plus"]')

const counter = document.querySelector('[data-counter]')

console.log(counter)

btnMinus.addEventListener('click', function(){

    if (parseInt(counter.innerText) > 1) {  // parseInt приводит строку к ЦЕЛОМУ числу, мы проверяем чтобы было больше 1, чтобы не было отриц чисел и 0 в корзине
        counter.innerText = --counter.innerText
    }  
})

btnPlus.addEventListener('click', function(){
    counter.innerText = ++counter.innerText   //innerText не только перезаписывает текст внутри элемента, если мы не перезаписываем, а просто обращ к нему, то он возвращает существующее значение
   //увеличиваем counter на 1 при клике и сразу же возврашаем это значение
})

