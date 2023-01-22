'use strict'
const calcEl = document.querySelector('.calc')
const outputEl = document.querySelector('.output')
const buttonsEl = document.querySelector('.buttons')
console.log(outputEl.textContent);
let instance = '' // Переменная для записи строки
let result = 0  // Переменная для записи результата
const erase = '' // Переменная обнуления


function forbit(elem) { // Запрещает выделение и вывод контекстного меню
    elem.onmousedown = function(){
        return false
    }
    elem.oncontextmenu = function(){
        return false
    }
}
function calculation(){
    if(regExp.test(instance)){
        let [, num1, sign, num2] = instance.match(regExp)
        num1 = Number(num1)
        num2 = Number(num2)
        switch(sign){
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num1 / num2; break;
        }
        outputEl.textContent = result; // Выводит результат
        instance = erase // Обнуляем переменную с сторокой
        result = erase // Обнуляем рультат
    }

}
forbit(calcEl)

let regExp = /(\d+)([\+\-\*\/])(\d+)/ // Регулярное выражение для разделения строки на 3 индекса: 1 число, оператор, 2 число

buttonsEl.addEventListener('click',e=>{
    let {target} = e // Деструктурируем target
    if(target.dataset.sign !== '='){ // При нажатии на кнопку кроме знака ровно, выводит значение на экран 
        instance += target.dataset.sign 
        outputEl.textContent = instance
    }else{ // При нажатии на знак ровно пропускает строку через регулярное выражение и решает пример
        calculation()
    }
    if(target.dataset.sign === 'C'){ // При нажании на кнопку С обнуляет введенные данные 
        outputEl.textContent = erase
        instance = erase
    }
})

document.addEventListener('keydown',e=>{
    console.log(e);
    let {key} = e
    if(key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9' || key === '0' || key === '+' || key === '-' || key === '*' || key === '/'){
    instance += key
    outputEl.textContent = instance
    }
    if(key === 'Backspace'){
        instance = instance.slice(0,-1)
        outputEl.textContent = instance;
    }
    if(key === 'Enter'){
        calculation()
    }
})

