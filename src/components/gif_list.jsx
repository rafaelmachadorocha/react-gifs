import React, { Component } from 'react'; 
import Gif from './gif';

class GifList extends Component {
 
  render () {
    return (
    <div className="gif-list">
      {this.props.gifs.map(gif => <Gif selectedGif={this.props.selectedGif} id={gif.id} key={gif.id} />)}
    </div>
    )
  }
}
export default GifList