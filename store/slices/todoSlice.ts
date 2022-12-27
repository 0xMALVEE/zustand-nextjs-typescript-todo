import { StateCreator } from "zustand";
import ITodo from "../types/ITodo";

// add 
const createTodoSlice: StateCreator<ITodo> = (set, get)=>({
    todos: ['create','next js app','using typescript'],
    addTodo(todo: string){
        set(state => ({todos:[...state.todos, todo]}) )
    }
})

export default createTodoSlice;