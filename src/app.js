import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/style.scss'


class App extends React.Component {
  render() {
    return (
      <div>
        <IndecisionApp />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
