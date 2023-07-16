import { TodoSummary } from '../todos-summary/TodosSummary'
import { Placeholder } from '../placeholder/Placeholder'
import styles from './todo-list.module.css'
import { TodoItem } from '../todo-item/TodoItem'

export function TodoList() {
  return (
    <div className={styles['todo-list']}>
      <TodoSummary />
      {true ? (
        <>
          <TodoItem />
          <TodoItem />
        </>
      ) : (
        <Placeholder />
      )}
    </div>
  )
}
