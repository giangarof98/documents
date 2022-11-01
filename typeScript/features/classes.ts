class Person {
    //color: string = 'white';
    //alive: boolean;
    protected head(): void{
        console.log('think')
    }
    // legs(): void{
    //     console.log('walk')
    // }

    //one way
    // constructor(alive: boolean){
    //     this.alive = alive;
    // }

    //second way
    constructor(public alive: boolean){
        this.alive = true
    }
}

//Inheritance
class Human extends Person {
    constructor(public god: string, public human: boolean){
        super(human)
    }
    public arms(): void{
        console.log('grab things');
    }
    private legs(): void{
        console.log('run') //over written
    }

    jump(): void{
        this.legs()
        this.head()
    }
}

const human = new Human('yes', true)
console.log(human)
//human.arms()
//human.jump();

//const person = new Person(true);
//console.log(person.alive)
// person.head();
// person.legs();
