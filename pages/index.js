
import { useState } from 'react'
import styles from '../styles/home.module.css'
import TodoForm from '../components/todoform'
import TodoList from '../components/todolist'

export default function Home() {

  const [todos, setTodos] = useState([])

  function submit(inputValue) {
    setTodos([...todos, inputValue])
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your To Do List</h1>
      <ul className={styles.list}>
        <li className={styles['list-item']}>Type your to do into the input field</li>
        <li className={styles['list-item']}>Click the item to mark it as complete</li>
        <li className={styles['list-item']}>Click the X to remove it from your list.</li>
      </ul>
      <TodoForm onSubmit={submit} />
      <TodoList todos={todos} />
    </div>
  )
}