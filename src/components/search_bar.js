import  React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){

    super(props);

    this.state = {
      term: ''
    }
  }

  render() {
    return (
      <div className="search-bar">
       <input
        onChange={ event => this.onInputChange(event.target.value) }/>
        <br />
        Value of input: { this.state.term }
      </div>
    )
  }

  onInputChange(term){
    this.setState({term});
    this.props.videoSearchChange(term);
  }
}

export default SearchBar;
