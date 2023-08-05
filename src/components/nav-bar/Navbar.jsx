import PropTypes from 'prop-types'
import { SearchBar } from '../'
import styles from './nav-bar.module.css'

export function Navbar({ todos, onSearch, searchQuery, setSearchQuery }) {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navbar__title}>ElevateDO</h1>
      <SearchBar
        todos={todos}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={onSearch}
      />
    </nav>
  )
}

Navbar.propTypes = {
  todos: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
}
