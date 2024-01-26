import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useTodoListPage = () => {

    const [todoList, setTodoList] = useState([]);
    const [addItem, setAddItem] = useState('');

    const onAddItem = () => {

        //Condicion para validar que el usuario al menos escribio una letra
        if (addItem.length == 0) return alert("No ha ingresado un pendiente");
        //Crearmo el nuevo arreglo de objeto de todoList
        const newItem = [
            ...todoList,
            {
                id: uuidv4(),
                item: addItem,
            }
        ]
        //Actualizar la lista del estado local 
        setTodoList(newItem);

        //Actualizar lista en la memoria del navegador para tener persistencia
        window.localStorage.setItem("todoList", JSON.stringify(newItem));

        //limpiamos la caja de texto input
        setAddItem('');
    };

    const onDeleteItem = (id) => {
        const newList = todoList.filter((item) => item.id != id);
        setTodoList(newList);
        window.localStorage.setItem("todoList", JSON.stringify(newList));
    };


    useEffect(() => {
        if ((window.localStorage.getItem("todoList") == null)) return;

        //Extraer informacion del local storge
        const todoList = window.localStorage.getItem("todoList");
        //Transformar en JSON
        const todoListParse = JSON.parse(todoList);
        //Seteo la info en el estado local
        setTodoList(todoListParse)
    }, [])

    return {
        todoList,
        setTodoList,
        addItem,
        setAddItem,
        onAddItem,
        onDeleteItem,
    }
}
