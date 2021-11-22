import { useState } from 'react'
import styles from '../styles/home.module.css'

export default function Home({ allToDos = []}) {

  const [todo, setTodo] = useState()
  const [todos, setTodos] = useState([])
  const [click, setClick] = useState(false)

  allToDos = [todo]

  function createTodo(event) {
    setTodo(event.target.value)
    setTodos([todo])
  }

  function addTodo(event) {
    event.preventDefault()
    // setTodo('')
    // setTodos([todo])
    setClick(true)
    console.log(todo)
    console.log("todos" , todos)
    return todos
  }

  // function ToDo() {
  //   return <li>{todo}</li>
  // }

  // const todos = allToDos.map((todo) => (
  //   console.log(todo)
  // ))

  // console.log(allToDos, todos, todo)

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
          {/* { !click ? '' : <ToDo /> } */}
          {todos.map((todo) => {
            return (<li key='1'>{todo}</li>)
          })}
          {/* <li>{todo}</li> */}
        </ul>
      </div>
  )
}
