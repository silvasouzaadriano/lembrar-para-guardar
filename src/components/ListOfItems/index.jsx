const ListOfItems = ({ items, onHandleSaveItem, onHandleRemoveItem }) => (
  <ul>
    {items.map(({ id, qtd, description, saved }) => (
      <li key={id}>
        <input
          type="checkbox"
          name="item"
          checked={saved}
          onChange={() => onHandleSaveItem(id)}
        />
        <p className={saved ? 'savedItem' : 'unSavedItem'}>
          {qtd} {description}
        </p>
        <button onClick={() => onHandleRemoveItem(id)}>X</button>
      </li>
    ))}
  </ul>
)

export { ListOfItems }
