// Ducks pattern
// Action types
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

// Action function
export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: text,
});
export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id,
});
export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: id,
});

// Action object types
type TodosAction =
    ReturnType<typeof addTodo> |
    ReturnType<typeof toggleTodo> |
    ReturnType<typeof removeTodo>;

// State type & initial value
export type Todo = {
    id: number,
    text: string,
    done: boolean,
};
type TodosState = Array<Todo>;

const initialState: TodosState = [
    { id: 1, text: 'Learn Typescript', done: true },
    { id: 2, text: 'Using Redux with Typescript', done: true},
    { id: 3, text: 'Make todo list', done: false },
];

// Reducer
const todos = (state: TodosState = initialState, action: TodosAction): TodosState => {
    switch (action.type) {
        case ADD_TODO:
            const nextId = Math.max(...state.map(todo => todo.id)) + 1;
            return state.concat({
                id: nextId,
                text: action.payload,
                done: false,
            });
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};

export default todos;