'use client'
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	filter: '',
};
const technologySlice = createSlice({
	name: 'technology',
	initialState,
	reducers: {},
});
export const {} = technologySlice.actions;
export default technologySlice.reducer;
