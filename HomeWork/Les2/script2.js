//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arrelement = ['world', 22, 12, 123, 45, 'hello', true, false, 999, 10]

console.log(arrelement)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    Title: "World",
    pageCount: 234,
    Genre: "Fantasy"
}
console.log(book1)

let book2 = {
    Title: "THE DARK TOWER",
    pageCount: 432,
    Genre: "Fantasy"
}
console.log(book2)
let book3 = {
    Title: "PET  SEMATARY KING",
    pageCount: 321,
    Genre: "Fantasy"
}
console.log(book3)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age

let book_1 = {
    Title: "World",
    pageCount: 234,
    Genre: "Fantasy",
    Autor: [{
        Name: "Wiki",
        Age: 35
    }]
}
console.log(book_1)

let book_2 = {
    Title: "THE DARK TOWER",
    pageCount: 432,
    Genre: "Fantasy",
    Autor: [{
        Name: "King",
        Age: 78

    }]
}

console.log(book_2)
let book_3 = {
    Title: "PET  SEMATARY KING",
    pageCount: 321,
    Genre: "Fantasy",
    Autor: [{
        Name: "King",
        Age: 78
    }]
}
console.log(book_3)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
//
// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
//
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".