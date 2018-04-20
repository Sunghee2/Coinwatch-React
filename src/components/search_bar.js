import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectCoin} from '../actions';

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

  onSubmit(event) {
    event.preventDefault();
    this.props.selectCoin(this.state.term);
    this.setState({term:''});
  }

  render() {
    return (
      <form 
        className="searchBar row form-inline justify-content-md-center"
        onSubmit={event => this.onSubmit(event)}>
        <input
          className="form-control"
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

function mapStateToProps(state) {

}

function mapDispathToProps(dispatch) {
  return bindActionCreators({selectCoin}, dispatch);
}

export default connect(mapStateToProps, mapDispathToProps)(SearchBar);