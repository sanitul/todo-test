import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../slice';

const TodoItem: React.FC<{ id: string; title: string }> = ({ id, title }) => {
	const dispatch = useDispatch();
	const removeTask = () => {
		dispatch(
			deleteTask({
				id: id,
			}),
		);
	};

	return (
		<li className="task-item">
			<div className="task-item-text">{title}</div>
			<div>
				<button className="remove-task-button">Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
