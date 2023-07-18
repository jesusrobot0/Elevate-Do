import { useState } from 'react'
import { Navbar } from './components/nav-bar/Navbar'
import { Form } from './components/form/Form'
import { TodoList } from './components/todo-list/TodoList'
import styles from './styles/eletavete-do.module.css'

export function ElevateDo() {
  const [todos, setTodos] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const handleDeleteTodo = (id) => {
    const todosUpdated = todos.filter((todo) => todo.id !== id)
    console.log(id)

    setTodos(todosUpdated)
  }

  const handleAddSearchResult = (results) => {
    setSearchResults(results)
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
          <Form onNewTodo={handleAddTodo} />
        </aside>
        <main className={styles.app__main}>
          <TodoList
            todos={todos}
            searchQuery={searchQuery}
            searchResults={searchResults}
            onDeleteTodo={handleDeleteTodo}
          />
        </main>
      </div>
    </>
  )
}
