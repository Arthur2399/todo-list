import { useState } from 'react';
import './TodoListPage.css';

export const TodoListPage = () => {

    const [todoList, setTodoList] = useState([]);
    const [addItem, setAddItem] = useState('');
    const [count, setCount] = useState(0);


    const onAddItem = () => {
        if (addItem.length == 0) return alert("No ha ingresado un pendiente");
        setTodoList(
            [
                ...todoList,
                {
                    id: count,
                    item: addItem,
                }
            ]
        );
        setCount(count + 1);
        setAddItem('');
    };

    const onDeleteItem = (id) => {
        const newList = todoList.filter((item) => item.id != id);
        setTodoList(newList);
    };

    return (
        <div className='todoPages-container'>
            <div className='todoPages-content'>
                <h1>Organiza todos tus pendientes</h1>
                <div className='todoPages-content-insert'>
                    <input
                        type="text"
                        name="todoItem"
                        placeholder='Agrega un actividad ...'
                        value={addItem}
                        onChange={(e) => setAddItem(e.target.value)}
                    />
                    <button onClick={onAddItem}>
                        <span className="material-symbols-outlined">
                            playlist_add
                        </span>
                    </button>
                </div>
                <section className='todoPages-container-items'>
                    {
                        todoList.map(({ id, item }, index) => (
                            <div key={id}>
                                <span>{`${index + 1}.- ${item}`}</span>
                                <button onClick={() => onDeleteItem(id)}>
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                            </div>
                        ))
                    }
                </section>

            </div>
        </div>
    )
}
