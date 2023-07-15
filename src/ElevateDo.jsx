import { Navbar } from './components/nav-bar/Navbar'
import styles from './styles/eletavete-do.module.css'

export function ElevateDo() {
  return (
    <>
      <header className={`wrapper ${styles.app__header}`}>
        <Navbar />
      </header>
    </>
  )
}
