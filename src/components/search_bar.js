import React, {Component} from 'react';
// import {connect} from 'react-redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onInputChange(term) {
    this.setState({
      term
    });
  }

  render() {
    return (
      <form className="row">
        <input
          className="col-11 form-control"
          type="text"
          placeholder="Coin"
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}/>
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;