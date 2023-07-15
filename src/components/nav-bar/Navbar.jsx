import { SearchBar } from '../search-bar/SearchBar'
import styles from './nav-bar.module.css'

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navbar__title}>EletaveToDo</h1>
      <SearchBar />
    </nav>
  )
}