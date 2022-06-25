import React, { useState } from 'react';
import './App.css';

const Container = (props) => {
  // every component has the props object as argument and every props object has a children property
  // children are just children nodes in the DOM
  return <div className='parent'>{props.children}</div>;
};

const papaya = 100;

const Heading = ({ text, ...props }) => <h1 {...props}>{text}</h1>;

function App() {
  return (
    <div className='App'>
      <Container>
        <Heading text='Hello World!' className='child' />
        <p>This is another child</p>
      </Container>
      <WelcomeWithState />
    </div>
  );
}

// higher order component simple
// basically just a function that takes a component as argument and returns another component === HOC

const withRedClassName = (Component) => (props) =>
  (
    <div className='red'>
      <Component {...props} />
    </div>
  );

export default withRedClassName(App);

// Higher order component that uses a hook for a class component

class Welcome extends React.Component {
  render() {
    return <h1>Hello, Eric</h1>;
  }
}

const withState = (Component) => {
  const WithStateComponent = (props) => {
    const [state, setState] = useState(0);
    return <Component {...props} />;
  };

  return WithStateComponent;
};

const WelcomeWithState = withState(Welcome);
