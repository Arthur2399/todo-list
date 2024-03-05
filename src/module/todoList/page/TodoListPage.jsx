import { useFormik } from 'formik';
import { useTodoStore } from '../../../store/modules/hooks/useTodoStore';
import { ItemTodo, ImageNothing } from '../components';

import './TodoListPage.css';
import { useEffect } from 'react';

export const TodoListPage = () => {

    const { list, startInsertItem, startGetTodos } = useTodoStore()

    const formik = useFormik({
        initialValues: {
            task: '',
        },
        onSubmit: (values) => {
            if (values.task.length > 0) {
                startInsertItem(values);
            }
        }
    })


    useEffect(() => {
        startGetTodos();
    }, []);


    return (
        <div className='todoPages-container'>
            <div className='todoPages-content'>
                <h1>Organiza todos tus pendientes</h1>

                <form className='todoPages-content-insert' onSubmit={formik.handleSubmit}>
                    <input
                        type="text"
                        name="task"
                        placeholder='Agrega un actividad ...'
                        onChange={formik.handleChange}
                    />
                    <button type='submit'>
                        <span className="material-symbols-outlined">
                            playlist_add
                        </span>
                    </button>
                </form>
                <section className='todoPages-container-items'>
                    {
                        list.length > 0
                            ? list.map(({ id, task }, index) => (
                                <ItemTodo id={id} index={index} item={task} key={id} />
                            ))
                            : <ImageNothing />
                    }
                </section>

            </div>
        </div>
    )
}
