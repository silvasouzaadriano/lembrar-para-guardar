import './index.css'

const Footer = ({ items }) => {
  const qtditems = items.length
  const qtdSaved = items.reduce((acc, item) => {
    if (item.saved) {
      acc++
    }
    return acc
  }, 0)
  const qtdSavedPercentage = Math.floor((qtdSaved / qtditems) * 100)
  return (
    <footer>
      <p>
        Você tem {qtditems} items na lista e já guardou {qtdSaved} (
        {qtdSavedPercentage}%)
      </p>
    </footer>
  )
}

export { Footer }
