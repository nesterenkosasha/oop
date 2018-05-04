задача1:

class Worker {
    constructor(name, surname, rate, days){
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
        getSalary () {
            return this.days * this.rate
        }

}


function Worker (name, surname, rate, days) {

        this.getName = function () {
            return name
        }

        this.getSurname = function () {
            return surname
        }

        this.getRate = function () {
            return rate
        }

        this.getDays = function () {
            return days
        }

        this.getSalary = function () {
            return rate * days
        }
}


задача 3:

function Worker (name, surname, rate, days) {

        this.getName = function () {
            return name
        }

        this.getSurname = function () {
            return surname
        }
        this.setRate = function (value) {
            return rate = value
        }

        this.getRate = function () {
            return rate
        }

        this.setDays = function (value) {
            return days = value
        }

        this.getDays = function () {
            return days
        }

        this.getSalary = function () {
            return rate * days
        }
}


const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10

//задача 4:

class MyString {
    reverse(str){
        return str.split("").reverse().join("")
    }
    ucFirst(str){
        return str[0].toUpperCase() + str.substr(1)
    }
    ucWords(str){
        return str.split(" ").reduce((acc, el) => {
            return acc = [...acc, el[0].toUpperCase() + el.substr(1)]
        }, []).join(" ")
    }
}

const str = new MyString();
console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'


function Validator (){
    const isValid = {
        mail: /^.+\@.{4,}\..{2,}$/,
        domain: /^.+\.net$/,
        date: /^(\d{2,}\.){2}\d{4,}$/,
        phone: /^\+\d{12}$/
    }
    this.isEmail = function (value) {
        if( isValid.mail.test(value) ) return true
        return false
    }
    this.isDomain = function (value) {
        if( isValid.domain.test(value) ) return true
        return false
    }
    this.isDate = function (value) {
        if( isValid.date.test(value) ) return true
        return false
    }
    this.isPhone = function (value) {
        if( isValid.phone.test(value) ) return true
        return false
    }

}
const validator = new Validator();
console.log(validator);

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+380989817689')); //тут можете валидировать наличия плюса в начале номера и код страны

//задача 5

class User{
    constructor(name, surname, year){
        this.name = name
        this.surname = surname
        this.year = year
    }
    getFullName(){
        return `${this.name} ${this.surname}`
    }
}

class Student extends User {
    constructor(...props){
        super(...props)
        this.date = new Date().getFullYear()
    }
    getCourse(){
        console.log(this.date, this.year)
        return this.date - this.year
    }
}

var student = new Student('Иван', 'Иванов', 2015);

console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2015
console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2018

//6--
function funct(){
    let i = 0
    return function a (){
        return ++i
    }
}
const func = funct()
console.log(func())
console.log(func())
console.log(func())
console.log(func())

//--------------------























