import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import { ErrorForm } from '../'

import styles from './form.module.css'

export function Form({ todoUpdated, onNewTodo }) {
  const initialTodo = {
    id: '',
    date: '',
    title: '',
    description: '',
    status: false,
  }

  const [todo, setTodo] = useState(initialTodo)
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    setTodo({
      ...todo,
      [event.target.id]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newTodo = { ...todo }

    // Sí el titulo esta vacío muestra un error
    if (newTodo.title.trim() === '') {
      setError(true)
      return
    }

    // Sí no se esta editando un todo...
    if (!todoUpdated.id) {
      newTodo.id = nanoid()
      newTodo.date = new Date()
    }

    // Guarda el todo en el state reinicia el form y limpia los errores
    onNewTodo(newTodo)
    setTodo(initialTodo)
    setError(false)
  }

  useEffect(() => {
    // Cuando haya un error limpialo a los 2 segundos
    let timer
    if (error) {
      timer = setTimeout(() => {
        setError(false)
      }, 2000)
    }

    // Cuando el componente se desmonte limpia el timeout
    return () => {
      clearTimeout(timer)
    }
  }, [error])

  useEffect(() => {
    setTodo(todoUpdated)
  }, [todoUpdated])

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__field}>
        <label htmlFor="title" className={styles.form__label}>
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="E.g. Total world domination"
          className={styles.form__input}
          value={todo.title}
          onChange={handleChange}
        />
      </div>
      <div className={styles.form__field}>
        <label htmlFor="description" className={styles.form__label}>
          Description
        </label>
        <textarea
          id="description"
          placeholder="E. g. tidy my room, then conquer latam"
          className={styles.form__area}
          value={todo.description}
          onChange={handleChange}
        ></textarea>
      </div>
      {error && <ErrorForm message="The title field is required" />}
      <input type="submit" value="Save" className={styles.form__button} />
    </form>
  )
}

Form.propTypes = {
  todoUpdated: PropTypes.object.isRequired,
  onNewTodo: PropTypes.func.isRequired,
}
