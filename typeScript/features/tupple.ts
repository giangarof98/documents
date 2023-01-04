//regular object
const drink = {
    color: 'brown',
    size: 'medium',
    sugar: 20,
    carbonated: false
}

//declare typle variable
let coke: [string, number, boolean];
//initialize tupple 
coke = ['pepsi', 20, true]

//array of tupples
let movies: [string, number, boolean][];
movies = [ 
    ['marvel',10,true], 
    ['dc',2,false], 
    ['lotr',1,false] 
];

//tuple structure

//type alias
type Planet = [string, boolean, number]
const mercury: Planet = ['No habitable', false, 1]
const venus: Planet = ['No habitable', false, 2]
const earth: Planet = ['Habitable', false, 2]

const y: [number,string] = [2,'g']


//tupple
let person: [number,string,boolean] = [1,'hello',false];
let employee: [number,string,][];
employee = [
    [1,'jhon'],
    [1,'mark'],
    [1,'luke']
];