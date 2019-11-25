// variables

// to declare variable {String}
let maName = "A. A. Sumitro";
let maNameType: string = "A. A. Sumitro"

// number data types
let umur: number = 25;
umur = 21;
umur = 12;

// boolean
let isMarried: boolean;
isMarried = false;


// any
let heroes: any;
heroes = "Oh Yea";
console.log(heroes);
heroes = 1;
console.log(heroes);
heroes = false;
console.log(heroes);
heroes = ["asd", "qwe", "zxc"];
console.log(heroes);
heroes = {"key": "Value"};
console.log(heroes);
heroes = true || false;
console.log(heroes);
heroes = true || 1 || "yes";
console.log(heroes);


// Array

// array number
let arrayNumb: number[];
arrayNumb = [1, 2 , 3];
console.log(arrayNumb);

// array string
let arrayStr: string[];
arrayStr = ["asd", 'qwe', 'zxc'];
console.log(arrayStr)

// any
let arrayAny: any[];
arrayAny = [1, 2, 3];
console.log(arrayAny);
arrayAny = ["asd", 'qwe', 'zxc'];
console.log(arrayAny);
arrayAny = [true, false]
console.log(arrayAny);
arrayAny = [1, "asd", true, {'key': 'value'}]
console.log(arrayAny);



// Tuples
// tuples is an array that can be used/assing
// with any data types with limited item/value


let bio: [string, number];
bio = ["kotamobagu", 308];
console.log(bio);




// Enum
// enum is data types that store const value


// numeric enums

enum Months {
    JAN,
    FEB,
    MAR,
    APR
}

console.log(Months[0]);
console.log(Months.JAN); // will print index of array = 0

// but we want the first value is not index of array/0 we want
// first value is 1 so we can do with this:

enum Months2 {
    JAN = 1,
    FEB,
    MAR,
    APR
}

console.log(Months2[0]); // undefinied because we chage the index
console.log(Months2[1]);
console.log(Months2[2]);
console.log(Months2.JAN);
console.log(Months2.FEB);


// we also can do this

enum Months3 {
    JAN = 1,
    FEB = 100,
    MAR,
    APR = 1000
}

console.log(Months3.JAN); // 1
console.log(Months3.FEB); // 100
console.log(Months3.MAR); // 101
console.log(Months3.APR); // 1000


// string enum

enum MonthsName {
    JAN = "Januari",
    FEB = "Februari",
    MAR = "Maret",
    APR = "April"
}

console.log(MonthsName.FEB)



// function

function getStatus(): string {
    return "Hello, Status";
}

function getAge(): number {
    return 123;
}


// this will not return anything
function testConsole() {
    console.log("testConsole")
    return "testConsole";
}

// void can not return anything
function testConsoleVoid(): void {
    console.log("testVoid")
}

console.log(getStatus());
console.log(getAge());
testConsole();
testConsoleVoid();


// arguments

function sum(x: number, y: number): number {
    return x + y;
}
const result = sum(5, 2);
console.log(result)


// function as data types

type Age = number;
let age: Age = 1;
console.log(age);

type multipy = (x: number, y: number) => number;
const mult: multipy = (x: number, y: number): number => {
    return x * y
}
const mult2: multipy = (x: number, y: number): number => x * y
console.log(mult(4, 3));
console.log(mult2(3, 3));


// Object


type User = {
    name: string,
    address: string,
    status: boolean
}

let user = {
    name: "A. A. Sumitro",
    address: "Heaven",
}

console.log(user);


// union type

let phone: number | string;

phone = 62822000000;
console.log(phone);
phone = "0822000000"
console.log(phone);



// default paramenter

const fullName = (firstName: string, lastName: string = "code"): string => {
    return firstName + lastName
}

console.log(fullName("Just "))
console.log(fullName("Just ", "Test"))


// optional paramenter

const getMaName = (x: string, y?: string): string => {
    return x + " "  + y;
}
console.log(getMaName("Test", "Just"))
console.log(getMaName("Test")) // undifined


//  class

export class Data
{

    public name: string;

    constructor(name: string)
    {
        this.name = name;
    }

}

export class Data2
{
    constructor(public name: string) { }
}

let data = new Data("A. A. Sumitro");
console.log(data)

let data2 = new Data2("A. A. Sumitro")
console.log(data2)




// inheritance

class CarTest
{
    constructor(
        public name: string
    ) { }
}

class Toyota extends CarTest
{
    type: string = "avanza";
    color: string = "white";

    // constructor  on child class
    body_number: string;
    constructor(name: string, body_number: string) {
        super(name);
        this.body_number = body_number;
    }
    // end constructor  on child class

    getModel(): { type: string, color: string } {
        return {
            type: this.type,
            color: this.color
        };
    };


    // getter setter

    private sales: string = "";

    set setSales(val: string) {
        this.sales = val;
    }

    get getSales(): string {
        return this.sales
    }

    // static property

    static getPrice: number = 120000;
}

let toyota = new Toyota("toyota", "123#asd$1sad")
console.log(toyota.name);
console.log(toyota.getModel());

// getter setter
toyota.setSales = "yunita sari"
console.log(toyota.getSales)

// static property
console.log(Toyota.getPrice)


// abstraction

abstract class Vehicle {

    abstract wheels: number;

    start(): void {
        console.log("brummmm bum bum bum . . . .")
    }

}


// class Car extends Vehicle {

// }

// class Motorcycler extends Vehicle {

// }