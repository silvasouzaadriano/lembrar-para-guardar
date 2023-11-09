const Filters = ({ onHandleSortitems, onHandleClearitems }) => (
  <div className="section-buttons">
    <select
      name="sortitems"
      onChange={(e) => onHandleSortitems(e)}
      id="sortItems"
    >
      <option value="">Escolha uma opção</option>
      <option value="saved">Mostrar guardados</option>
      <option value="ascending">Ordem alfabética</option>
      <option value="recent">Ordenar por mais recentes</option>
    </select>
    <button onClick={onHandleClearitems}>Limpar tela</button>
  </div>
)

export { Filters }
