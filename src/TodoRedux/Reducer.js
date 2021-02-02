import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './Action'
import { todos } from './State';

export const reducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;

        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id != action.payload);
            return newTodos;

        case UPDATE_TODO:
            newTodos = [...state];
            const index = newTodos.findIndex((data)=> { return data.id === action.payload.id})
            console.log(index);
            if (index >-1) {
                newTodos[index] = action.payload;
                 return newTodos
            }
    }
    return state;
}