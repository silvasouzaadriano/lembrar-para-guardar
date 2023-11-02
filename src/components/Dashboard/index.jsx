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
        <input type="number" name="qtdItem" />
        <input type="text" name="item" />
        <button>Adicionar</button>
      </form>
      <section>
        <div></div>
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
