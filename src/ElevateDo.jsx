import { useState } from 'react'
import { Navbar } from './components/nav-bar/Navbar'
import { Form } from './components/form/Form'
import { TodoList } from './components/todo-list/TodoList'
import styles from './styles/eletavete-do.module.css'

export function ElevateDo() {
  const initialTodo = {
    id: '',
    date: '',
    title: '',
    description: '',
    status: false,
  }

  const [todos, setTodos] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [todoUpdated, setTodoUpdated] = useState(initialTodo)

  const handleAddTodo = (newTodo) => {
    if (!todoUpdated.id) {
      setTodos([...todos, newTodo])
    } else {
      const todosUpdated = todos.map((todo) =>
        todo.id === newTodo.id ? newTodo : todo
      )

      setTodos(todosUpdated)
      setTodoUpdated(initialTodo)
    }
  }

  const handleDeleteTodo = (id) => {
    const todosUpdated = todos.filter((todo) => todo.id !== id)
    setTodos(todosUpdated)
  }

  const handleAddSearchResult = (results) => {
    setSearchResults(results)
  }

  const handleEditTodo = (id) => {
    const todoSelected = todos.filter((todo) => todo.id === id)
    setTodoUpdated(todoSelected[0])
  }

  return (
    <>
      <header className={`wrapper ${styles.app__header}`}>
        <Navbar
          todos={todos}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleAddSearchResult}
        />
      </header>
      <div className={`wrapper ${styles.app__body}`}>
        <aside className={styles.app__sidebar}>
          <Form todoUpdated={todoUpdated} onNewTodo={handleAddTodo} />
        </aside>
        <main className={styles.app__main}>
          <TodoList
            todos={todos}
            searchQuery={searchQuery}
            searchResults={searchResults}
            onDeleteTodo={handleDeleteTodo}
            onUpdateTodo={handleEditTodo}
          />
        </main>
      </div>
    </>
  )
}
