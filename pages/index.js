import Head from '../components/head.js'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div>
      <Head/>
      <div className={styles.container}>
        <h1 className={styles.title}>Your To Do List</h1>
        <ul className={styles.list}>
          <li className={styles['list-item']}>Type your to do into the input field</li>
          <li className={styles['list-item']}>Click the item to mark it as complete</li>
          <li className={styles['list-item']}>Click the X to remove it from your list.</li>
        </ul>
        <form className={styles.form}>
          <input type="Text" placeholder="New Item" className={styles.input} />
          <button className={styles.button}>Add</button>
        </form>
      </div>
    </div>
  )
}
