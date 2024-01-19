
import { ItemTodo, ImageNothing, InputItemAdd } from '../components';
import { useTodoListPage } from '../hooks/useTodoListPage';
import './TodoListPage.css';

export const TodoListPage = () => {

    const { todoList, setTodoList, addItem, setAddItem, onAddItem, onDeleteItem } = useTodoListPage();

    return (
        <div className='todoPages-container'>
            <div className='todoPages-content'>
                <h1>Organiza todos tus pendientes</h1>
                <InputItemAdd addItem ={addItem} setAddItem={setAddItem} onAddItem={onAddItem}/>
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
