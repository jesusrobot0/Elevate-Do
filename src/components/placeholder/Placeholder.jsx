import { Plus } from 'lucide-react'
import styles from './placeholder.module.css'

export function Placeholder() {
  return (
    <div className={styles.placeholder}>
      <Plus size={120} className={styles.placeholder__icon} />
      <h3>It looks like you still dont have anything to do</h3>
      <p>Start by adding a new one</p>
    </div>
  )
}
