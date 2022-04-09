const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((number) => {
  return <li key={number.toString()}>{number}</li>;
});

// listItems = [<li key="1">1</li>, <li key="2">2</li>, <li key="3">3</li>, <li key="4">4</li>, <li key="5">5</li>]