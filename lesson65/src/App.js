import React, { useState } from 'react';
import './App.css';
import { Fahrenheit } from './components/Fahrenheit/Fahrenheit';
import { TempForm } from './components/Fahrenheit/Form/TempForm';

export default function App() {
  // celsiusTemp and its setter function setCelsiusTemp must be stored
  // in the parent App component to pass data between its child components.
  const [celsiusTemp, setCelsiusTemp] = useState(0);
  return (
    <div>
      <TempForm setCelsiusTemp={setCelsiusTemp} />
      <Fahrenheit celsiusTemp={celsiusTemp} />
    </div>
  );
}

// hangman app
// letters array
// guessed letters array === state
// we need an input, and a submit button
// input only has max 1 letter, input should be a letter

// app, contains arrays
// input => state
// button => on click => it compares the input to the letters array. If there is a match, we update the guessed letters array

// guessedLetters.map( it compares the input to the letters array. If there is a match, we update the guessed letters array )
