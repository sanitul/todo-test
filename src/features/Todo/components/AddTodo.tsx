import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../tasks/slice';

const AddTodo = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const onSubmit = (event: any) => {
		event.preventDefault();
		dispatch(
			addTask({
				name: value,
			}),
		);
		setValue('');
	};

	return (
		<div className="add-todo">
			<form onSubmit={onSubmit}>
				<input
					type="text"
					className="task-input"
					placeholder="Add task"
					value={value}
					onChange={(event) => setValue(event.target.value)}
				></input>

				<button
					className="task-button"
					type="submit"
					disabled={!value.trim()}
				>
					Save
				</button>
			</form>
		</div>
	);
};

export default AddTodo;
