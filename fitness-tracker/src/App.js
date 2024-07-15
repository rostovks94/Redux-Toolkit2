// src/App.js

// Importing React and useState hook for managing local state
import React, { useState } from 'react';
// Importing useSelector to read state from the Redux store and useDispatch to dispatch actions
import { useSelector, useDispatch } from 'react-redux';
// Importing actions addExercise and updateExercise from the exercisesSlice
import { addExercise, updateExercise } from './features/exercises/exercisesSlice';

function App() {
  // Using useSelector to get the exercises array from the Redux store
  const exercises = useSelector(state => state.exercises.exercises);
  // Using useDispatch to get the dispatch function for dispatching actions
  const dispatch = useDispatch();
  // Local state for managing the selected exercise
  const [selectedExercise, setSelectedExercise] = useState('');
  // Local state for managing the selected exercise details
  const [exerciseDetails, setExerciseDetails] = useState(null);

  // Predefined list of exercises with norms for the dropdown menu
  const exerciseOptions = [
    { id: 1, name: 'Push-up', norm: '20 reps' },
    { id: 2, name: 'Sit-up', norm: '30 reps' },
    { id: 3, name: 'Squat', norm: '25 reps' },
    { id: 4, name: 'Lunge', norm: '15 reps each leg' },
    { id: 5, name: 'Plank', norm: '1 minute' }
  ];

  // Handler function to dispatch the addExercise action with a new exercise object
  const handleAddExercise = () => {
    if (selectedExercise) {
      const selectedOption = exerciseOptions.find(option => option.name === selectedExercise);
      dispatch(addExercise({ id: exercises.length + 1, name: selectedExercise, norm: selectedOption.norm }));
      setSelectedExercise('');
      setExerciseDetails(null);
    }
  };

  // Handler function for selecting an exercise from the dropdown
  const handleSelectExercise = (e) => {
    const selectedName = e.target.value;
    setSelectedExercise(selectedName);
    const selectedOption = exerciseOptions.find(option => option.name === selectedName);
    setExerciseDetails(selectedOption);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fitness Tracker</h1>
        {/* Dropdown menu for selecting the exercise */}
        <select 
          value={selectedExercise} 
          onChange={handleSelectExercise}
        >
          <option value="" disabled>Select exercise</option>
          {exerciseOptions.map(option => (
            <option key={option.id} value={option.name}>{option.name}</option>
          ))}
        </select>
        {/* Display exercise details if an exercise is selected */}
        {exerciseDetails && (
          <div>
            <h2>Norms for {exerciseDetails.name}</h2>
            <p>{exerciseDetails.norm}</p>
          </div>
        )}
        {/* Button to add the exercise */}
        <button onClick={handleAddExercise}>Add Exercise</button>
        {/* Unordered list to display the list of exercises */}
        <ul>
          {exercises.map(exercise => (
            // Each exercise is displayed as a list item
            <li key={exercise.id}>
              {exercise.name} - {exercise.norm}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

// Exporting the App component as the default export
export default App;