import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
//import giphy from 'giphy-api';
const giphy = require('giphy-api')({
  apiKey: 'fEeIPT8WDQiwgmV09yb4FPyEfTw11ghF',
  https: true
});

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: null // 'LRBjTCzr99kjpNZaL9'  
    }
    // this.changeClick = this.changeClick.bind(this)
  }

  changeClick = (id) => {
    this.setState({ selectedGifId: id });
  }

  search = (query) => { 
    giphy.search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, response) => {
      this.setState({gifs: response.data})
    })
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectedGif={this.changeClick} />
        </div>
      </div>
    );
  }
}

export default App