var React = require('react');
var ReactDOM = require('react-dom');
import SearchBar from './components/search_bar';

const API_KEY = [ API_KEY ];

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
