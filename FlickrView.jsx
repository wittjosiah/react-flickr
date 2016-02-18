import React from 'react';
import Reflux from 'reflux';

import Actions from './Actions';
import Grid from './Grid.jsx';
import SearchBar from './SearchBar.jsx';
import Store from './Store';

const FlickrView = React.createClass({
  mixins: [Reflux.connect(Store, 'data')],
  getInitialState() {
    return {
      data: Store.getState()
    }
  },
  componentDidMount() {
    if (this.state.data.photos.length == 0) {
      Actions.search();
    }
  },
  render() {
    return <div>
      <SearchBar search={this.state.data.search} sort={this.state.data.sort}/>
      <Grid photos={this.state.data.photos}/>
    </div>
  }
});
 
export default FlickrView;

