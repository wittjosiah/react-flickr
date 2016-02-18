import React from 'react';

import PhotoBox from './PhotoBox.jsx';
 
const Grid = React.createClass({
  propTypes: {
    photos: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        farm: React.PropTypes.number.isRequired,
        id: React.PropTypes.string.isRequired,
        secret: React.PropTypes.string.isRequired,
        server: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired
      }))
  },
  render() {
    const photos = this.props.photos.map(p => { 
      return <PhotoBox 
        key={p.url} 
        url={p.url}
        farm={p.farm}
        id={p.id}
        secret={p.secret}
        server={p.server}
      /> 
    });
    return <div>
      {photos}
    </div>
  }
});
 
export default Grid;
