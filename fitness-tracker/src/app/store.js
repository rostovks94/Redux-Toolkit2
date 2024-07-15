
// Import configureStore from @reduxjs/toolkit to create the store
import { configureStore } from '@reduxjs/toolkit';
// Import exercisesReducer from the features/exercises/exercisesSlice file
import exercisesReducer from '../features/exercises/exercisesSlice';

// Create the store using configureStore and add the exercises reducer
const store = configureStore({
  reducer: {
    exercises: exercisesReducer, // Add exercisesReducer to the store
  },
});

// Export the store as the default export
export default store;