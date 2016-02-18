import React from 'react';

const PhotoBox = React.createClass({
  propTypes: {
    farm: React.PropTypes.number.isRequired,
    id: React.PropTypes.string.isRequired,
    secret: React.PropTypes.string.isRequired,
    server: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired
  },
  render() {
    const link = `#/photo/${this.props.farm}/${this.props.server}/` +
      `${this.props.id}/${this.props.secret}`;
    return <a href={link}>
      <img src={this.props.url} className="photo-box"/>
    </a>
  }
});

export default PhotoBox;
