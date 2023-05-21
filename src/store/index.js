'use client';
import { configureStore } from '@reduxjs/toolkit';
import technologyReducer from './tehnology';
import themeReducer from './theme';
const store = configureStore({
	reducer: {
		technology: technologyReducer,
		theme: themeReducer,
	},
});
export default store;
