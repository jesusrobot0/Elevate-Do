import PropTypes from 'prop-types'
import { TodoSummary } from '../todos-summary/TodosSummary'
import { TodoItem } from '../todo-item/TodoItem'
import { Placeholder } from '../placeholder/Placeholder'
import styles from './todo-list.module.css'

export function TodoList({ todos }) {
  const todosUnCompleted = todos.filter((todo) => todo.status === false)

  return (
    <div className={styles['todo-list']}>
      <TodoSummary todos={todos} />
      {todos.length !== 0 ? (
        <>
          {todosUnCompleted.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </>
      ) : (
        <Placeholder />
      )}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}
