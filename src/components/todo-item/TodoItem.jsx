import { useState } from 'react'
import PropTypes from 'prop-types'
import { Edit2, Square, Trash, CheckSquare, MoreHorizontal } from 'lucide-react'
import styles from './todo-item.module.css'

export function TodoItem({ id, date, title, description, onDeleteTodo }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const formattedDate = date.toLocaleDateString()

  const handleDelte = () => {
    const questionResult = window.confirm('Are you sure to delete the todo?')
    if (questionResult) onDeleteTodo(id)
    setIsOpen(false)
    return
  }

  return (
    <div className={styles['todo-item']}>
      <div className={styles['todo-item__checkbox']}>
        <button onClick={() => setIsChecked(!isChecked)}>
          {isChecked ? <CheckSquare /> : <Square />}
        </button>
      </div>
      <div className={styles['todo-item__body']}>
        <h3>{title}</h3>
        <p
          className={styles['todo-item__date']}
          style={{
            marginBottom: description !== '' ? '8px' : '0',
          }}
        >
          Created at: {formattedDate}
        </p>
        <p className={styles['todo-item__description']}>{description}</p>
      </div>
      <div className={styles['todo-item__actions']}>
        <div className={styles['todo-item__toggle-button']}>
          <button onClick={() => setIsOpen(!isOpen)}>
            <MoreHorizontal />
          </button>
          {isOpen && (
            <ul className={styles['todo-item__toggle-list']}>
              <li>
                <button>
                  <Edit2 className={styles['todo-item__icon']} /> Edit
                </button>
              </li>
              <li>
                <button
                  className={styles['todo-item__delete-button']}
                  onClick={handleDelte}
                >
                  <Trash className={styles['todo-item__icon']} />
                  Delete
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
}
