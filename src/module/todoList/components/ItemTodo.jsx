import { useState } from "react";
import { useTodoStore } from "../../../store/modules/hooks/useTodoStore"

export const ItemTodo = ({ id, index, item }) => {

    const { startDeleteItem, startUpdateItem } = useTodoStore();

    const [toggleEdit, setToggleEdit] = useState(false);
    const [itemValue, setItemValue] = useState(item)

    const onUpdateItem = (event) => {
        event.preventDefault();
        setToggleEdit(false);
        startUpdateItem({
            id: id,
            task: itemValue
        })
    };

    return (
        <div key={id}>
            {toggleEdit
                ? <form onSubmit={onUpdateItem}>
                    <input type="text" value={itemValue} onChange={(e) => setItemValue(e.target.value)} />
                </form>
                : <span onDoubleClick={() => setToggleEdit(true)}>{`${index + 1}.- ${item}`}</span>

            }
            <div>
                <button onClick={() => setToggleEdit(!toggleEdit)} >
                    <span className="material-symbols-outlined">
                        edit
                    </span>
                </button>

                <button onClick={() => startDeleteItem(id)} >
                    <span className="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </div>
        </div>
    )
}
