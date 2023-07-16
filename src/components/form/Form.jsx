import { useState } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import styles from './form.module.css'

export function Form({ onNewTodo }) {
  const initialTodo = {
    id: '',
    date: '',
    title: '',
    description: '',
    status: false,
  }

  const [todo, setTodo] = useState(initialTodo)

  const handleChange = (event) => {
    setTodo({
      ...todo,
      [event.target.id]: event.target.value,
    })
  }

  const handleSubtmit = (event) => {
    event.preventDefault()

    todo.id = nanoid()
    todo.date = new Date()

    onNewTodo(todo)
    setTodo(initialTodo)
  }

  return (
    <form className={styles.form} onSubmit={handleSubtmit}>
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
      <input type="submit" value="Save" className={styles.form__button} />
    </form>
  )
}

Form.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
}
