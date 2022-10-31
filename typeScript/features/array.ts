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

const carMakeByYear: (number | string)[] = [2020, 'toyota'];