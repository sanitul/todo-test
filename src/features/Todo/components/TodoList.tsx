import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

const TodoList = () => {
	const tasks = useSelector((state: RootState) => state.tasks);

	return (
		<ul className="tasks-list">
			{tasks.map((task, index) => (
				<TodoItem key={index} id={task.id} title={task.name} />
			))}
		</ul>
	);
};

export default TodoList;
