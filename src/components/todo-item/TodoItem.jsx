import { useState } from 'react'
import PropTypes from 'prop-types'
import { Edit2, Square, Trash, CheckSquare, MoreHorizontal } from 'lucide-react'
import styles from './todo-item.module.css'

export function TodoItem({ date, title, description }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const formattedDate = date.toLocaleDateString()

  return (
    <div className={styles['todo-item']}>
      <div className={styles['todo-item__checkbox']}>
        <button onClick={() => setIsChecked(!isChecked)}>
          {isChecked ? <CheckSquare /> : <Square />}
        </button>
      </div>
      <div className={styles['todo-item__body']}>
        <h3>{title}</h3>
        <p className={styles['todo-item__date']}>Created at: {formattedDate}</p>
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
                <button className={styles['todo-item__delete-button']}>
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
  date: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
