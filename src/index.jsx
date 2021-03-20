import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx'

import '../assets/stylesheets/application.scss';


//const Hello = props => <h1>Hello {props.name}!</h1>


//const Hello = (props) => {
	//React.createElement(component, props, ...children)
	//return React.createElement("h1", null, "Hello ", props.name, props.children);
//}


// class Hello extends React.Component {
//  constructor(props) {
//    super(props)
//    this.state = {
//      clicked: false,
//      counter: 0
//    }
//  }

//  handleClick = () => {
//    this.setState({clicked: !this.state.clicked, counter: this.state.counter + 1});
//    can't do!! this.state.clicked = !this.state.clicked
//  }

//  render() {
//    return <h1 className={this.state.clicked ? 'clicked' : 'not-clicked'} onClick={this.handleClick}>Click me</h1>
//  }

// }

// const root = document.getElementById('root');

// ReactDOM.render (<Hello/>, root)

//ReactDOM.render(
//  <Hello name='World' ></Hello>, root);
//)

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}

//ReactDOM.render inject this component to the root element in the DOM