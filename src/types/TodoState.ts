import Todo from "../models/Todo";

export default interface TodoState {
    todo?: Todo | Promise<Todo>;
    loading: boolean;
    isFulfilled: boolean;
    isRejected: boolean;
}