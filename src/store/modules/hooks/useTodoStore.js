import { useDispatch, useSelector } from "react-redux"
import { onDeleteItem, onInsertItem, onUpdateItem } from "../slices/TodoSlices";

export const useTodoStore = () => {

    const { isLoading, list, errorMessage } = useSelector(state => state.todo)
    const dispatch = useDispatch();

    const startInsertItem = (item) => {
        //
        dispatch(onInsertItem(item));
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
