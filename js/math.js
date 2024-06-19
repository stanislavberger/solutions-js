//Math module

//Возведение в степень
function sum () {
    const sum = a ** b
    return sum;    
}

//ABS - можно ставить любые операторы и пользоваться формулой без создания новых компонентов
/*
function difference(a, b) {
    return Math.abs(a * b)
}

console.log(difference(2, 10))
*/

//ceil - Округляет к ближнему верхнему значению
//console.log(Math.ceil(1.15))

//round - округляет число
//console.log(Math.round(234.4999999999999))

//floor - Округляет к ближнему нижнему значению
//console.log(Math.floor(10.8))

//cbrt - кубический корень
//console.log(Math.cbrt(27))

//MAX - Наибольшое число в ряду
//console.log(Math.max(1, 9, 201, 12, 83))

//MIN - Наименьшее число в ряду
//console.log(Math.min(1, 9, 201, 12, 83))

// Random - создает число с плавающей точкой между 0 и 1
//console.log(Math.random())

//Генерация рандомного числа в отрезке между числами
/* 
function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

console.log(getRandomNumber(1, 100000))
*/