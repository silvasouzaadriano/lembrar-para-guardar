const QTD_ITEM_VALUES = Array.from({ length: 100 }, (_, i) => i + 1)

const FormAddItems = ({ onHandleSubmit }) => (
  <form onSubmit={onHandleSubmit}>
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
)

export { FormAddItems }
