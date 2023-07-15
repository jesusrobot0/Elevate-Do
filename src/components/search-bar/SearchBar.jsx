import { Search } from 'lucide-react'
import styles from './search-bar.module.css'

export function SearchBar() {
  return (
    <form className={styles['search-bar']}>
      <input
        type="text"
        className={styles['search-bar__input']}
        placeholder="Search Todos"
      />
      <button type="submit" className={styles['search-bar__button']}>
        <Search width={20} />
      </button>
    </form>
  )
}
