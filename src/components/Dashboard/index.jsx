import './index.css'

const Dashboard = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Olá')
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">O que você precisa guardar ?</label>
        <select name="qtdItem">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <input type="text" name="item" placeholder="Manda aqui" />
        <button>Adicionar</button>
      </form>
      <section>
        <ul>
          <li>
            <input type="checkbox" name="item" />
            <p>6 halteres 10kg</p>
            <button>X</button>
          </li>
          <li>
            <input type="checkbox" name="item" />
            <p>6 halteres 10kg</p>
            <button>X</button>
          </li>
          <li>
            <input type="checkbox" name="item" />
            <p>6 halteres 10kg</p>
            <button>X</button>
          </li>
          <li>
            <input type="checkbox" name="item" />
            <p>6 halteres 10kg</p>
            <button>X</button>
          </li>
          <li>
            <input type="checkbox" name="item" />
            <p>6 halteres 10kg</p>
            <button>X</button>
          </li>
          <li>
            <input type="checkbox" name="item" />
            <p>6 halteres 10kg</p>
            <button>X</button>
          </li>
          <li>
            <input type="checkbox" name="item" />
            <p>6 halteres 10kg</p>
            <button>X</button>
          </li>
          <li>
            <input type="checkbox" name="item" />
            <p>6 halteres 10kg</p>
            <button>X</button>
          </li>
          <li>
            <input type="checkbox" name="item" />
            <p>6 halteres 10kg</p>
            <button>X</button>
          </li>
          <li>
            <input type="checkbox" name="item" />
            <p>6 halteres 10kg</p>
            <button>X</button>
          </li>
          <li>
            <input type="checkbox" name="item" />
            <p>6 halteres 10kg</p>
            <button>X</button>
          </li>
          <li>
            <input type="checkbox" name="item" />
            <p>6 halteres 10kg</p>
            <button>X</button>
          </li>
        </ul>
        <div className="section-buttons">
          <select name="order">
            <option value="0">Ordenar pelo mais recente</option>
          </select>
          <button>Limpar tela</button>
        </div>
      </section>
    </main>
  )
}

export { Dashboard }
