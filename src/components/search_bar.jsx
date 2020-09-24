import React, { Component } from 'react'; 

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
  }

  componentWillMount() {
    console.log('SearchBar will mount');
    setInterval
  }

  componentDidMount() {
    console.log('SearchBar did mount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { term } = this.state;
    return nextState.term !== term;
    // the render method is called by react to compute the virtual DOM
  }

  componentWillUnmount() {
    clearInterval
  }

  handleUpdate = (event) => {
    this.setState({ term: event.target.value });
    this.props.search(event.target.value);
    //Controlled Component
    //bind the state to the value of the input 
  }

  render () {
    console.log('SearchBar rendered');
    return <input value={this.state.term} type="text" className="form-control form-search" onChange={this.handleUpdate}/>
  }

}

export default SearchBar