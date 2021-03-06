import { useState } from 'react';
import './App.css';
import AddTodo from './features/Todo/components/AddTodo';
import TodoList from './features/Todo/components/TodoList';

function App() {
	const [count, setCount] = useState<number>(0);

	return (
		<div className="app">
			<h1 className="app-title">My Tasks</h1>
			<AddTodo />
			<TodoList />
		</div>
	);
}

export default App;
