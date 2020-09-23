import React, { Component } from 'react'; 
import Gif from './gif';

class GifList extends Component {

  handleClick = (event) => {
    const src = event.target.getAttribute('src')
    const groups = src.match(/.+\/(.+)\/giphy.gif$/)
    this.props.changeClick(groups[1])
  }
 
  render () {
    return (
    <div className="gif-list">
      {this.props.gifs.map(gif => <Gif handleClick={this.handleClick} id={gif.id} key={gif.id} />)}
    </div>
    )
  }
}
export default GifList