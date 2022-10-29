const today = new Date();

//variables
let apple: number = 5;
let kiwi: string = 'fruit';
let yesterday: boolean = false;
let something: null = null;
let nothing: undefined = undefined;

//built in object
let now: Date = new Date()

//Array
let colors: string[] = ['red','blue','yellow']
let num: number[] = [1,2,3,4]
let val: boolean[] = [true, false, false, true]

//classes
class Universe {

}
let universe: Universe = new Universe();

//object literal
let point: {x:number; y:string} = {
    x:10,
    y:'ten'
};

//function
const func: (i: number) => void = (i: number) => {
    console.log(i)
}

// When define a object
const json = `{
    'x':20
    'y':30
}`;
const coordinates: {x:number, y:number} = JSON.parse(json);
console.log(coordinates)

//when define a variable in one line and
//initialize it later

let words = ['red','yellow','blue'];
let foundword: boolean;

for (let i = 0; i < words.length; i++){
    words[i] ? 'green' : foundword = true
}

//when the variable cant be inferred
let number = [1,2,3,4];
let zero: boolean | number = false;

for (let i = 0; i < number.length; i++){
    number[i] ? 0 : zero = number[i]
}

//assign the type to the function
const add = (a:number, b:number): number => {
    return a + b;
}

//Define the type in different functions

function subs(a:number, b:number): number{
    return a - b
}

const divide = function(a:number, b:number): number{
    return a / b;
}

//Void
const v = function(a:number, b:number): void{
    return undefined;
}

//Destructuring functions
const forecast = {
    date: new Date(),
    day: 'today'
}
//first way
const forecastWeather1 = (forecast: {date: Date, day: string}):void => {
    console.log(forecast.date, forecast.day)
}
//second way
const forecastWeather2 = ({date, day}: {date: Date, day: string}):void => {
    console.log(date, day)
}



//objects

const person = {
    personName: 'jhon',
    age:20,
    location: {
        lat: 20,
        lon: 0
    },
    setAge(age:number): void{
        this.age = age;
    },
    setName(name:string): void{
        this.name = name;
    }
}

const {age, personName}: {age:number; personName:string} = person;
const {location: {lat, lon}}: {location: {lat:number, lon:number}} = person;


//Arrays

const cars: string[] = ['toyota','subaru','corolla','camry']

const carsArray: string[][] = [
    ['toyota'],
    ['hyundai'],
    ['camaro']
]

cars.map((car:string): string => {
    return car
})

//Multiple arrays types

const carMakeByYear: (number | string)[] = [2020, 'toyota']