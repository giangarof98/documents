"use strict";
let id = 5;
let word = 'Hello';
let istrue = false;
let x = 'hello';
let ids = [1, 2, 3, 4];
let arr = [1, 2, 'hello', false];
//tuple
let person = [1, 'hello', false];
let employee;
employee = [
    [1, 'jhon'],
    [1, 'mark'],
    [1, 'luke']
];
//union
let pId;
pId = '22';
//Enum
var direction;
(function (direction) {
    direction["up"] = "up";
    direction["down"] = "down";
    direction["left"] = "left";
    direction["right"] = "right";
})(direction || (direction = {}));
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 3] = "up";
    direction1[direction1["down"] = 4] = "down";
    direction1[direction1["left"] = 5] = "left";
    direction1[direction1["right"] = 6] = "right";
})(direction1 || (direction1 = {}));
console.log(direction);
console.log(direction1);
//console.log(id)
