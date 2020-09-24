import React, { Component } from 'react'; 

class Gif extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id; //don't call render if the props.id did not change
    // the render method is called by react to compute the virtual DOM
  }

  handleClick = () => {
    if (this.props.selectedGif) {
      this.props.selectedGif(this.props.id);
    }
  }

  render () {
    const { id } = this.props;
    console.log(`Gif ${id} rendered`);
    //Handling null value with a guard clause
    if (!id) {
      return null;
    }
    const src = `https://media0.giphy.com/media/${id}/giphy.gif`;
    return <img src={src} alt="" className="gif" onClick={this.handleClick}/>
  }
}

export default Gif
