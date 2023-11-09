import './index.css'

const Stats = ({ items }) => {
  const qtdItems = items.length
  const qtdSaved = items.reduce((acc, item) => {
    if (item.saved) {
      acc++
    }
    return acc
  }, 0)
  const qtdSavedPercentage =
    qtdSaved > 0 ? Math.floor((qtdSaved / qtdItems) * 100) : 0

  const message =
    qtdSaved > 0
      ? `Você tem ${qtdItems} items na lista e já guardou ${qtdSaved}
        (${qtdSavedPercentage}%)`
      : `Você tem ${qtdItems} items na lista`

  return (
    <footer>
      <p>{message}</p>
    </footer>
  )
}

export { Stats }
