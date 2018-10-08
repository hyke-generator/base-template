import axios, {AxiosResponse} from 'axios';
import Todo from "../models/Todo";

class TodoService {
    public static fetchTodo(id: number): Promise<Todo> {
        return axios
            .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((res: AxiosResponse) => res.data as Todo)
    }

}

export default TodoService;