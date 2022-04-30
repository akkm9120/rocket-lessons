// The celciusTemp prop comes from the App component.
export function Fahrenheit({ celsiusTemp }) {
    const fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
    // Render the app's celsiusTemp value and its corresponding Fahrenheit value.
    return (
      <p>
        {celsiusTemp} in Fahrenheit is: {fahrenheitTemp}
      </p>
    );
  }