import './index.css'

const Footer = ({ items }) => {
  console.log('items: ', items)
  const qtdItems = items.length
  const qtdSaved = items.reduce((acc, item) => {
    if (item.saved) {
      acc++
    }
    return acc
  }, 0)
  const qtdSavedPercentage =
    qtdSaved > 0 ? Math.floor((qtdSaved / qtdItems) * 100) : 0
  return (
    <footer>
      <p>
        Você tem {qtdItems} items na lista e já guardou {qtdSaved} (
        {qtdSavedPercentage}%)
      </p>
    </footer>
  )
}

export { Footer }
