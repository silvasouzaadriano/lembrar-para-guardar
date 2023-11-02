import { useState } from 'react'
import { Footer } from '../Footer'
import './index.css'

const QTD_ITEM_VALUES = Array.from({ length: 100 }, (_, i) => i + 1)

const Dashboard = () => {
  const [itens, setItens] = useState([])

  const handleAddItem = (item) => {
    setItens((i) => [...i, item])
  }

  const clearItens = () => setItens([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.elements.descItem.value) {
      const item = {
        id: crypto.randomUUID(),
        qtd: e.target.elements.qtdItem.value,
        description: e.target.elements.descItem.value,
        saved: false,
      }
      handleAddItem(item)
      e.target.elements.qtdItem.value = 1
      e.target.elements.descItem.value = null
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
            {itens.map(({ id, qtd, description, saved }) => (
              <li key={id}>
                <input
                  type="checkbox"
                  name="item"
                  checked={saved ? true : false}
                />
                <p>
                  {qtd} {description}
                </p>
                <button>X</button>
              </li>
            ))}
          </ul>
          <div className="section-buttons">
            <select name="order">
              <option value="0">Ordenar pelo mais recente</option>
            </select>
            <button onClick={clearItens}>Limpar tela</button>
          </div>
        </section>
      </main>
      <Footer qtdItens={itens.length} />
    </>
  )
}

export { Dashboard }
