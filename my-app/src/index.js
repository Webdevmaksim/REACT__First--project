import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Function test
//Pure JSX example
function Test2 (){
  return <button> Привет мир</button>;
}
function Test () {
  return React.createElement('button', null, 'Привет Мир мой Настя');
}

//Creating constants
const FunctionComponents = () =>
  React.createElement('h1', {id: 'hi'}, 'Заголовок');

const Element = React.createElement('p', null, 'параграф');

class Main extends React.Component {
  render(){
    return React.createElement('div', {className: 'main'},
    React.createElement(FunctionComponents, {text: 'свойства текста'}), Element)
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main />

  </React.StrictMode>,
  document.getElementById('root')
);


