import typeToReducer from 'type-to-reducer';
import TodoState from "../types/TodoState";
import {TodoAction, TodoActionsTypes} from "../actions/todoActions";

export const todoReducer = typeToReducer({
    [TodoActionsTypes.FETCH_TODO]: {
        PENDING: (state: TodoState, action: ReturnType<TodoAction>): TodoState => ({
            isFulfilled: false,
            loading: true,
            todo: undefined,
            isRejected: false
        }),
        REJECTED: (state: TodoState, action: ReturnType<TodoAction>): TodoState => ({
            todo: undefined,
            loading: false,
            isFulfilled: false,
            isRejected: true,
        }),
        FULFILLED: (state: TodoState, action: ReturnType<TodoAction>): TodoState => ({
            todo: action.payload,
            loading: false,
            isFulfilled: true,
            isRejected: false,
        }),
    }
}, {counterValue: 0});