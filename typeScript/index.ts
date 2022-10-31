import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/99'

interface TodoList {
    id: number,
    title: string,
    completed: boolean
} 

axios.get(url).then(res => {
        const todo = res.data as TodoList;
        const id = todo.id;
        const title = todo.title;
        const completed = todo.completed;

        logTodo(id,title,completed)
    });

    const logTodo = (id:number, title:string, completed:boolean) => {
        console.log(`
            Your task id is: ${id}
            Your title is: ${title}
            Your task is: ${completed}
        `);
    }