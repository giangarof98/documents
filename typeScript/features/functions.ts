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