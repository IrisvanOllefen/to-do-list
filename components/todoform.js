import { useState } from 'react'
import styles from '../styles/home.module.css'

export default function TodoForm(props) {

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