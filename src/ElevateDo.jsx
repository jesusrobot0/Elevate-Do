import { useState } from 'react'
import { Navbar } from './components/nav-bar/Navbar'
import { Form } from './components/form/Form'
import { TodoList } from './components/todo-list/TodoList'
import styles from './styles/eletavete-do.module.css'

export function ElevateDo() {
  const [todos, setTodos] = useState([])

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <header className={`wrapper ${styles.app__header}`}>
        <Navbar />
      </header>
      <div className={`wrapper ${styles.app__body}`}>
        <aside className={styles.app__sidebar}>
          <Form onNewTodo={handleAddTodo} />
        </aside>
        <main className={styles.app__main}>
          <TodoList todos={todos} />
        </main>
      </div>
    </>
  )
}
