//how define a interface
interface Vehicle {
    // name: string,
    // year: number,
    // broken: boolean,
    // date: Date,
    //A function that return a string
    summary(): string
}

const oldCar = {
    name: 'civic',
    year: 2000,
    broken: true,
    date: new Date(),
    summary(): string{
        return `Name: ${this.name}`
    }
};

//Without interface

// const printVehicle = (
//     //parameter
//     vehicle : {
//         name: string,
//         year: number,
//         broken: true
//     }
//     //function returns is void
//     //we dont expect to return nothing
// ): void => {
//     console.log(`${vehicle.name}`)
//     console.log(`${vehicle.year}`)
//     console.log(`${vehicle.broken}`)
// }

//With interface
const printVehicle = (vehicle : Vehicle): void => {
    console.log(`${vehicle.summary()}`)
    // console.log(`${vehicle.year}`)
    // console.log(`${vehicle.broken}`)
}

printVehicle(oldCar)