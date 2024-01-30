export const InputItemAdd = ({addItem, setAddItem, onAddItem}) => {
  return (
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
  )
}
