import React from 'react';

function App() {
	const [userName, setUserName] = React.useState('Zander');
	const [todoItems, setTodos] = React.useState([
		{ action: 'Buy Milk', done: true },
		{ action: 'Dentist at 5pm', done: false },
		{ action: 'Go to Gym', done: false },
	]);
	const [newTodo, addNewTodo] = React.useState('');

	const updateValue = (event) => {
		addNewTodo(event.target.value);
	};

	const Todo = ({ todo, index }) => (
		<tr>
			<td>{todo.action}</td>
			<td>
				<input
					type="checkbox"
					checked={todo.done}
					onChange={() => toggleDone(todo)}
				/>
			</td>
			<td>
				<button onClick={() => removeTodo(index)}>Delete</button>
			</td>
		</tr>
	);

	const removeTodo = (index) => {
		const newTodos = [...todoItems];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	function newTodoItem() {
		setTodos([...todoItems, { action: newTodo, done: false }]);
		addNewTodo('');
	}

	function toggleDone(todo) {
		const updatedItems = todoItems.map((item) =>
			item.action === todo.action ? { ...item, done: !item.done } : item
		);
		setTodos(updatedItems);
	}

	return (
		<div className="App">
			<div className="col-12">
				<h2 className="bg-primary text-white text-center p2">
					{userName}'s To do list
				</h2>
			</div>
			<div className="col-12">
				<input
					className="form-control"
					value={newTodo}
					onChange={updateValue}
				/>
				<button onClick={newTodoItem} className="btn btn-primary">
					Add
				</button>
			</div>
			<div className="col-12">
				<div className="todo-list">
					<table className="table">
						<thead>
							<tr>
								<th>Task</th>
								<th>Complete</th>
							</tr>
						</thead>
						<tbody>
							{todoItems.map((todo, index) => (
								<Todo key={index} index={index} todo={todo} />
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default App;
