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
let arrobj = [{
    Name: "vasya",
    username: "vasya12",
    password: 12344
},
    {
        Name: "petya",
        username: "pet12",
        password: 65656
    },
    {
        Name: "valya",
        username: "val12",
        password: 87853
    },
    {
        Name: "sasha",
        username: "sas12",
        password: 23455
    },
    {
        Name: "kolya",
        username: "kol12",
        password: 23455
    },
    {
        Name: "lola",
        username: "lol12",
        password: 23435
    },
    {
        Name: "nikola",
        username: "nik12",
        password: 23344
    },
    {
        Name: "vasya",
        username: "vasya12",
        password: 78765
    },
    {
        Name: "denis",
        username: "den12",
        password: 45744
    },
    {
        Name: "kolyan",
        username: "kol12",
        password: 45677
    }
]
console.log(arrobj[0].password,
    arrobj[1].password,
    arrobj[2].password,
    arrobj[3].password,
    arrobj[4].password,
    arrobj[5].password,
    arrobj[6].password,
    arrobj[7].password,
    arrobj[8].password,
    arrobj[9].password,
)
//
// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = prompt('write x?')

if (x != 0) {
    console.log("true")
} else {
    console.log("false")
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = prompt('what time is it?')
if (time > 0 && time <= 15) {
    console.log('first quarter');
} else if (time > 15 && time <= 30) {
    console.log('second quarter');
} else if (time > 30 && time <= 45) {
    console.log('third quarter')
} else if (time > 45 && time <= 59) {
    console.log('fourth quarter');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt('what is today number?')
if (day > 0 && day <= 10) {
    console.log('first decade')
} else if (day > 10 && day <= 20) {
    console.log('second decade');
} else if (day > 20 && day <= 31) {
    console.log('third decade');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day1 = prompt('Enter Day')
switch (day1) {
    case "1":
        console.log("monday");
        break;
    case "2":
        console.log("tuesday");
        break;
    case "3" :
        console.log("wednesday");
        break;
    case "4" :
        console.log("thursday");
        break;
    case "5" :
        console.log("friday");
        break;
    case "6" :
        console.log("saturday");
        break;
    case "7" :
        console.log("sunday");
        break;
    default:
        console.log('error')
}


// - Користувач вводить або має два числа.

// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let a = 4;
let b = 9;

if (a > b) {
    console.log(b);
} else if (b > a) {
    console.log(b);
} else if (a === b) {
    console.log('equivalent');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
let x1 = '';
let res = x1 || "hello"
console.log(res);


//
//
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('super');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('super');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('super');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('super');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('super');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('super');
}