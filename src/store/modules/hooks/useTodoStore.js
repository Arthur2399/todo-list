import { useDispatch, useSelector } from "react-redux"
import { onDeleteItem, onInsertItem, onUpdateItem } from "../slices/TodoSlices";
import { todoApi } from "../../../api/todoApi";

export const useTodoStore = () => {

    const { isLoading, list, errorMessage } = useSelector(state => state.todo)
    const dispatch = useDispatch();

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

    const startDeleteItem = (id) => {
        //
        dispatch(onDeleteItem(id));
    }

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
    }
}
