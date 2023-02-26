// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let lenth = (string) => {
    string.length;
    console.log(string.length)

}
lenth('hello world')
lenth('lorem ipsum')
lenth('javascript is cool')

// - Перевести до великого регістру наступні стрінгові значення

let str = (string1) => {
    console.log(string1.toUpperCase())
}

str('hello world')
str('lorem ipsum')
str('javascript is cool')

// 'hello world', 'lorem ipsum', 'javascript is cool'

// - Перевести до нижнього регістру настyпні стрінгові значення
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());
// Є "брудна" стрінга
// . Почистити її від зайвих пробілів.

let str1 = ' dirty string   ';
console.log(str1.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str2 = 'Ревуть воли як ясла повні';
let stringToArray = (string) => {
    let arrString = string.split(' ');
    return arrString;

}
console.log(stringToArray(str2));


let arrNums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrStrings = arrNums.map((item => item.toString()))
console.log(arrStrings);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];


let sortNums = (arr1, condition) => {
    if (condition === 'ascending') {
        return arr1.sort((a, b) => b - a)
    }
    if (condition === 'descending') {
        return arr1.sort((a, b) => a - b)
    }

}


console.log(sortNums(nums, 'descending'))
console.log(sortNums(nums, 'ascending'))


// В такому виді arrsort.sort((a, b) => a > b) чомусь не працювалло в мене)
// let sortNu = (arrsort, order) => {
//     switch (order) {
//         case 'ascending':
//             return arrsort.sort((a, b) => a > b)
//         case 'descending':
//             return arrsort.sort((a, b) => b < a)
//     }
//
// }
// console.log(sortNu(nums, 'ascending'))
// console.log(sortNu(nums, 'descending'))


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5))
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let newCoursesAndDurationArray = coursesAndDurationArray.map((value, index) => ({...value, id: index + 1}))
console.log(newCoursesAndDurationArray);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},

    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},

    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},

    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},

]
// - знайти піковий туз

console.log(cards.filter(item => item.cardSuit === 'spade' && item.value === 'ace'));

// - всі шістки
console.log(cards.filter(item => item.value === '6'));

// - всі червоні карти
console.log(cards.filter(item => item.color === 'red'));
// - всі буби
console.log(cards.filter(item => item.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
console.log(cards.filter(item => item.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(item.value)));
//
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let cs = cards.reduce((acumulyator, value) => {
    if (value.cardSuit === 'spade') {
        acumulyator.spade.push(value)
    }

    if (value.cardSuit === 'diamond') {
        acumulyator.diamond.push(value)

    }

    if (value.cardSuit === 'heart') {
        acumulyator.heart.push(value)
    }

    if (value.cardSuit === 'clubs') {
        acumulyator.clubs.push(value)
    }
    return acumulyator;
}, {
    spade: [],
    diamond: [],
    heart: [],
    clubs: []
})
console.log(cs);

// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass

let find= coursesArray.filter((item)=>item.modules.includes('sass'))
console.log(find);

// --написати пошук всіх об'єктів, в який в modules є docker

let find1= coursesArray.filter((item)=>item.modules.includes('docker'))
console.log(find1);