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