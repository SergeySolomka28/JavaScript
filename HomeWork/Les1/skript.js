<!-- - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true,-->
<!--false.-->
<!--Вивести кожну змінну за допомогою: console.log-->

let hello = "hello";
let owu = "owu";
let com = "com";
let ua = "ua";
let num1= 1;
let num2= 10;
let num3= -999;
let num4= 123;
let num5= 3.14;
let num6 = 2.7;
let num7 = 16;
let tru= true;
let fal= false;


console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(tru);
console.log(fal);

<!-- - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не-->
<!--об'єкт, просто за допомоги конкатенації)-->

let fistName = "Solomka";
let middleName = " Serhii";
let lastName = " Oleksandrovich"

let person = fistName+middleName+lastName;
console.log(person);

let person1 = (`${fistName}${middleName}${lastName}`);
console.log(person1);

<!-- - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.-->
<!--let a = 100; let b = '100'; let c = true;-->
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
<!--Додаткове для тих хто цікавився prompt`oм-->
<!-- - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в-->
<!--консоль-->
let name = prompt("My Name?");
console.log(name);
let nameLast =prompt( "My LastName?");
console.log(nameLast);
let old= prompt("How Old Are You?");
console.log(old);