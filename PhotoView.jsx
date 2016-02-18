import React from 'react';

const PhotoView = React.createClass({
  render() {
    const params = this.props.params;
    const url = `https://farm${params.farm}.staticflickr.com/` +
      `${params.server}/${params.id}_${params.secret}_c.jpg`;
    return <div>
      <a href="#/" className="back-nav">&#60; Back</a>
      <img src={url} className="photo"/>
    </div>
  }
});

export default PhotoView;
