import React from 'react';

import Actions from './Actions';

const ENTER_KEY = 13;

const SearchBar = React.createClass({
  propTypes: {
    search: React.PropTypes.string.isRequired,
    sort: React.PropTypes.string.isRequired
  },
  handleChange(e) {
    Actions.setSearch(e.target.value);
  },
  handleKeyPress(e) {
    if (e.charCode == ENTER_KEY) {
      Actions.search();
    }
  },
  handleSort(e) {
    Actions.setSort(e.target.options[e.target.selectedIndex].value); 
  },
  render() {
    return <div className="search-bar">
      <input
        type="text" 
        value={this.props.search} 
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        placeholder="Type search here" 
        className="search-box"
      />
      <button onClick={Actions.search} className="search">Search</button>
      <select 
        value={this.props.sort} 
        onChange={this.handleSort} 
        className="sort"
      >
        <option value="date-posted-asc">
          Date Posted (Ascending)
        </option>
        <option value="date-posted-desc">
          Date Posted (Descending)
        </option>
        <option value="date-taken-asc">
          Date Taken (Ascending)
        </option>
        <option value="date-taken-desc">
          Date Taken (Descending)
        </option>
        <option value="interestingness-desc">
          Interestingness (Descending)
        </option>
        <option value="interestingness-asc">
          Interestingness (Ascending)
        </option>
        <option value="relevance">
          Relevance
        </option>
      </select>
    </div>
  }
});

export default SearchBar;

