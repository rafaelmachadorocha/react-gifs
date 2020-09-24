import React, { Component } from 'react'; 

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
  }
  handleUpdate = (event) => {
    this.setState({term: event.target.value})
    this.props.search(event.target.value);
    //Controlled Component
    //bind the state to the value of the input 
  }
  render () {
    return <input value={this.state.term} type="text" className="form-control form-search" onChange={this.handleUpdate}/>
  }
}

export default SearchBar