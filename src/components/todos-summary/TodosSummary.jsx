import PropTypes from 'prop-types'
import styles from './todo-summary.module.css'

export function TodoSummary({ todos }) {
  const total = todos.length
  const todosCompleted = todos.filter((todo) => todo.status === true).length
  const todosUnCompleted = total - todosCompleted

  return (
    <div>
      <h2 className={styles['todo-summary__title']}>Your Todos</h2>
      <p className={styles['todo-summary__details']}>
        You have {total} todos, {todosCompleted} completed and{' '}
        {todosUnCompleted} to be completed.
      </p>
    </div>
  )
}

TodoSummary.propTypes = {
  todos: PropTypes.array.isRequired,
}
