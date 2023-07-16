import PropTypes from 'prop-types'
import { TodoSummary } from '../todos-summary/TodosSummary'
import { TodoItem } from '../todo-item/TodoItem'
import { Placeholder } from '../placeholder/Placeholder'
import styles from './todo-list.module.css'

export function TodoList({ todos, searchQuery, searchResults }) {
  const todosUnCompleted = todos.filter((todo) => todo.status === false)
  const searchResultsUnCompleted = searchResults.filter(
    (todo) => todo.status === false
  )

  return (
    <div className={styles['todo-list']}>
      <TodoSummary todos={todos} />
      {searchQuery === '' ? (
        <>
          {todosUnCompleted.length !== 0 ? (
            <>
              {todosUnCompleted.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
              ))}
            </>
          ) : (
            <Placeholder />
          )}
        </>
      ) : (
        <>
          {searchResultsUnCompleted.length !== 0 ? (
            <>
              {searchResultsUnCompleted.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
              ))}
            </>
          ) : (
            <Placeholder />
          )}
        </>
      )}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
  searchResults: PropTypes.array.isRequired,
}
