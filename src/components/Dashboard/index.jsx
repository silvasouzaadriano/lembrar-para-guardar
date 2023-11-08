import { useState } from 'react'
import { Footer } from '../Footer'
import './index.css'

const QTD_ITEM_VALUES = Array.from({ length: 100 }, (_, i) => i + 1)
localStorage.setItem('items', JSON.stringify([]))

const Dashboard = () => {
  const [items, setItems] = useState([])

  const handleAddItem = (item) => {
    setItems((i) => [...i, item])
    localStorage.setItem('items', JSON.stringify([...items, item]))
  }

  const handleRemoveItem = (itemId) => {
    setItems((i) => i.filter((obj) => obj.id !== itemId))
    localStorage.setItem(
      'items',
      JSON.stringify(items.filter((obj) => obj.id !== itemId)),
    )
  }

  const handleClearitems = () => {
    setItems([])
    localStorage.setItem('items', JSON.stringify([]))
  }

  const handleSaveItem = (itemId) => {
    setItems((i) =>
      i.map((obj) => (obj.id === itemId ? { ...obj, saved: !obj.saved } : obj)),
    )

    localStorage.setItem(
      'items',
      JSON.stringify(
        items.map((obj) =>
          obj.id === itemId ? { ...obj, saved: !obj.saved } : obj,
        ),
      ),
    )
  }

  const handleSortitems = (e) => {
    const action = e.target.value
    switch (action) {
      case 'saved': {
        const currentItems = JSON.parse(localStorage.getItem('items'))
        setItems(currentItems.filter((item) => item.saved))
        break
      }
      case 'recent': {
        const newItems = JSON.parse(localStorage.getItem('items'))
        setItems(newItems)
        break
      }
      case 'ascending': {
        const newItems = JSON.parse(localStorage.getItem('items'))
        const itemsAscending = [...newItems].sort((a, b) =>
          a.description > b.description ? 1 : -1,
        )
        setItems(itemsAscending)
        break
      }
      default: {
        const newItems = JSON.parse(localStorage.getItem('items'))
        setItems(newItems)
        break
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (e.target.elements.descItem.value) {
      const item = {
        id: crypto.randomUUID(),
        qtd: +e.target.elements.qtdItem.value,
        description: e.target.elements.descItem.value,
        saved: false,
      }
      handleAddItem(item)
      await e.target.reset()
    }
  }

  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">O que você precisa guardar ?</label>
          <select name="qtdItem">
            {QTD_ITEM_VALUES.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
          <input type="text" name="descItem" placeholder="Manda aqui" />
          <button>Adicionar</button>
        </form>
        <section>
          <ul>
            {items.map(({ id, qtd, description, saved }) => (
              <li key={id}>
                <input
                  type="checkbox"
                  name="item"
                  checked={saved}
                  onChange={() => handleSaveItem(id)}
                />
                <p className={saved ? 'savedItem' : 'unSavedItem'}>
                  {qtd} {description}
                </p>
                <button onClick={() => handleRemoveItem(id)}>X</button>
              </li>
            ))}
          </ul>
          <div className="section-buttons">
            <select
              name="sortitems"
              onChange={(e) => handleSortitems(e)}
              id="sortItems"
            >
              <option value="">Escolha uma opção</option>
              <option value="saved">Mostrar guardados</option>
              <option value="ascending">Ordem alfabética</option>
              <option value="recent">Ordenar por mais recentes</option>
            </select>
            <button onClick={handleClearitems}>Limpar tela</button>
          </div>
        </section>
      </main>
      <Footer items={items} />
    </>
  )
}

export { Dashboard }
