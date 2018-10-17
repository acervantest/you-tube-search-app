var React = require('react');
var ReactDOM = require('react-dom');

const API_KEY = [ API_KEY ];

class App extends React.Component {
  render() {
    return (
      <h1>Youtube Search APP [React, Redux, Webpack]</h1>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
