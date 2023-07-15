import { TodoSummary } from '../todos-summary/TodosSummary'
import { Placeholder } from '../placeholder/Placeholder'
import styles from './todo-list.module.css'

export function TodoList() {
  return (
    <div className={styles['todo-list']}>
      <TodoSummary />
      {false ? 'TODOS' : <Placeholder />}
    </div>
  )
}
