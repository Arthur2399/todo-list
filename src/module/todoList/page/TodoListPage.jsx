import { useFormik } from 'formik';
import { useTodoStore } from '../../../store/modules/hooks/useTodoStore';
import { ItemTodo, ImageNothing } from '../components';
import { useTodoListPage } from '../hooks/useTodoListPage';
import { v4 as uuidv4 } from 'uuid';

import './TodoListPage.css';

export const TodoListPage = () => {

    //const { todoList, setTodoList, addItem, setAddItem, onAddItem, onDeleteItem } = useTodoListPage()

    const { list, startInsertItem } = useTodoStore()


    const formik = useFormik({
        initialValues: {
            todoItem: '',
        },
        onSubmit: (values) => {
            if (values.todoItem.length > 0) {
                startInsertItem(
                    {
                        id: uuidv4(),
                        item: values.todoItem,
                    }
                );
            }
        }
    })

    return (
        <div className='todoPages-container'>
            <div className='todoPages-content'>
                <h1>Organiza todos tus pendientes</h1>

                <div className='todoPages-content-insert'>
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            type="text"
                            name="todoItem"
                            placeholder='Agrega un actividad ...'
                            onChange={formik.handleChange}
                        />
                        <button type='submit'>
                            <span className="material-symbols-outlined">
                                playlist_add
                            </span>
                        </button>
                    </form>
                </div>
                <section className='todoPages-container-items'>
                    {
                        list.length > 0
                            ? list.map(({ id, item }, index) => (
                                <ItemTodo id={id} index={index} item={item} key={id} />
                            ))
                            : <ImageNothing />
                    }
                </section>

            </div>
        </div>
    )
}
