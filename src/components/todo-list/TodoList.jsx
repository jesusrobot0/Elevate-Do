import PropTypes from 'prop-types'
import { TodoSummary, TodoItem, Placeholder } from '../'
import styles from './todo-list.module.css'

export function TodoList({
  todos,
  searchQuery,
  searchResults,
  onDeleteTodo,
  onUpdateTodo,
  onCompleteTodo,
}) {
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
                <TodoItem
                  key={todo.id}
                  {...todo}
                  onDeleteTodo={onDeleteTodo}
                  onUpdateTodo={onUpdateTodo}
                  onCompleteTodo={onCompleteTodo}
                />
              ))}
            </>
          ) : (
            <Placeholder
              type="todos"
              title="It looks like you still dont have anything to do"
              description="Start by adding a new one"
            />
          )}
        </>
      ) : (
        <>
          {searchResultsUnCompleted.length !== 0 ? (
            <>
              {searchResultsUnCompleted.map((todo) => (
                <TodoItem
                  key={todo.id}
                  {...todo}
                  onDeleteTodo={onDeleteTodo}
                  onUpdateTodo={onUpdateTodo}
                  onCompleteTodo={onCompleteTodo}
                />
              ))}
            </>
          ) : (
            <Placeholder
              type="search"
              title={`No results found for your search "${searchQuery}"`}
            />
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
  onDeleteTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
  onCompleteTodo: PropTypes.func.isRequired,
}
