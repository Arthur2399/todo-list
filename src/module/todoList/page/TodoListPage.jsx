
import { ItemTodo, ImageNothing, InputItemAdd } from '../components';
import { useTodoListPage } from '../hooks/useTodoListPage';
import './TodoListPage.css';

export const TodoListPage = () => {

    const { todoList, setTodoList, addItem, setAddItem, onAddItem, onDeleteItem } = useTodoListPage();

    return (
        <div className='todoPages-container'>
            <div className='todoPages-content'>
                <h1>Organiza todos tus pendientes</h1>
<<<<<<< HEAD:src/page/TodoListPage.jsx
                <InputItemAdd addItem ={addItem} setAddItem={setAddItem} onAddItem={onAddItem}/>
=======

                {/* InputItemAdd */}

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
>>>>>>> c25db6323e1991f9ba08d020bcc2c3d0f3de1339:src/module/todoList/page/TodoListPage.jsx
                <section className='todoPages-container-items'>
                    {
                        todoList.length > 0
                            ? todoList.map(({ id, item }, index) => (
                                <ItemTodo id={id} index={index} item={item} onDeleteItem={onDeleteItem} key={id} />
                            ))
                            : <ImageNothing />
                    }
                </section>

            </div>
        </div>
    )
}
