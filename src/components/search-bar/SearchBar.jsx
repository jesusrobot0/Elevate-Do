import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Search } from 'lucide-react'
import styles from './search-bar.module.css'

export function SearchBar({ todos, onSearch, searchQuery, setSearchQuery }) {
  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    const results = todos.filter((todo) => {
      return todo.title.toLowerCase().includes(searchQuery.toLowerCase())
    })

    onSearch(results)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  return (
    <form className={styles['search-bar']}>
      <input
        type="text"
        className={styles['search-bar__input']}
        placeholder="Search Todos"
        value={searchQuery}
        onChange={handleChange}
      />
      <button type="submit" className={styles['search-bar__button']}>
        <Search width={20} />
      </button>
    </form>
  )
}

SearchBar.propTypes = {
  todos: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
}
