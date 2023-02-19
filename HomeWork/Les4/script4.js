// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function size(a, b) {
    return a * b;

}

console.log(size(12, 22))


// - створити функцію яка обчислює та повертає площу кола з радіусом r


function radius(r) {
    let p = 3.14;
    return p * Math.pow(r, 2);
}

console.log(radius(33))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function area(h, r) {
    let p = 3.14;
    return 2 * p * r * h;

}

console.log(area(12, 34));


// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


function arrElement(arr) {
    for (const arrElement1 of arr) {
        console.log(arrElement1)
    }
}

arrElement(users);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function text(write) {
    let p = `<p>${write}</p>`
    document.write(p)
}

text('Hello World')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul_li(text_li) {
    let text = `<ul>
<li>${text_li}</li>
<li>${text_li}</li>
<li>${text_li}</li>
</ul>`
    document.write(text)
}

ul_li(`Privet`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ulCreator(text, num) {

    for (i = 1; i <= num; i++) {
        let li = `<ul>
<li>${text}</li>
</ul>`
        document.write(li)
    }
}

ulCreator(`Home Work`, 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr = [11, 39, `world`, `car`, true, false, 32];

function arrIter(arr) {
    document.write(`<ul>`)
    for (const arrElement1 of arr) {
        document.write(`<li>${arrElement1}</li>`)
    }
    document.write(`</ul>`)
}

arrIter(arr);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users1 = [
    {name: 'vasya', age: 31, id: 11},
    {name: 'petya', age: 30, id: 11},
    {name: 'kolya', age: 29, id: 11},
    {name: 'olya', age: 28, id: 23},
    {name: 'max', age: 30, id: 43},
    {name: 'anya', age: 31, id: 12},
    {name: 'oleg', age: 28, id: 78},
    {name: 'andrey', age: 29, id: 4},
    {name: 'masha', age: 30, id: 2},
    {name: 'olya', age: 31, id: 1},
    {name: 'max', age: 31, id: 87}
];

function arrObj(arr) {
    for (let arrElement1 of arr) {
        document.write(`<div>${arrElement1.id}</div>`)
        document.write(`<div>${arrElement1.name}</div>`)
        document.write(`<div>${arrElement1.age}</div>`)

    }
}

arrObj(users1)

// - створити функцію яка повертає найменьше число з масиву
let num = [11, 2, 3, 4, 7, 89, 5, 3, 89, 5, 6];

function min_num(numArr) {
    let num1 = numArr[0];
    for (let numArrElement of numArr) {
        if (num1 > numArrElement) {
            num1 = numArrElement;
        }

    }
    return num1;
}

console.log(min_num(num))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sumArr(arr) {
    let sum = 0;
    for (let sumElement of arr) {
        sum = sum + sumElement;
    }
    return sum;
}

console.log(sumArr(num));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    let z1 = arr[index1];
    let z2 = arr[index2];
    arr[index1] = z2;
    arr[index2] = z1;
    return arr;
}

console.log(swap(num, 2, 5));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange( uah, currencies, exitCurrency){
    let res;
    for (const item of currencies) {
        if(item.currency===exitCurrency){
            res=uah/item.value
        }

    }
    return res;
}


console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))