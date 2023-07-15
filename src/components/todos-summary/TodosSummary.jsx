import styles from './todo-summary.module.css'

export function TodoSummary() {
  return (
    <div>
      <h2 className={styles['todo-summary__title']}>Your Todos</h2>
      <p className={styles['todo-summary__details']}>
        You have 0 todos, 0 completed and 0 to be completed.
      </p>
    </div>
  )
}
