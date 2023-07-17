import PropTypes from 'prop-types'
import styles from './form-error.module.css'

export function ErrorForm({ message }) {
  return <p className={styles['error-form']}>{message}</p>
}

ErrorForm.propTypes = {
  message: PropTypes.string.isRequired,
}
