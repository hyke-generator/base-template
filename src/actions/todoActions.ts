import TodoService from "../services/TodoService";

export enum TodoActionsTypes {
    FETCH_TODO = 'FETCH_TODO'
}

export const fetchTodo = (id: number) => ({
    type: TodoActionsTypes.FETCH_TODO,
    payload: TodoService.fetchTodo(id),
});


export type FetchTodoAction = typeof fetchTodo;
export type TodoAction = FetchTodoAction;