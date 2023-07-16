import { useState } from 'react'
import { Edit2, Square, Trash, CheckSquare, MoreHorizontal } from 'lucide-react'
import styles from './todo-item.module.css'

export function TodoItem() {
  const [isOpen, setIsOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className={styles['todo-item']}>
      <div className={styles['todo-item__checkbox']}>
        <button onClick={() => setIsChecked(!isChecked)}>
          {isChecked ? <CheckSquare /> : <Square />}
        </button>
      </div>
      <div className={styles['todo-item__body']}>
        <div className={styles['todo-item__header']}>
          <h3>Lorem ipsum dolor sit amet.</h3>
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
        <p className={styles['todo-item__date']}>Created at: 15/07/2023</p>
        <p className={styles['todo-item__description']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          architecto quisquam maiores et. Enim aliquid corrupti eius dolores
          accusamus sunt eaque laudantium illo corporis commodi?
        </p>
      </div>
    </div>
  )
}
