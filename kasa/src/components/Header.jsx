import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Kasa logo" className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
