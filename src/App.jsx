import "./app.css";
import { useState} from "react"

export default function App() {
	const [newItem, setNewItem] = useState("")
	const [todos, setTodos] = useState([]);
	
	function handleSubmit(event) {
		event.preventDefault()

		setTodos((currentTodos) => {
			return [...currentTodos, {id: crypto.randomUUID(), title: newItem, completed:false}]
		})

		setNewItem("")
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="new-item-form">
				<div className="form-row">
					<label htmlFor="item">New Item</label>
					<input type="text" id="item" onChange={e => setNewItem(e.target.value) } />
				</div>
				<button className="btn">Add</button>
			</form>
			<h1 className="header">Todo List</h1>
			<ul className="list">
				{todos.map(todo => {
					return (
						<li key={todo.id}>
							<label>
								<input value={newItem} type="checkbox" />
								{todo.title}
							</label>
							<button className="btn btn-danger">Delete</button>
						</li>
					)
				})}
			</ul>
		</>
	)
}