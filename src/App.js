import React from 'react';
import './App.css';

// se define  el componente PersonCard
const PersonCard = ({ firstName, lastName, age, hairColor }) => {
  return (
    <div>
      <h2>{lastName}, {firstName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
  );
};

// Usar el componente PersonCard para mostrar cuatro personas diferentes
const App = () => {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
      <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
    </div>
  );
};

export default App;