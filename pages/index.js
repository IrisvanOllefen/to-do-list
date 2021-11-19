import { useState } from 'react'
import styles from '../styles/home.module.css'

export default function Home() {

  const [todo, setTodo] = useState('')
  const [click, setClick] = useState(false)

  function createTodo(event) {
    setTodo(event.target.value)
  }

  function addTodo(event) {
    event.preventDefault()
    setClick(true)
    console.log(todo)
  }


  return (
      <div className={styles.container}>
        <h1 className={styles.title}>Your To Do List</h1>
        <ul className={styles.list}>
          <li className={styles['list-item']}>Type your to do into the input field</li>
          <li className={styles['list-item']}>Click the item to mark it as complete</li>
          <li className={styles['list-item']}>Click the X to remove it from your list.</li>
        </ul>
        <form className={styles.form}>
          <input type="text" placeholder="New Item" value={todo} onChange={createTodo} className={styles.input}/>
          <button className={styles.button} onClick={addTodo}>Add</button>
        </form>
        <ul className={styles['to-do-list']}> 
          <li>{ !click ? '' : todo }</li>
        </ul>
      </div>
  )
}
