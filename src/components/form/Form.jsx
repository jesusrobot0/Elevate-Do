import styles from './form.module.css'

export function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.form__field}>
        <label htmlFor="title" className={styles.form__label}>
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="E.g. Total world domination"
          className={styles.form__input}
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
        ></textarea>
      </div>
      <input type="submit" value="Save" className={styles.form__button} />
    </form>
  )
}
