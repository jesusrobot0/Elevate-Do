import { Navbar } from './components/nav-bar/Navbar'
import { Form } from './components/form/Form'
import styles from './styles/eletavete-do.module.css'

export function ElevateDo() {
  return (
    <>
      <header className={`wrapper ${styles.app__header}`}>
        <Navbar />
      </header>
      <div className={`wrapper ${styles.app__body}`}>
        <aside className={styles.app__sidebar}>
          <Form />
        </aside>
        <main className={styles.app__main}>MAIN APP</main>
      </div>
    </>
  )
}
