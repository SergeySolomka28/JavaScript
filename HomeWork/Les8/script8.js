// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let user = new User(11, 'kolya', 'pupkin', 'pupkin@gmail.com', 0993572985);
// console.log(user);
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let arrUser = [
//     new User(31, 'kolya', 'pupkin', 'pupkin@gmail.com', 0992372985),
//     new User(11, 'vasya', 'surkin', 'surkin@gmail.com', 0992372985),
//     new User(16, 'dima', 'gulkin', 'gulkin@gmail.com', 0992374485),
//     new User(12,'ivan','ivanov','ivanov@gmail.com',09899334857),
//     new User(48,'gregory','bilyak','bilyak@gmail.com', 0634563345),
//     new User(99, 'mike','adamov','adamov@gmail.com',0678983452),
//     new User(13,'galina' ,'petrova','petrova@gmail.com',0634567898),
//     new User(77,'tanya','sinisa','sinisa@gmail.com',0635462134),
//     new User(76,'petro','pyatochkin','pyatochkin@gmail.com',0998329988),
//     new User(33,'rafael','redukevich','redukevich@gmail.com',0934488992)
// ]
//
// console.log(arrUser);
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter=arrUser.filter((item=>item.id%2===0));
// console.log(filter);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort=arrUser.sort((a,b)=>a.id-b.id)
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class Clients {
//     constructor(id, name, surname, email, phone, order) {
//         User.call(this, id, name, surname, email, phone)
//         this.order = order;
//     }
// }

// let arrClients=[
//     new Clients(31, 'kolya', 'pupkin', 'pupkin@gmail.com', 0992372985, ['laptop','mouse','phone']),
//     new Clients(11, 'vasya', 'surkin', 'surkin@gmail.com', 0992372985, ['laptop','mouse','phone','book']),
//     new Clients(16, 'dima', 'gulkin', 'gulkin@gmail.com', 0992374485, ['car','pensil']),
//     new Clients(12,'ivan','ivanov','ivanov@gmail.com',09899334857 , ['car','pensil','table']),
//     new Clients(48,'gregory','bilyak','bilyak@gmail.com', 0634563345,['car','pensil',]),
//     new Clients(92, 'mike','adamov','adamov@gmail.com',067898345677, ['car','pensil']),
//     new Clients(13,'galina' ,'petrova','petrova@gmail.com',0634567898, ['apple']),
//     new Clients(77,'tanya','sinisa','sinisa@gmail.com',0635462134,['water']),
//     new Clients(76,'petro','pyatochkin','pyatochkin@gmail.com',0998329988, ['table','apple']),
//     new Clients(33,'rafael','redukevich','redukevich@gmail.com',0934488992, ['guitar'])
// ]
// let sortClient = arrClients.sort((a,b)=>a.order.length-b.order.length );
// console.log(sortClient);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function CarsProperties(model, producer, year, maxSpeed, volumeEngine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volumeEngine = volumeEngine;
    this.drivers = [];

    this.drive = function drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}`)
    }

    this.info = function info() {
        console.log('##########')
        for (const key in this) {
            if (typeof this[key] === 'function') continue;
            console.log(`${key} -- ${JSON.stringify(this[key])}  `)

        }
        console.log('##########')
    }
    this.increaseMaxSpeed = function (newSpeed) {
        let speed = newSpeed + maxSpeed;
        if (speed < 0) {
            this.maxSpeed = 0
        } else {
            this.maxSpeed = speed;
        }

    }

    this.changeYear = function (newValue) {
        this.year = newValue;
    }


    this.addDriver = function (name, age) {

        this.drivers.push(new Driver(name, age)); //не можу зрозуміти чому тут не пушится в масив
        function Driver(name, age,) {
            this.name = name;
            this.age = age;
        }


    }
}

let cars = new CarsProperties('Ford Mustang', 'Ford', '2002', 250, 3)

cars.drive();
cars.changeYear(1945);
cars.info()
cars.increaseMaxSpeed(40);
cars.info();
cars.addDriver('Petya', 33);
cars.info();
cars.drive();


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class carsProperties {
    constructor(model, producer, year, maxSpeed, volumeEngine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volumeEngine = volumeEngine;
        this.drivers = [];
    }

    drive() {
        console.log(`Їдемо зі швидкістю - ${this.maxSpeed} км/год`);
    }

    info() {
        console.log('**********');
        for (const key in this) {

            if (typeof [key] === 'function') continue;

            console.log(`${key} --- ${JSON.stringify(this[key])}`)

        }
        console.log('**************');
    }

    increaseMaxSpeed(newSpeed) {
        const speed = this.maxSpeed + newSpeed;
        if (speed < 0) {
            this.maxSpeed = 0;
            console.log('Enter new speed')
        } else {

            this.maxSpeed = speed;


        }
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(name, age) {
        this.drivers.push(new driver(name, age));
    }
}

class driver {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let cars1 = new carsProperties('Ford Mustang', 'Ford', '2002', 250, 3);
cars1.drive();
cars1.info();
cars1.increaseMaxSpeed(332);
cars1.info();
cars1.changeYear(2022);
cars1.info();
cars1.addDriver('Kol', 32);
cars1.info();
cars1.drive()


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Princesa {
    constructor(name, age, legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}

class Princ {
    constructor(name, age, findSize) {
        this.name = name;
        this.age = age;
        this.findSize = findSize;
    }
    find(arr){
        return arr.find((Princesa)=>princ.findSize===this.legSize)
    }
}

let princ = new Princ('Sergey', 30, 38);
const princesaArr = [
    new Princesa('Anna', 38, 38),
    new Princesa('Tamara', 58, 40),
    new Princesa('Alina', 18, 36),
    new Princesa('Olga', 19, 37),
    new Princesa('Irina', 20, 38),
    new Princesa('Rita', 18, 39),
    new Princesa('Inna', 18, 35),
    new Princesa('Tanya', 38, 36),
];
for (const princesa of princesaArr) {
    if (princ.findSize === princesa.legSize) {
        console.log(princesa);
    }
}
console.log(princesaArr.find())
