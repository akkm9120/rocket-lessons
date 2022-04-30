// The setCelsiusTemp setter function sets the value of celsiusTemp

import { useState } from "react";

// in the parent App component.
export function TempForm({ setCelsiusTemp }) {
    // TempForm stores its own local state to control the value in its
    // input field.
    const [tempInputValue, setTempInputValue] = useState('');
  
    // Update input field value and App component state on valid input.
    const handleChange = (event) => {
      const newTempInputValue = event.target.value;
      // If input is a number or empty string, update the value in the
      // input field and set the celsiusTemp state in the parent App component.
      if (newTempInputValue === '' || Number(newTempInputValue)) {
        setTempInputValue(newTempInputValue);
        // Convert newTempInputValue from string to number.
        setCelsiusTemp(Number(newTempInputValue));
      }
    };
  
    // Render a controlled input whose value is controlled by handleChange.
    return <input value={tempInputValue} onChange={handleChange} />;
  }