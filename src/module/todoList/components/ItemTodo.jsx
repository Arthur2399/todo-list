import { useTodoStore } from "../../../store/modules/hooks/useTodoStore"

export const ItemTodo = ({ id, index, item }) => {

    const { startDeleteItem } = useTodoStore();

    return (
        <div key={id}>
            <span>{`${index + 1}.- ${item}`}</span>
            <button onClick={() => startDeleteItem(id)} >
                <span className="material-symbols-outlined">
                    delete
                </span>
            </button>
        </div>
    )
}
