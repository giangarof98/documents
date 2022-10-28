"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos';
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n            Your task id is: ".concat(id, "\n            Your title is: ").concat(title, "\n            Your task is: ").concat(completed, "\n        "));
};
