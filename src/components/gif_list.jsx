import React from 'react'; 
import Gif from './gif';

// Destructuring
const GifList = ({ gifs, selectedGif }) => {
  return (
    // List pattern
    // everytime you pass an array with props, you need to use map to correctly render the components
    <div className="gif-list">
      {gifs.map(({ id }) => <Gif selectedGif={selectedGif} id={id} key={id} />)}
    </div>
  );
};

export default GifList