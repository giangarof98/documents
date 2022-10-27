let id: number = 5;
let word: string = 'Hello';
let istrue: boolean = false;
let x: any= 'hello';
let ids: number[] = [1,2,3,4];
let arr: any[] = [1,2,'hello', false];

//tuple
let person: [number,string,boolean] = [1,'hello',false];
let employee: [number,string,][];
employee = [
    [1,'jhon'],
    [1,'mark'],
    [1,'luke']
];

//union
let pId: string | number;
pId = '22';

//Enum

enum direction {
    up = 'up',
    down = 'down',
    left = 'left',
    right = 'right'
}

enum direction1 {
    up = 3,
    down,
    left,
    right
}

//objects
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: 'mark'
}

//type assertion
let cId: any = 1;
let customerId = cId as number

//functions

function addNum(x:number, y:number): number{
    return x + y;
}

//void
function func(msg: string | number): void {
    console.log(msg)
}
func('55');

//interface
interface UserInterface{
    id: number,
    name: string
}
const user1: UserInterface = {
    id: 1,
    name: 'mark'
}

interface Mathfunc{
    (x:number,y:number):number
}

const add: Mathfunc = (x:number, y:number): number => x + y
const sub: Mathfunc = (x:number, y:number): number => x - y


//classes
class Person {
    id: number
    name:string

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }

    register(){
        return `${this.name} is registered`
    }
}
const output = new Person(3, 'mark')
//console.log(direction)
//console.log(direction1)
//console.log(id)
