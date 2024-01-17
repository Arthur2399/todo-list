import './TodoListPage.css';

export const TodoListPage = () => {
    return (
        <div className='todoPages-container'>
            <div className='todoPages-content'>
                <h1>Organiza todos tus pendientes</h1>
                <div className='todoPages-content-insert'>
                    <input
                        type="text"
                        name="todoItem"
                        placeholder='Agrega un actividad ...'
                    />
                    <button>
                        <span className="material-symbols-outlined">
                            playlist_add
                        </span>
                    </button>
                </div>

                <section className='todoPages-container-items'>
                    <div>
                        <span>1.- Levantarse de la cama.</span>
                        <button>
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </div>
                    <div>
                        <span>1.- Levantarse de la cama.</span>
                        <button>
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </div>
                    <div>
                        <span>1.- Levantarse de la cama.</span>
                        <button>
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </div>
                    <div>
                        <span>1.- Levantarse de la cama.</span>
                        <button>
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </div>
                    <div>
                        <span>1.- Levantarse de la cama.</span>
                        <button>
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </div>
                    <div>
                        <span>1.- Levantarse de la cama.</span>
                        <button>
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </div>
                </section>

            </div>
        </div>
    )
}
