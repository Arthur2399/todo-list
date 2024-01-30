
export const ItemTodo = ({ id, index, item, onDeleteItem }) => {

    return (
        <div key={id}>
            <span>{`${index + 1}.- ${item}`}</span>
            <button onClick={() => onDeleteItem(id)}>
                <span className="material-symbols-outlined">
                    delete
                </span>
            </button>
        </div>
    )
}
