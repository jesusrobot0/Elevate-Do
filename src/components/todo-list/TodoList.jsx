import { TodoSummary } from '../todos-summary/TodosSummary'
import styles from './todo-list.module.css'

export function TodoList() {
  return (
    <div className={styles['todo-list']}>
      <TodoSummary />
    </div>
  )
}
