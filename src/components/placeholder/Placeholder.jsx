import PropTypes from 'prop-types'
import { Plus, SearchX } from 'lucide-react'
import styles from './placeholder.module.css'

export function Placeholder({ type, title, description }) {
  return (
    <div className={styles.placeholder}>
      {type === 'todos' && (
        <Plus size={120} className={styles.placeholder__icon} />
      )}
      {type === 'search' && (
        <SearchX size={120} className={styles.placeholder__icon} />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

Placeholder.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}
