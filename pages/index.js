export default function Home() {
  return (
    <div>
      <h1>Your To Do List</h1>
      <ul>
        <li>Type your to do into the input field</li>
        <li>Click the item to mark it as complete</li>
        <li>Click the X to remove it from your list.</li>
      </ul>
      <form>
        <input type="Text" placeholder="New Item" />
        <button>Add</button>
      </form>
    </div>
  )
}
