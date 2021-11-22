import styles from '../styles/todolist.module.css'

export default function TodoList(props) {

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
  