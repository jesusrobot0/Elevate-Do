import { useState } from 'react'
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
  const [selectedOption, setSelectedOption] = useState('uncompleted') // Estado para almacenar el valor seleccionado

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value) // Actualiza el estado con el valor seleccionado
  }
  const todosUnCompleted = todos.filter((todo) => todo.status === false)
  const todosCompleted = todos.filter((todo) => todo.status === true)
  const searchResultsUnCompleted = searchResults.filter(
    (todo) => todo.status === false
  )

  const todoList =
    selectedOption === 'uncompleted' ? todosUnCompleted : todosCompleted

  return (
    <div className={styles['todo-list']}>
      <div className={styles['todo-list__header']}>
        <TodoSummary todos={todos} />
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="uncompleted">Uncompleted</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {searchQuery === '' ? (
        <>
          {todoList.length !== 0 ? (
            <>
              {todoList.map((todo) => (
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
              title={
                selectedOption === 'uncompleted'
                  ? "Congratulations you have finished your to-do's"
                  : "It looks like you still don't have anything to do"
              }
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
