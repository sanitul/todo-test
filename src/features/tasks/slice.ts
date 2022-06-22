import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TaskState {
	id: string;
	name: string;
}

const initialState: TaskState[] = [];

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<{ name: string }>) => {
			state.push({
				id: new Date().getTime().toString(),
				name: action.payload.name,
			});
		},
		deleteTask: (state, action: PayloadAction<{ id: string }>) => {
			return state.filter((item) => item.id !== action.payload.id);
		},
	},
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
