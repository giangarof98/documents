"use strict";
exports.__esModule = true;
var x = function (a, b) {
    return a + b;
};
var y = x(4, 5);
console.log(y);
//TSC Types
var t = false;
var age = 5;
var color = 'blue';
var sentence = "i'm ".concat(age, " years old");
var arr = ['red', 'blue', 'yellow'];
var arr2 = ['red', 'blue', 'yellow'];
var obj = {
    a: 'a'
};
var und = undefined;
var n = null;
//Tuple
var tp;
tp = ['a', 1];
//Enum
var size;
(function (size) {
    size[size["Small"] = 1] = "Small";
    size[size["Medium"] = 2] = "Medium";
    size[size["Large"] = 3] = "Large";
})(size || (size = {}));
;
var sizename = size.Small;
var sizenumL = size[2];
//any
var something = 'somehting';
//void
var v = function () {
    console.log('v');
};
//never
var err = function () {
    throw Error('error');
};
