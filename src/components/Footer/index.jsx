import './index.css'

const Footer = ({ itens }) => {
  const qtdItens = itens.length
  const qtdSaved = itens.reduce((acc, item) => {
    if (item.saved) {
      acc++
    }
    return acc
  }, 0)
  const qtdSavedPercentage = Math.floor((qtdSaved / qtdItens) * 100)
  return (
    <footer>
      <p>
        Você tem {qtdItens} itens na lista e já guardou {qtdSaved} (
        {qtdSavedPercentage}%)
      </p>
    </footer>
  )
}

export { Footer }
