
import { useState } from 'react'
import styles from '../styles/home.module.css'

function TodoForm(props) {

  const [inputValue, setInputValue] = useState('')

  function changeInputValue(event) {
    setInputValue(event.target.value)
  }

  function submit(event) {
    event.preventDefault()
    props.onSubmit(inputValue)
    setInputValue('')
  }

  return (
  <form className={styles.form} onSubmit={submit}>
    <input 
      type="text" 
      value={inputValue} 
      onChange={changeInputValue} 
      placeholder="New Item" 
      className={styles.input}
    />
    <button type="submit" className={styles.button}>Add</button>
  </form>
  )
}

function TodoList(props) {

  return (
  <ul className={styles['to-do-list']}> 
    {props.todos.map((todo) => {
      return (
        <div key="div" className={styles['to-do-item-box']}>
          <input type="checkbox" className={styles['to-do-checkbox']}/>
          <label className={styles['to-do-label']}>
          <li key={todo} className={styles['to-do-item']}>{todo}</li>
          </label>
        </div>
      )
    })}
  </ul>
  )
}

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