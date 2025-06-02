import { useEffect, useState } from 'react'
import Card from './Card'
import styles from './CardGrid.module.scss'

function CardGrid() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    fetch('/logements.json')
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((err) => console.error('Error loading logements:', err))
  }, [])

  return (
    <div className={styles.grid}>
      {logements.map((logement) => (
        <Card
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </div>
  )
}

export default CardGrid
