// Import createSlice from @reduxjs/toolkit to create a slice
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  exercises: [], // Array to store exercises
};

// Create a slice with the name 'exercises'
const exercisesSlice = createSlice({
  name: 'exercises', // Name of the slice
  initialState, // Initial state
  reducers: {
    // Define a reducer to add an exercise
    addExercise: (state, action) => {
      state.exercises.push(action.payload); // Add a new exercise to the array
    },
    // Define a reducer to update an exercise
    updateExercise: (state, action) => {
      const { id, data } = action.payload; // Extract id and data from the action
      const index = state.exercises.findIndex(exercise => exercise.id === id); // Find the index of the exercise by id
      if (index !== -1) {
        state.exercises[index] = { ...state.exercises[index], ...data }; // Update the exercise data
      }
    },
  },
});

// Export the addExercise and updateExercise actions
export const { addExercise, updateExercise } = exercisesSlice.actions;
// Export the exercisesReducer as the default export
export default exercisesSlice.reducer;