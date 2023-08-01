import { useState } from 'react'
import PropTypes from 'prop-types'
import { Edit2, Square, Trash, CheckSquare, MoreHorizontal } from 'lucide-react'
import styles from './todo-item.module.css'

export function TodoItem({
  id,
  date,
  title,
  description,
  onDeleteTodo,
  onUpdateTodo,
  onCompleteTodo,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const formattedDate = new Date(date).toLocaleDateString()

  const handleAction = (action) => {
    if (action === 'delete') {
      const questionResult = window.confirm(
        `Are you sure to ${action} this todo?`
      )
      if (questionResult) onDeleteTodo(id)
    } else if (action === 'edit') {
      onUpdateTodo(id)
    }

    setIsOpen(false)
  }

  const handleCheck = () => {
    setIsChecked(!isChecked)
    onCompleteTodo(id)
  }

  return (
    <div className={styles['todo-item']}>
      <div className={styles['todo-item__checkbox']}>
        <button onClick={handleCheck}>
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
                <button onClick={() => handleAction('edit')}>
                  <Edit2 className={styles['todo-item__icon']} /> Edit
                </button>
              </li>
              <li>
                <button
                  className={styles['todo-item__delete-button']}
                  onClick={() => handleAction('delete')}
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
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
  onCompleteTodo: PropTypes.func.isRequired,
}
