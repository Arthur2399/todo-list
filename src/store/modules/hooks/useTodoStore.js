import { useDispatch, useSelector } from "react-redux"
import { onDeleteItem, onInsertItem, onSetListItem, onUpdateItem } from "../slices/TodoSlices";
import { todoApi } from "../../../api/todoApi";

export const useTodoStore = () => {

    const { isLoading, list, errorMessage } = useSelector(state => state.todo)
    const dispatch = useDispatch();


    const startGetTodos = async () => {
        try {
            const resp = await todoApi.get('/api/todo');
            const listTodos = resp.data.todos;
            dispatch(onSetListItem(listTodos))

        } catch (error) {
            console.log(error)
        }
    };


    const startInsertItem = async (data) => {
        try {
            const resp = await todoApi.post('/api/todo/create', data);
            const { task, _id } = resp.data.newTodo || {};
            dispatch(onInsertItem({
                task,
                id: _id
            }));
        } catch (error) {
            console.log(error)
        }
    }

    const startDeleteItem = async (id) => {
        try {
            todoApi.delete(`/api/todo/${id}`)
            dispatch(onDeleteItem(id));
        } catch (error) {
            console.log(errpr)
        }
    };

    const startUpdateItem = (item) => {
        dispatch(onUpdateItem(item))
    }

    return {
        //atributos
        isLoading,
        list,
        errorMessage,

        //Metodos
        startInsertItem,
        startDeleteItem,
        startUpdateItem,
        startGetTodos
    }
}
