import { useEffect, useState } from 'react';
import './TodoListPage.css';

export const TodoListPage = () => {

    const [todoList, setTodoList] = useState([]);
    const [addItem, setAddItem] = useState('');
    const [count, setCount] = useState(0);


    const onAddItem = () => {

        //Condicion para validar que el usuario al menos escribio una letra
        if (addItem.length == 0) return alert("No ha ingresado un pendiente");
        //Crearmo el nuevo arreglo de objeto de todoList
        const newItem = [
            ...todoList,
            {
                id: count,
                item: addItem,
            }
        ]
        //Actualizar la lista del estado local 
        setTodoList(newItem);

        //Actualizar lista en la memoria del navegador para tener persistencia
        window.localStorage.setItem("todoList", JSON.stringify(newItem));

        //Aumentamos en uno el contador para el id
        setCount(count + 1);
        //limpiamos la caja de texto input
        setAddItem('');
    };

    const onDeleteItem = (id) => {
        const newList = todoList.filter((item) => item.id != id);
        setTodoList(newList);
    };


    useEffect(() => {
        //Extraer informacion del local storge
        const todoList = window.localStorage.getItem("todoList");
        //Transformar en JSON
        const todoListParse = JSON.parse(todoList);
        //Seteo la info en el estado local
        setTodoList(todoListParse)
    }, [])


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
